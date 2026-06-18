/* ================================================================
   DATA
================================================================ */
const GROUPS = [
  {id:'A', teams:[
    {flag:'🇲🇽',name:'メキシコ',host:true},{flag:'🇰🇷',name:'韓国'},{flag:'🇿🇦',name:'南アフリカ'},{flag:'🇨🇿',name:'チェコ'}
  ], city:'メキシコシティ / グアダラハラ'},
  {id:'B', teams:[
    {flag:'🇨🇦',name:'カナダ',host:true},{flag:'🇶🇦',name:'カタール'},{flag:'🇨🇭',name:'スイス'},{flag:'🇧🇦',name:'ボスニア・H'}
  ], city:'トロント / バンクーバー'},
  {id:'C', teams:[
    {flag:'🇧🇷',name:'ブラジル'},{flag:'🇭🇹',name:'ハイチ'},{flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',name:'スコットランド'},{flag:'🇲🇦',name:'モロッコ'}
  ], city:'ニューヨーク / ボストン'},
  {id:'D', teams:[
    {flag:'🇺🇸',name:'アメリカ',host:true},{flag:'🇵🇾',name:'パラグアイ'},{flag:'🇦🇺',name:'オーストラリア'},{flag:'🇹🇷',name:'トルコ'}
  ], city:'ロサンゼルス / シアトル'},
  {id:'E', teams:[
    {flag:'🇩🇪',name:'ドイツ'},{flag:'🇨🇮',name:'コートジボワール'},{flag:'🇪🇨',name:'エクアドル'},{flag:'🇨🇼',name:'キュラソー'}
  ], city:'ヒューストン / フィラデルフィア'},
  {id:'F', jp:true, teams:[
    {flag:'🇳🇱',name:'オランダ'},{flag:'🇯🇵',name:'日本',jp:true},{flag:'🇹🇳',name:'チュニジア'},{flag:'🇸🇪',name:'スウェーデン'}
  ], city:'ダラス / モンテレイ'},
  {id:'G', teams:[
    {flag:'🇧🇪',name:'ベルギー'},{flag:'🇪🇬',name:'エジプト'},{flag:'🇮🇷',name:'イラン'},{flag:'🇳🇿',name:'ニュージーランド'}
  ], city:'ロサンゼルス / シアトル'},
  {id:'H', teams:[
    {flag:'🇪🇸',name:'スペイン'},{flag:'🇸🇦',name:'サウジアラビア'},{flag:'🇺🇾',name:'ウルグアイ'},{flag:'🇨🇻',name:'カーボベルデ'}
  ], city:'アトランタ / マイアミ'},
  {id:'I', teams:[
    {flag:'🇫🇷',name:'フランス'},{flag:'🇸🇳',name:'セネガル'},{flag:'🇳🇴',name:'ノルウェー'},{flag:'🇮🇶',name:'イラク'}
  ], city:'ニューヨーク / ボストン'},
  {id:'J', teams:[
    {flag:'🇦🇷',name:'アルゼンチン'},{flag:'🇩🇿',name:'アルジェリア'},{flag:'🇦🇹',name:'オーストリア'},{flag:'🇯🇴',name:'ヨルダン'}
  ], city:'カンザスシティ / ダラス'},
  {id:'K', teams:[
    {flag:'🇵🇹',name:'ポルトガル'},{flag:'🇺🇿',name:'ウズベキスタン'},{flag:'🇨🇴',name:'コロンビア'},{flag:'🇨🇩',name:'コンゴDR'}
  ], city:'サンフランシスコ / シアトル'},
  {id:'L', teams:[
    {flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',name:'イングランド'},{flag:'🇭🇷',name:'クロアチア'},{flag:'🇬🇭',name:'ガーナ'},{flag:'🇵🇦',name:'パナマ'}
  ], city:'ニューヨーク / ボストン'},
];

const SCHEDULE_DAYS = [
  {key:'d612',label:'6/12 金',matches:[
    {time:'4:00',grp:'A',jp:false,teams:'メキシコ vs 南アフリカ',venue:'エスタディオ・アステカ',note:'DAZN / NHK総合（開幕戦）',score:'2-0',scorers:{'メキシコ':['フリアン・キニョネス 8\'','ラウル・ヒメネス 66\''],'南アフリカ':[]}},
    {time:'11:00',grp:'A',jp:false,teams:'韓国 vs チェコ',venue:'グアダラハラ・スタジアム',note:'DAZN',score:'2-1',scorers:{'韓国':['ファン・インボム 67\'','オ・ヒョンギュ 80\''],'チェコ':['ラディスラフ・クライチ 59\'']}},
  ]},
  {key:'d613',label:'6/13 土',matches:[
    {time:'4:00',grp:'B',jp:false,teams:'カナダ vs ボスニア・H',venue:'トロント・スタジアム',note:'DAZN / NHK総合',score:'1-1',scorers:{'カナダ':['サイル・ラリン 78\''],'ボスニア・H':['ヨヴォ・ルキッチ 21\'']}},
    {time:'10:00',grp:'D',jp:false,teams:'アメリカ vs パラグアイ',venue:'ロサンゼルス・スタジアム',note:'DAZN',score:'4-1',scorers:{'アメリカ':['オウンゴール 6\'','フォラリン・バログン 30\'','フォラリン・バログン 45\'+4','ジョバンニ・レイナ 90\'+7'],'パラグアイ':['マウリシオ 72\'']}},
  ]},
  {key:'d614',label:'6/14 日',matches:[
    {time:'4:00',grp:'B',jp:false,teams:'カタール vs スイス',venue:'SF・ベイエリア・スタジアム',note:'DAZN',score:'1-1',scorers:{'カタール':['オウンゴール（ミロ・ムハイム） 90\'+4'],'スイス':['ブレール・エンボロ 17\' PK']}},
    {time:'7:00',grp:'C',jp:false,teams:'ブラジル vs モロッコ',venue:'NY/NJ・スタジアム',note:'DAZN',score:'1-1',scorers:{'ブラジル':['ヴィニシウス・ジュニオール 32\''],'モロッコ':['イスマエル・サイビ 21\'']}},
    {time:'10:00',grp:'C',jp:false,teams:'ハイチ vs スコットランド',venue:'ボストン・スタジアム',note:'DAZN / NHK総合',score:'0-1',scorers:{'ハイチ':[],'スコットランド':['ジョン・マッギン 28\'']}},
    {time:'13:00',grp:'D',jp:false,teams:'オーストラリア vs トルコ',venue:'BCプレイス（バンクーバー）',note:'DAZN',score:'2-0',scorers:{'オーストラリア':['ネストリー・イランクンダ 27\'','コナー・メトカーフ 75\''],'トルコ':[]}},
  ]},
  {key:'d615',label:'6/15 月 ★',matches:[
    {time:'2:00',grp:'E',jp:false,teams:'ドイツ vs キュラソー',venue:'ヒューストン・スタジアム',note:'DAZN',score:'7-1',scorers:{'ドイツ':['フェリックス・ヌメチャ 6\'','ニコ・シュロッターベック 38\'','カイ・ハフェルツ 45\'+5 PK','ジャマル・ムシアラ 47\'','ナサニエル・ブラウン 68\'','デニズ・ウンダフ 78\'','カイ・ハフェルツ 88\''],'キュラソー':['リヴァノ・コメネンシア 21\'']}},
    {time:'5:00',grp:'F',jp:true,teams:'🇳🇱 オランダ vs 日本 🇯🇵',venue:'ダラス・スタジアム',note:'DAZN 無料 / NHK総合',score:'2-2',scorers:{'オランダ':['フィルジル・ファン・ダイク 50\'','クリセンシオ・サマーヴィル 63\''],'日本':['中村敬斗 56\'','鎌田大地 88\'']}},
    {time:'8:00',grp:'E',jp:false,teams:'コートジボワール vs エクアドル',venue:'フィラデルフィア・スタジアム',note:'DAZN',score:'1-0',scorers:{'コートジボワール':['アマド・ディアロ 90\''],'エクアドル':[]}},
    {time:'11:00',grp:'F',jp:false,teams:'スウェーデン vs チュニジア',venue:'エスタディオ・モンテレイ',note:'DAZN',score:'5-1',scorers:{'スウェーデン':['ヤシン・アヤリ 7\'','アレクサンデル・イサク 40\'','ヴィクトル・ギェケレシュ 59\'','マティアス・スヴァンベリ 84\'','ヤシン・アヤリ 90\'+6'],'チュニジア':['オマル・レキク 43\'']}},
  ]},
  {key:'d616',label:'6/16 火',matches:[
    {time:'1:00',grp:'H',jp:false,teams:'スペイン vs カーボベルデ',venue:'アトランタ・スタジアム',note:'DAZN / NHK総合',score:'0-0',scorers:{'スペイン':[],'カーボベルデ':[]}},
    {time:'4:00',grp:'G',jp:false,teams:'ベルギー vs エジプト',venue:'シアトル・スタジアム',note:'DAZN / NHK総合',score:'1-1',scorers:{'ベルギー':['オウンゴール（モハメド・ハニー） 66\''],'エジプト':['エマム・アショウル 19\'']}},
    {time:'7:00',grp:'H',jp:false,teams:'サウジアラビア vs ウルグアイ',venue:'マイアミ・スタジアム',note:'DAZN',score:'1-1',scorers:{'サウジアラビア':['アブドゥルエラ・アル＝アムリ 41\''],'ウルグアイ':['マキシ・アラウホ 80\'']}},
    {time:'10:00',grp:'G',jp:false,teams:'イラン vs ニュージーランド',venue:'ロサンゼルス・スタジアム',note:'DAZN',score:'2-2',scorers:{'イラン':['ラミン・レザエイアン 31\'','モハンマド・モヘビ 63\''],'ニュージーランド':['エライジャ・ジャスト 6\'','エライジャ・ジャスト 54\'']}},
  ]},
  {key:'d617',label:'6/17 水',matches:[
    {time:'4:00',grp:'I',jp:false,teams:'フランス vs セネガル',venue:'NY/NJ・スタジアム',note:'DAZN / フジ',score:'3-1',scorers:{'フランス':['キリアン・エムバペ 66\'','ブラッドリー・バルコラ 82\'','キリアン・エムバペ 90\'+6'],'セネガル':['イブラヒム・ンバイエ 90\'+5']}},
    {time:'7:00',grp:'I',jp:false,teams:'イラク vs ノルウェー',venue:'ボストン・スタジアム',note:'DAZN',score:'1-4',scorers:{'イラク':['アイメン・フセイン 39\''],'ノルウェー':['アーリング・ハーランド 29\'','アーリング・ハーランド 43\'','レオ・オスティガール 76\'','オウンゴール（アイメン・フセイン） 90\'+6']}},
    {time:'10:00',grp:'J',jp:false,teams:'アルゼンチン vs アルジェリア',venue:'カンザスシティ・スタジアム',note:'DAZN / NHK総合',score:'3-0',scorers:{'アルゼンチン':['リオネル・メッシ 17\'','リオネル・メッシ 60\'','リオネル・メッシ 76\''],'アルジェリア':[]}},
    {time:'13:00',grp:'J',jp:false,teams:'オーストリア vs ヨルダン',venue:'SF・ベイエリア・スタジアム',note:'DAZN',score:'3-1',scorers:{'オーストリア':['ロマーノ・シュミット 21\'','オウンゴール（ヤザン・アル＝アラブ） 76\'','マルコ・アルナウトビッチ 90\'+12 PK'],'ヨルダン':['アリ・オルワン 50\'']}},
  ]},
  {key:'d618',label:'6/18 木',matches:[
    {time:'2:00',grp:'K',jp:false,teams:'ポルトガル vs コンゴDR',venue:'SF・ベイエリア・スタジアム',note:'DAZN',score:'1-1',scorers:{'ポルトガル':['ジョアン・ネベス 6\''],'コンゴDR':['ヨアヌ・ウィサ 45\'+5']}},
    {time:'5:00',grp:'L',jp:false,teams:'イングランド vs クロアチア',venue:'ダラス・スタジアム',note:'DAZN',score:'4-2',scorers:{'イングランド':['ハリー・ケイン 12\' PK','ハリー・ケイン 42\'','ジュード・ベリンガム 47\'','マーカス・ラッシュフォード 85\''],'クロアチア':['マルティン・バトゥリナ 36\'','ペタル・ムサ 45\'+5']}},
    {time:'8:00',grp:'L',jp:false,teams:'ガーナ vs パナマ',venue:'トロント・スタジアム',note:'DAZN',score:'1-0',scorers:{'ガーナ':['カレブ・イレンキー 90\'+5'],'パナマ':[]}},
    {time:'11:00',grp:'K',jp:false,teams:'ウズベキスタン vs コロンビア',venue:'シアトル・スタジアム',note:'DAZN',score:'1-3',scorers:{'ウズベキスタン':['アッボスベク・ファイズラエフ 60\''],'コロンビア':['ダニエル・ムニョス 40\'','ルイス・ディアス 65\'','ハミントン・カンパス 90\'+9']}},
  ]},
  {key:'d619',label:'6/19 金',matches:[
    {time:'1:00',grp:'A',jp:false,teams:'チェコ vs 南アフリカ',venue:'グアダラハラ・スタジアム',note:'DAZN'},
    {time:'4:00',grp:'B',jp:false,teams:'スイス vs ボスニア・H',venue:'バンクーバー',note:'DAZN'},
    {time:'7:00',grp:'B',jp:false,teams:'カナダ vs カタール',venue:'トロント・スタジアム',note:'DAZN'},
    {time:'10:00',grp:'A',jp:false,teams:'メキシコ vs 韓国',venue:'エスタディオ・アステカ',note:'DAZN'},
  ]},
  {key:'d620',label:'6/20 土',matches:[
    {time:'4:00',grp:'D',jp:false,teams:'アメリカ vs オーストラリア',venue:'ロサンゼルス・スタジアム',note:'DAZN'},
    {time:'7:00',grp:'C',jp:false,teams:'スコットランド vs モロッコ',venue:'ボストン・スタジアム',note:'DAZN'},
    {time:'10:00',grp:'C',jp:false,teams:'ブラジル vs ハイチ',venue:'NY/NJ・スタジアム',note:'DAZN'},
    {time:'13:00',grp:'D',jp:false,teams:'トルコ vs パラグアイ',venue:'シアトル・スタジアム',note:'DAZN'},
  ]},
  {key:'d621',label:'6/21 日 ★',matches:[
    {time:'2:00',grp:'F',jp:false,teams:'オランダ vs スウェーデン',venue:'ダラス・スタジアム',note:'DAZN'},
    {time:'5:00',grp:'E',jp:false,teams:'ドイツ vs コートジボワール',venue:'ヒューストン・スタジアム',note:'DAZN'},
    {time:'9:00',grp:'E',jp:false,teams:'エクアドル vs キュラソー',venue:'フィラデルフィア・スタジアム',note:'DAZN'},
    {time:'13:00',grp:'F',jp:true,teams:'🇹🇳 チュニジア vs 日本 🇯🇵',venue:'エスタディオBBVA（モンテレイ）',note:'DAZN 無料 / 日テレ / NHK BS'},
  ]},
  {key:'d622',label:'6/22 月',matches:[
    {time:'1:00',grp:'H',jp:false,teams:'スペイン vs サウジアラビア',venue:'アトランタ・スタジアム',note:'DAZN'},
    {time:'4:00',grp:'G',jp:false,teams:'ベルギー vs イラン',venue:'ロサンゼルス・スタジアム',note:'DAZN'},
    {time:'7:00',grp:'H',jp:false,teams:'ウルグアイ vs カーボベルデ',venue:'マイアミ・スタジアム',note:'DAZN'},
    {time:'10:00',grp:'G',jp:false,teams:'ニュージーランド vs エジプト',venue:'BCプレイス（バンクーバー）',note:'DAZN'},
  ]},
  {key:'d623',label:'6/23 火',matches:[
    {time:'2:00',grp:'J',jp:false,teams:'アルゼンチン vs オーストリア',venue:'ダラス・スタジアム',note:'DAZN'},
    {time:'6:00',grp:'I',jp:false,teams:'フランス vs イラク',venue:'フィラデルフィア・スタジアム',note:'DAZN'},
    {time:'9:00',grp:'I',jp:false,teams:'ノルウェー vs セネガル',venue:'トロント・スタジアム',note:'DAZN'},
    {time:'12:00',grp:'J',jp:false,teams:'ヨルダン vs アルジェリア',venue:'SF・ベイエリア・スタジアム',note:'DAZN'},
  ]},
  {key:'d624',label:'6/24 水',matches:[
    {time:'2:00',grp:'K',jp:false,teams:'ポルトガル vs ウズベキスタン',venue:'ヒューストン・スタジアム',note:'DAZN'},
    {time:'5:00',grp:'L',jp:false,teams:'イングランド vs ガーナ',venue:'ボストン・スタジアム',note:'DAZN'},
    {time:'8:00',grp:'L',jp:false,teams:'パナマ vs クロアチア',venue:'ボストン・スタジアム',note:'DAZN'},
    {time:'11:00',grp:'K',jp:false,teams:'コロンビア vs コンゴDR',venue:'グアダラハラ・スタジアム',note:'DAZN'},
  ]},
  {key:'d625',label:'6/25 木',matches:[
    {time:'4:00',grp:'B',jp:false,teams:'スイス vs カナダ',venue:'BCプレイス（バンクーバー）',note:'DAZN'},
    {time:'4:00',grp:'B',jp:false,teams:'ボスニア・H vs カタール',venue:'シアトル・スタジアム',note:'DAZN'},
    {time:'7:00',grp:'C',jp:false,teams:'モロッコ vs ハイチ',venue:'アトランタ・スタジアム',note:'DAZN'},
    {time:'7:00',grp:'C',jp:false,teams:'スコットランド vs ブラジル',venue:'マイアミ・スタジアム',note:'DAZN'},
    {time:'10:00',grp:'A',jp:false,teams:'南アフリカ vs 韓国',venue:'エスタディオBBVA（モンテレイ）',note:'DAZN'},
    {time:'10:00',grp:'A',jp:false,teams:'チェコ vs メキシコ',venue:'エスタディオ・アステカ',note:'DAZN'},
  ]},
  {key:'d626',label:'6/26 金 ★',matches:[
    {time:'5:00',grp:'E',jp:false,teams:'エクアドル vs ドイツ',venue:'ヒューストン・スタジアム',note:'DAZN'},
    {time:'5:00',grp:'E',jp:false,teams:'キュラソー vs コートジボワール',venue:'フィラデルフィア・スタジアム',note:'DAZN'},
    {time:'8:00',grp:'F',jp:true,teams:'🇯🇵 日本 vs スウェーデン 🇸🇪',venue:'ダラス・スタジアム',note:'DAZN 無料 / NHK総合'},
    {time:'8:00',grp:'F',jp:false,teams:'チュニジア vs オランダ',venue:'エスタディオBBVA（モンテレイ）',note:'DAZN'},
    {time:'11:00',grp:'D',jp:false,teams:'トルコ vs アメリカ',venue:'ロサンゼルス・スタジアム',note:'DAZN'},
    {time:'11:00',grp:'D',jp:false,teams:'パラグアイ vs オーストラリア',venue:'SF・ベイエリア・スタジアム',note:'DAZN'},
  ]},
  {key:'d627',label:'6/27 土',matches:[
    {time:'4:00',grp:'I',jp:false,teams:'ノルウェー vs フランス',venue:'ボストン・スタジアム',note:'DAZN'},
    {time:'4:00',grp:'I',jp:false,teams:'セネガル vs イラク',venue:'トロント・スタジアム',note:'DAZN'},
    {time:'9:00',grp:'H',jp:false,teams:'カーボベルデ vs サウジアラビア',venue:'ヒューストン・スタジアム',note:'DAZN'},
    {time:'9:00',grp:'H',jp:false,teams:'ウルグアイ vs スペイン',venue:'グアダラハラ・スタジアム',note:'DAZN'},
    {time:'12:00',grp:'G',jp:false,teams:'ニュージーランド vs ベルギー',venue:'BCプレイス（バンクーバー）',note:'DAZN'},
    {time:'12:00',grp:'G',jp:false,teams:'エジプト vs イラン',venue:'シアトル・スタジアム',note:'DAZN'},
  ]},
  {key:'d628',label:'6/28 日',matches:[
    {time:'6:00',grp:'L',jp:false,teams:'パナマ vs イングランド',venue:'NY/NJ・スタジアム',note:'DAZN'},
    {time:'6:00',grp:'L',jp:false,teams:'クロアチア vs ガーナ',venue:'フィラデルフィア・スタジアム',note:'DAZN'},
    {time:'8:30',grp:'K',jp:false,teams:'コロンビア vs ポルトガル',venue:'マイアミ・スタジアム',note:'DAZN'},
    {time:'8:30',grp:'K',jp:false,teams:'コンゴDR vs ウズベキスタン',venue:'アトランタ・スタジアム',note:'DAZN'},
    {time:'11:00',grp:'J',jp:false,teams:'アルジェリア vs オーストリア',venue:'カンザスシティ・スタジアム',note:'DAZN'},
    {time:'11:00',grp:'J',jp:false,teams:'ヨルダン vs アルゼンチン',venue:'ダラス・スタジアム',note:'DAZN'},
  ]},
];

/* Bracket data — 編集可能 */
const bracketData = {
  r32: Array.from({length:16},(_,i)=>({id:`r32_${i+1}`,label:`R32-${i+1}`,date:'6/28〜7/3',t1:{name:'TBD',flag:'',score:''},t2:{name:'TBD',flag:'',score:''}})),
  r16: Array.from({length:8},(_,i)=>({id:`r16_${i+1}`,label:`R16-${i+1}`,date:'7/4〜7/7',t1:{name:'TBD',flag:'',score:''},t2:{name:'TBD',flag:'',score:''}})),
  qf:  Array.from({length:4},(_,i)=>({id:`qf_${i+1}`,label:`QF-${i+1}`,date:'7/9〜7/11',t1:{name:'TBD',flag:'',score:''},t2:{name:'TBD',flag:'',score:''}})),
  sf:  Array.from({length:2},(_,i)=>({id:`sf_${i+1}`,label:`SF-${i+1}`,date:'7/14〜7/15',t1:{name:'TBD',flag:'',score:''},t2:{name:'TBD',flag:'',score:''}})),
  tp:  [{id:'tp',label:'3位決定戦',date:'7/18（土）',t1:{name:'TBD',flag:'',score:''},t2:{name:'TBD',flag:'',score:''}}],
  fin: [{id:'fin',label:'決勝 🏆',date:'7/19（日）JST 7/20 4:00',t1:{name:'TBD',flag:'',score:''},t2:{name:'TBD',flag:'',score:''}}],
};

/* ================================================================
   STANDINGS (computed from SCHEDULE_DAYS scores)
================================================================ */
function stripFlags(s){
  return s.replace(/[\u{1F1E0}-\u{1F1FF}\u{1F3F4}\u{E0020}-\u{E007F}\u{FE0F}]/gu,'').trim();
}
function computeStandings(){
  const stats = {};
  GROUPS.forEach(g=>g.teams.forEach(t=>{stats[t.name]={w:0,d:0,l:0,gf:0,ga:0,pts:0};}));
  SCHEDULE_DAYS.forEach(day=>day.matches.forEach(m=>{
    if(!m.score) return;
    const parts = m.score.split('-').map(Number);
    if(parts.length!==2 || parts.some(isNaN)) return;
    const [s1,s2] = parts;
    const teamNames = m.teams.split(' vs ').map(stripFlags);
    const [n1,n2] = teamNames;
    if(!(n1 in stats) || !(n2 in stats)) return;
    stats[n1].gf+=s1; stats[n1].ga+=s2;
    stats[n2].gf+=s2; stats[n2].ga+=s1;
    if(s1>s2){stats[n1].w++;stats[n1].pts+=3;stats[n2].l++;}
    else if(s1<s2){stats[n2].w++;stats[n2].pts+=3;stats[n1].l++;}
    else {stats[n1].d++;stats[n2].d++;stats[n1].pts++;stats[n2].pts++;}
  }));
  return stats;
}

/* ================================================================
   RENDER GROUPS
================================================================ */
function renderGroups(filter){
  const grid = document.getElementById('groupsGrid');
  grid.innerHTML = '';
  const standings = computeStandings();
  const isAll = filter === 'all';

  if (isAll) {
    grid.classList.remove('single-group');
  } else {
    grid.classList.add('single-group');
  }

  GROUPS.filter(g => isAll || g.id===filter).forEach(g => {
    const card = document.createElement('div');
    card.className = 'group-card';
    card.dataset.group = g.id;
    const sortedTeams = [...g.teams].sort((a,b)=>{
      const sa = standings[a.name], sb = standings[b.name];
      const gda = sa.gf - sa.ga, gdb = sb.gf - sb.ga;
      return (sb.pts - sa.pts) || (gdb - gda) || (sb.gf - sa.gf);
    });

    const tableClass = isAll ? 'group-table' : 'group-table detail-view';
    const theadRow = isAll
      ? `<tr><th></th><th>チーム</th><th class="c">W</th><th class="c">D</th><th class="c">L</th><th class="c">Pts</th></tr>`
      : `<tr><th></th><th>チーム</th><th class="c">P</th><th class="c">W</th><th class="c">D</th><th class="c">L</th><th class="c">GF</th><th class="c">GA</th><th class="c">GD</th><th class="c">Pts</th></tr>`;

    card.innerHTML = `
      <div class="group-card-head">
        <span class="glabel">GROUP ${g.id}${g.jp ? ' ★':''}${g.id==='F' ? ' 🇯🇵':''}</span>
        <span class="gcity">${g.city}</span>
      </div>
      <div class="table-responsive">
        <table class="${tableClass}">
          <thead>${theadRow}</thead>
          <tbody>
            ${sortedTeams.map(t=>{
              const s = standings[t.name];
              const p = s.w + s.d + s.l;
              const gd = s.gf - s.ga;
              const gdStr = gd > 0 ? `+${gd}` : gd;

              const cols = isAll
                ? `<td class="c">${s.w}</td><td class="c">${s.d}</td><td class="c">${s.l}</td><td class="c">${s.pts}</td>`
                : `<td class="c">${p}</td><td class="c">${s.w}</td><td class="c">${s.d}</td><td class="c">${s.l}</td><td class="c">${s.gf}</td><td class="c">${s.ga}</td><td class="c">${gdStr}</td><td class="c">${s.pts}</td>`;

              return `
              <tr class="${t.jp?'jp-row':''}">
                <td style="width:28px;font-size:1.1rem;padding:8px 4px 8px 10px">${t.flag}</td>
                <td><span class="team-name clickable" onclick="openTeamDetail('${t.name}', '${t.flag}', '${g.id}')">${t.name}${t.host?'<span style="font-size:9px;background:#00A0B8;color:#fff;padding:1px 5px;border-radius:2px;margin-left:6px">HOST</span>':''}</span></td>
                ${cols}
              </tr>`;}).join('')}
          </tbody>
        </table>
      </div>`;
    grid.appendChild(card);
  });
  if(typeof twemoji !== 'undefined') twemoji.parse(document.getElementById('groupsGrid'));
}

document.getElementById('groupFilter').addEventListener('click', e => {
  const btn = e.target.closest('.gf-btn');
  if (!btn) return;
  
  // 他のグループや「すべて」を選択した時は詳細パネルを閉じる
  document.getElementById('groupsLayout').classList.remove('split');
  document.querySelectorAll('.team-name.clickable').forEach(el => el.classList.remove('selected'));
  
  document.querySelectorAll('.gf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGroups(btn.dataset.filter);
});
renderGroups('all');

/* ================================================================
   API-FOOTBALL TEAM DETAILS (Side-by-side)
================================================================ */
const TEAM_CACHE = {};
let isLocal = false; // 動的に判定します
let localCacheFile = null;

async function loadLocalCacheFile() {
  if (!localCacheFile) {
    try {
      const res = await fetch('./cache.json');
      localCacheFile = await res.json();
    } catch (e) {
      console.error('Failed to load local cache.json', e);
      localCacheFile = {};
    }
  }
  return localCacheFile;
}

// 中継サーバーが裏で動いているかテストする関数
async function detectEnvironment() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000); // 1秒でタイムアウト
    const res = await fetch('http://localhost:3000/api/tournament', { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      isLocal = true;
      console.log('ローカル中継サーバーを検出しました。開発モードで動作します。');
    }
  } catch (e) {
    isLocal = false;
    console.log('ローカル中継サーバーが検出できませんでした。静的キャッシュモードで動作します。');
  }
}

function openTeamDetail(teamName, teamFlag, groupId) {
  // グループフィルターのボタン状態を更新
  document.querySelectorAll('.gf-btn').forEach(b => {
    b.classList.remove('active');
    if (b.dataset.filter === groupId) {
      b.classList.add('active');
    }
  });

  // 左側のグリッドをそのグループに絞り込んで再描画
  renderGroups(groupId);

  // 選択されたチームのスタイル更新（再描画後にselectedを付与する必要がある）
  document.querySelectorAll('.team-name.clickable').forEach(el => {
    el.classList.remove('selected');
    if (el.textContent.includes(teamName)) {
      el.classList.add('selected');
    }
  });
  
  const layout = document.getElementById('groupsLayout');
  layout.classList.add('split');
  
  document.getElementById('tdpFlag').textContent = teamFlag;
  document.getElementById('tdpName').textContent = teamName;
  document.getElementById('tdpSubtitle').textContent = 'GROUP ' + groupId + ' — FIFA WORLD CUP 2026';

  // グループの絞り込みに合わせて、画面をグループセクションの先頭へスムーズにスクロールさせる
  const groupsSection = document.getElementById('groups');
  if (groupsSection) {
    window.scrollTo({
      top: groupsSection.offsetTop - 80,
      behavior: 'smooth'
    });
  }
  
  // Show loader and clear old data
  document.getElementById('tdpLoader').classList.add('show');
  document.getElementById('tab-info').innerHTML = '';
  document.getElementById('tab-squad').innerHTML = '';
  document.getElementById('tab-fixtures').innerHTML = '';
  




  // Fetch or use cache
  if (TEAM_CACHE[teamName]) {
    renderTeamDetails(TEAM_CACHE[teamName]);
  } else {
    if (isLocal) {
      // ローカル環境：中継サーバーから取得
      fetch(`http://localhost:3000/api/team?name=${encodeURIComponent(teamName)}`)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            console.error(data.error);
            alert('エラー: ' + data.error);
            document.getElementById('tdpLoader').classList.remove('show');
            return;
          }
          TEAM_CACHE[teamName] = data;
          renderTeamDetails(data);
        })
        .catch(err => {
          console.error('通信エラー:', err);
          alert('サーバーとの通信に失敗しました。server.js が起動しているか確認してください。');
          document.getElementById('tdpLoader').classList.remove('show');
        });
    } else {
      // 公開環境（GitHub Pagesなど）：cache.jsonから直接取得
      loadLocalCacheFile().then(cacheData => {
        if (cacheData[teamName]) {
          const data = cacheData[teamName].data;
          TEAM_CACHE[teamName] = data;
          renderTeamDetails(data);
        } else {
          console.error('No cached data for team:', teamName);
          alert(`エラー: ${teamName} のデータがキャッシュに存在しません。`);
          document.getElementById('tdpLoader').classList.remove('show');
        }
      }).catch(err => {
        console.error('キャッシュ読み込みエラー:', err);
        alert('データの取得に失敗しました。');
        document.getElementById('tdpLoader').classList.remove('show');
      });
    }
  }
}

document.getElementById('tdpClose').addEventListener('click', () => {
  document.getElementById('groupsLayout').classList.remove('split');
  document.querySelectorAll('.team-name.clickable').forEach(el => el.classList.remove('selected'));
  
  // フィルターを「すべて」に戻す
  const allBtn = document.querySelector('.gf-btn[data-filter="all"]');
  if (allBtn) {
    document.querySelectorAll('.gf-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    renderGroups('all');
  }
});

document.querySelectorAll('.tdp-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('.tdp-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tdp-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById('tab-' + e.target.dataset.tab).classList.add('active');
  });
});

function renderTeamDetails(data) {
  document.getElementById('tdpLoader').classList.remove('show');
  const teamName = document.getElementById('tdpName').textContent;
  
  // Info Tab
  const rankVal = data.info.rank ? (data.info.rank.endsWith('位') ? data.info.rank : data.info.rank + '位') : 'データなし';
  const appVal = data.info.appearances ? (data.info.appearances.endsWith('回') ? data.info.appearances : data.info.appearances + '回') : 'データなし';
  
  const hasTitles = data.info.titles && data.info.titles !== '0' && data.info.titles !== '0回';
  const titlesVal = hasTitles ? (data.info.titles.endsWith('回') ? data.info.titles : data.info.titles + '回') : '-';

  document.getElementById('tab-info').innerHTML = `
    <div class="tdp-info-grid">
      <div class="tdp-info-card"><div class="lbl">監督</div><div class="val">${data.info.coach}</div></div>
      <div class="tdp-info-card"><div class="lbl">FIFAランク</div><div class="val">${rankVal}</div></div>
      <div class="tdp-info-card"><div class="lbl">W杯 出場回数</div><div class="val">${appVal}</div></div>
      <div class="tdp-info-card"><div class="lbl">W杯 優勝回数</div><div class="val">${titlesVal}</div></div>
    </div>
    <div style="font-size:0.82rem; color:#555; line-height:1.7; background:#F8FBFB; padding:16px; border:1px solid var(--border); border-radius:8px;">
      ${data.info.description}
    </div>
  `;
  
  // Squad Tab
  let squadHtml = '';
  ['GK', 'DF', 'MF', 'FW'].forEach(pos => {
    const players = data.squad.filter(p => p.position === pos);
    if(players.length > 0) {
      squadHtml += `<div class="squad-group">
        <div class="squad-group-title">${pos}</div>
        <div class="squad-list">
          ${players.map(p => `
            <div class="squad-player">
              <span class="num">${p.number}</span>
              <span class="pname">${p.name}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
    }
  });
  document.getElementById('tab-squad').innerHTML = squadHtml || '<div style="color:#888;text-align:center;padding:20px;">選手データがありません</div>';
  
  // Fixtures Tab (Dynamically computed from SCHEDULE_DAYS)
  let fixHtml = '';
  const teamFixtures = [];
  const teamClean = stripFlags(teamName);

  SCHEDULE_DAYS.forEach(day => {
    day.matches.forEach(m => {
      const matchTeams = stripFlags(m.teams);
      const parts = matchTeams.split(' vs ');
      if (parts.includes(teamClean)) {
        teamFixtures.push({
          date: `${day.label} ${m.time}`,
          home: parts[0],
          away: parts[1],
          score: m.score || '- - -',
          status: m.score ? '終了' : '予定',
          scorers: m.scorers || null
        });
      }
    });
  });

  if (teamFixtures.length > 0) {
    teamFixtures.forEach(f => {
      const isFT = f.status === '終了' || f.status === 'FT';
      
      let homeScorersHtml = '';
      let awayScorersHtml = '';
      if (f.scorers) {
        const homeKey = Object.keys(f.scorers).find(k => k === f.home);
        const awayKey = Object.keys(f.scorers).find(k => k === f.away);
        
        if (homeKey && f.scorers[homeKey]) {
          homeScorersHtml = f.scorers[homeKey].map(s => `<div>${s}</div>`).join('');
        }
        if (awayKey && f.scorers[awayKey]) {
          awayScorersHtml = f.scorers[awayKey].map(s => `<div>${s}</div>`).join('');
        }
      }

      fixHtml += `
        <div class="fixture-item">
          <div class="fixture-date">${f.date}</div>
          <div class="fixture-teams-container">
            <div class="fixture-scorer home-scorer">${homeScorersHtml}</div>
            <div class="fixture-teams-row">
              <span class="team-name-lbl">${f.home}</span>
              <span class="fixture-score">${f.score}</span>
              <span class="team-name-lbl">${f.away}</span>
            </div>
            <div class="fixture-scorer away-scorer">${awayScorersHtml}</div>
          </div>
          <div class="fixture-status ${isFT ? 'ft' : 'ns'}">${f.status}</div>
        </div>
      `;
    });
  } else {
    fixHtml = '<div style="color:#888;text-align:center;padding:20px;">試合日程データがありません</div>';
  }
  document.getElementById('tab-fixtures').innerHTML = fixHtml;
}

function generateDummyData(teamName) {
  // ダミーデータ生成
  return {
    info: {
      coach: '未設定 (Dummy)',
      rank: Math.floor(Math.random() * 50) + 1,
      appearances: Math.floor(Math.random() * 10) + 1,
      titles: Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0,
      description: `${teamName}はAPI-Football連携までのダミーデータ表示です。実際の連携時には、ここに対象チームの統計情報や概要などが表示されます。`
    },
    squad: [
      {number: 1, name: '選手 A', position: 'GK'}, {number: 12, name: '選手 B', position: 'GK'},
      {number: 2, name: '選手 C', position: 'DF'}, {number: 3, name: '選手 D', position: 'DF'},
      {number: 4, name: '選手 E', position: 'DF'}, {number: 5, name: '選手 F', position: 'DF'},
      {number: 6, name: '選手 G', position: 'MF'}, {number: 7, name: '選手 H', position: 'MF'},
      {number: 8, name: '選手 I', position: 'MF'}, {number: 10, name: '選手 J', position: 'MF'},
      {number: 9, name: '選手 K', position: 'FW'}, {number: 11, name: '選手 L', position: 'FW'},
    ],
    fixtures: [
      {date: '6/15', home: teamName, away: '対戦国 X', score: '2 - 1', status: 'FT'},
      {date: '6/20', home: '対戦国 Y', away: teamName, score: '- - -', status: 'NS'},
      {date: '6/25', home: teamName, away: '対戦国 Z', score: '- - -', status: 'NS'}
    ]
  };
}

/* ================================================================
   RENDER SCHEDULE
================================================================ */
function renderSchedule(){
  const tabs = document.getElementById('dayTabs');
  const panels = document.getElementById('dayPanels');
  tabs.innerHTML = '';
  panels.innerHTML = '';

  // 今日を表すキー（例："d613"）を判定します
  const now = new Date();
  const todayKey = `d${now.getMonth() + 1}${now.getDate()}`;
  
  // スケジュール（SCHEDULE_DAYS）の中に、今日の日付に一致するキーがあるか調べます
  let activeIndex = SCHEDULE_DAYS.findIndex(day => day.key === todayKey);
  // もし今日の日付がスケジュールに見つからない（大会期間外など）場合は、最初のタブ（0番目）を開きます
  if (activeIndex === -1) {
    activeIndex = 0;
  }

  SCHEDULE_DAYS.forEach((day, i) => {
    const tab = document.createElement('button');
    tab.className = 'day-tab' + (i===activeIndex?' active':'');
    tab.dataset.key = day.key;
    tab.textContent = day.label;
    tabs.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'day-panel' + (i===activeIndex?' show':'');
    panel.id = day.key;
    panel.innerHTML = `
      <div style="overflow-x:auto">
        <table class="sched-table">
          <thead><tr><th>時刻 JST</th><th>グループ</th><th>対戦カード</th><th class="c">結果</th><th>会場</th><th>配信</th></tr></thead>
          <tbody>
            ${day.matches.map(m => `
              <tr class="${m.jp?'jp-match':''}">
                <td class="time-cell">${m.time}</td>
                <td><span class="grp-chip ${m.jp?'jp':''}">${m.grp}</span></td>
                <td style="font-weight:${m.jp?'700':'400'}">${m.teams}</td>
                <td class="c" style="font-weight:700;color:${m.score?'#222':'#bbb'}">${m.score || '-'}</td>
                <td style="color:#888;white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis">${m.venue}</td>
                <td><a class="dazn-tag ${m.jp?'free-tag':''}" href="https://www.dazn.com/ja-JP/home" target="_blank" rel="noopener">${m.jp?'DAZN 無料':'DAZN'}</a></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
    panels.appendChild(panel);
  });

  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.day-tab');
    if (!btn) return;
    document.querySelectorAll('.day-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.day-panel').forEach(p => p.classList.remove('show'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.key).classList.add('show');
  });
  if(typeof twemoji !== 'undefined') twemoji.parse(document.getElementById('dayPanels'));
}
renderSchedule();

/* ================================================================
   RENDER BRACKET
================================================================ */
function renderMatchSlot(m){
  const w1 = m.t1.score !== '' && m.t2.score !== '' && Number(m.t1.score) > Number(m.t2.score);
  const w2 = m.t1.score !== '' && m.t2.score !== '' && Number(m.t2.score) > Number(m.t1.score);
  return `
    <div class="match-slot ${m.id==='fin'?'final-slot':''}" data-id="${m.id}" onclick="openModal('${m.id}')">
      <div class="ms-head"><span>${m.label}</span><span class="ms-date">${m.date}</span></div>
      <div class="match-team ${w1?'winner':''}${!m.t1.name||m.t1.name==='TBD'?'tbd':''}">
        <span class="flag">${m.t1.flag}</span>
        <span class="team-txt">${m.t1.name||'TBD'}</span>
        <span class="score">${m.t1.score}</span>
      </div>
      <div class="match-team ${w2?'winner':''}${!m.t2.name||m.t2.name==='TBD'?'tbd':''}">
        <span class="flag">${m.t2.flag}</span>
        <span class="team-txt">${m.t2.name||'TBD'}</span>
        <span class="score">${m.t2.score}</span>
      </div>
      <div class="edit-overlay"><span class="edit-icon">✏️ 編集</span></div>
    </div>`;
}

function renderBracket(){
  const bracket = document.getElementById('bracket');
  const cols = [
    {label:'ラウンド32 (6/28〜7/3)',matches:bracketData.r32},
    {label:'ラウンド16 (7/4〜7/7)',matches:bracketData.r16},
    {label:'準々決勝 (7/9〜7/11)',matches:bracketData.qf},
    {label:'準決勝 (7/14〜7/15)',matches:bracketData.sf},
    {label:'3位決定戦 / 決勝',matches:[...bracketData.tp,...bracketData.fin]},
  ];
  bracket.innerHTML = cols.map((col,ci) => `
    <div class="bracket-col ${ci===4?'final':''}">
      <div class="bracket-col-label">${col.label}</div>
      <div class="bracket-matches" style="justify-content:space-around">
        ${col.matches.map(m => renderMatchSlot(m)).join('')}
      </div>
    </div>`).join('');
  if(typeof twemoji !== 'undefined') twemoji.parse(document.getElementById('bracket'));
}
renderBracket();

/* ================================================================
   MODAL EDIT
================================================================ */
let currentMatchId = null;
function findMatch(id){
  for(const key of Object.keys(bracketData)){
    const m = bracketData[key].find(x=>x.id===id);
    if(m) return m;
  }
}

function openModal(id){
  const m = findMatch(id);
  if(!m) return;
  currentMatchId = id;
  document.getElementById('modalMatchLabel').textContent = m.label + ' — ' + m.date;
  document.getElementById('editTeam1').value = (m.t1.flag + ' ' + (m.t1.name==='TBD'?'':m.t1.name)).trim();
  document.getElementById('editScore1').value = m.t1.score;
  document.getElementById('editTeam2').value = (m.t2.flag + ' ' + (m.t2.name==='TBD'?'':m.t2.name)).trim();
  document.getElementById('editScore2').value = m.t2.score;
  document.getElementById('modalBackdrop').classList.add('open');
  document.getElementById('editTeam1').focus();
}

function parseTeamInput(val){
  val = val.trim();
  // extract leading emoji flags (unicode)
  const flagMatch = val.match(/^([\u{1F1E0}-\u{1F1FF}\u{1F3F4}]{1,4})/u);
  if(flagMatch){
    return {flag: flagMatch[1], name: val.replace(flagMatch[1],'').trim() || 'TBD'};
  }
  return {flag:'', name: val || 'TBD'};
}

document.getElementById('modalSave').addEventListener('click', ()=>{
  const m = findMatch(currentMatchId);
  if(!m) return;
  m.t1 = {...parseTeamInput(document.getElementById('editTeam1').value), score: document.getElementById('editScore1').value};
  m.t2 = {...parseTeamInput(document.getElementById('editTeam2').value), score: document.getElementById('editScore2').value};
  renderBracket();
  closeModal();
});
document.getElementById('modalCancel').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', e=>{ if(e.target===e.currentTarget) closeModal(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
function closeModal(){ document.getElementById('modalBackdrop').classList.remove('open'); currentMatchId=null; }

/* ================================================================
   COUNTDOWN
================================================================ */
const cdTargets = [
  {el:'cd1', ts: new Date('2026-06-15T05:00:00+09:00')},
  {el:'cd2', ts: new Date('2026-06-21T13:00:00+09:00')},
  {el:'cd3', ts: new Date('2026-06-26T08:00:00+09:00')},
];
function updateCountdowns(){
  cdTargets.forEach(({el,ts}) => {
    const div = document.getElementById(el);
    if(!div) return;
    const diff = ts - new Date();
    if(diff > 0){
      const d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000), m=Math.floor(diff%3600000/60000);
      div.textContent = `⏳ キックオフまで ${d}日 ${h}時間 ${m}分`;
    } else if(diff > -7200000){
      div.textContent = '🔴 ライブ配信中 — DAZNで今すぐ視聴';
    } else {
      div.textContent = '✅ 試合終了（DAZN見逃し配信あり）';
    }
  });
}
updateCountdowns();
setInterval(updateCountdowns, 30000);

/* ================================================================
   NAV
================================================================ */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
});

document.getElementById('hamburger').addEventListener('click', ()=>{
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', ()=>{
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* smooth scroll active nav highlight */
const sections = ['japan','groups','schedule','tournament'];
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      document.querySelectorAll('.nav-link').forEach(l=>{
        l.classList.toggle('active', l.getAttribute('href')==='#'+e.target.id);
      });
    }
  });
},{threshold:.2});
sections.forEach(id=>{const el=document.getElementById(id);if(el)io.observe(el);});
twemoji.parse(document.body);

function applyTournamentData(data) {
  if (data.results) {
    SCHEDULE_DAYS.forEach(day => {
      day.matches.forEach(m => {
        const matchKey1 = m.teams.replace(/ 🇯🇵|🇳🇱 |🇸🇪 /g, '');
        if (data.results[matchKey1]) m.score = data.results[matchKey1];
      });
    });
  }
  if (data.bracket && data.bracket.length >= 8) {
    bracketData.qf[0].t1.name = data.bracket[0];
    bracketData.qf[0].t2.name = data.bracket[1];
    bracketData.qf[1].t1.name = data.bracket[2];
    bracketData.qf[1].t2.name = data.bracket[3];
    bracketData.qf[2].t1.name = data.bracket[4];
    bracketData.qf[2].t2.name = data.bracket[5];
    bracketData.qf[3].t1.name = data.bracket[6];
    bracketData.qf[3].t2.name = data.bracket[7];
  }
  // Re-render with new data
  renderGroups('all');
  renderSchedule();
  renderBracket();
}

// ===== Tournament Dynamic Fetch =====
detectEnvironment().then(() => {
  if (isLocal) {
    fetch('http://localhost:3000/api/tournament')
      .then(res => res.json())
      .then(data => {
        applyTournamentData(data);
      })
      .catch(err => console.error('Tournament Fetch Error:', err));
  } else {
    loadLocalCacheFile().then(cacheData => {
      if (cacheData.tournament) {
        applyTournamentData(cacheData.tournament.data);
      }
    }).catch(err => console.error('Tournament Cache Load Error:', err));
  }
});


