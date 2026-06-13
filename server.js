require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_FOOTBALL_KEY;

// 永続的なファイルベースのキャッシュ
const CACHE_FILE = path.join(__dirname, 'cache.json');
let cache = {};

// サーバー起動時にキャッシュを読み込む
if (fs.existsSync(CACHE_FILE)) {
  try {
    const data = fs.readFileSync(CACHE_FILE, 'utf8');
    const rawCache = JSON.parse(data);
    cache = {};
    for (const key of Object.keys(rawCache)) {
      cache[key.normalize('NFC')] = rawCache[key];
    }
    console.log(`[Cache] 既存のキャッシュデータを読み込みました`);
  } catch(e) {
    console.warn(`[Cache] キャッシュの読み込みに失敗しました`);
  }
}

// キャッシュをファイルに保存する関数
function saveCache() {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}

// API-Football の共通設定
const apiOptions = {
  headers: {
    'x-apisports-key': API_KEY,
    'x-rapidapi-host': 'v3.football.api-sports.io'
  }
};
const BASE_URL = 'https://v3.football.api-sports.io';

// ワールドカップのリーグID(1)とシーズン(2026)を固定
const WC_LEAGUE_ID = 1;
const WC_SEASON = 2026;

// 日本語のチーム名をAPI-Football用の英語名に変換する辞書
const nameMap = {
  'メキシコ': 'Mexico', '韓国': 'South Korea', '南アフリカ': 'South Africa', 'チェコ': 'Czech Republic',
  'カナダ': 'Canada', 'カタール': 'Qatar', 'スイス': 'Switzerland', 'ボスニア・H': 'Bosnia & Herzegovina',
  'ブラジル': 'Brazil', 'ハイチ': 'Haiti', 'スコットランド': 'Scotland', 'モロッコ': 'Morocco',
  'アメリカ': 'USA', 'パラグアイ': 'Paraguay', 'オーストラリア': 'Australia', 'トルコ': 'Türkiye',
  'ドイツ': 'Germany', 'コートジボワール': 'Ivory Coast', 'エクアドル': 'Ecuador', 'キュラソー': 'Curacao',
  'オランダ': 'Netherlands', '日本': 'Japan', 'チュニジア': 'Tunisia', 'スウェーデン': 'Sweden',
  'ベルギー': 'Belgium', 'エジプト': 'Egypt', 'イラン': 'Iran', 'ニュージーランド': 'New Zealand',
  'スペイン': 'Spain', 'サウジアラビア': 'Saudi Arabia', 'ウルグアイ': 'Uruguay', 'カーボベルデ': 'Cape Verde Islands',
  'フランス': 'France', 'セネガル': 'Senegal', 'ノルウェー': 'Norway', 'イラク': 'Iraq',
  'アルゼンチン': 'Argentina', 'アルジェリア': 'Algeria', 'オーストリア': 'Austria', 'ヨルダン': 'Jordan',
  'ポルトガル': 'Portugal', 'ウズベキスタン': 'Uzbekistan', 'コロンビア': 'Colombia', 'コンゴDR': 'Congo DR',
  'イングランド': 'England', 'クロアチア': 'Croatia', 'ガーナ': 'Ghana', 'パナマ': 'Panama'
};

app.get('/api/team', async (req, res) => {
  let teamName = req.query.name;
  if (!teamName) {
    return res.status(400).json({ error: 'チーム名(name)が必要です' });
  }
  teamName = teamName.normalize('NFC');

  // 1. キャッシュの確認 (無期限)
  if (cache[teamName]) {
    console.log(`[Cache Hit] ${teamName} (取得済みデータから返却します)`);
    return res.json(cache[teamName].data);
  }

  // 二度と外部APIには通信せず、キャッシュにない場合はエラーを返す
  console.log(`[Cache Miss] ${teamName} のデータがキャッシュにありません`);
  return res.status(404).json({ error: `チームのデータがキャッシュに存在しません: ${teamName}` });
});

app.get('/api/tournament', async (req, res) => {
  if (cache['tournament']) {
    console.log(`[Cache Hit] Tournament Data (取得済みデータから返却します)`);
    return res.json(cache['tournament'].data);
  }

  let tournamentData = {
    standings: {},
    results: {},
    bracket: []
  };

  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'ここにGeminiのAPIキーを貼り付けます') {
    try {
      console.log(`[Gemini API] 大会シミュレーションデータを取得中...`);
      const { GoogleGenAI } = require('@google/genai');
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `あなたはサッカージャーナリストです。FIFAワールドカップ2026はまだ開催されていませんが、シミュレーションとして架空の大会結果を作成してください。
以下のJSONフォーマットのみを出力してください。
{
  "standings": {
    "日本": {"w":2,"d":1,"l":0,"pts":7},
    "オランダ": {"w":1,"d":2,"l":0,"pts":5},
    "スウェーデン": {"w":1,"d":0,"l":2,"pts":3},
    "チュニジア": {"w":0,"d":1,"l":2,"pts":1}
  },
  "results": {
    "オランダ vs 日本": "1-2",
    "日本 vs スウェーデン": "2-0",
    "チュニジア vs 日本": "1-1"
  },
  "bracket": ["日本", "ブラジル", "フランス", "アルゼンチン", "スペイン", "イングランド", "ドイツ", "ポルトガル"]
}`;
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });
      let jsonStr = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
      tournamentData = JSON.parse(jsonStr);
      console.log(`[Gemini API] 大会シミュレーションデータ取得完了`);
    } catch (err) {
      console.error('Gemini API Error (Tournament):', err.message);
    }
  }

  cache['tournament'] = { timestamp: Date.now(), data: tournamentData };
  saveCache();
  res.json(tournamentData);
});

app.listen(PORT, () => {
  console.log(`中継サーバーが起動しました: http://localhost:${PORT}`);
});
