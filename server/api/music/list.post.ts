const api = `https://test.xiamoqwq.com/kugou/playlist/track/all`;
const imagePrefix = `https://imgessl.kugou.com/stdmusic`;

export type Music = {
  artist?: string[];
  lid?: string;
  mid?: string;
  pid?: string;
  source?: string;
  title?: string;
  play?: boolean;
  pause?: boolean;
  progress?: number;
  duration?: number;
};

type KuGouResponse = {
  data: KuGouRespData;
  status: number;
  error_code: number;
};

type KuGouRespData = {
  pagesize: number;
  count: number;
  info: SongListItem[];
  page: number;
  listid: number;
};

type SongListItem = {
  hash: string;
  // like `${歌手}、${歌手} - ${歌曲名}` , split by ` - `
  name: string;
  album_id: string;
  remark: string;
  // http://imge.kugou.com/stdmusic/{size}/20150718/20150718085819902925.jpg , split by `{size}`
  cover: string;
  relate_goods: RelateGoods[];
};

type RelateGoods = {
  size: number;
  hash: string;
  level: number;
  privilege: number;
  bitrate: number;
};

const musicInCache = new Map<string, Music>();

const songArr = [
  // sc
  '爱不会绝迹',
  '左手指月',

  // three
  '奇妙能力歌',
  '如果有来生',
  '失眠对峙',
  'Light',
  '如愿',
  '欧皇',
  '非酋',
  '第二杯半价',
  '后继者',
  '年轮',
  '知否知否',
  '小星星',

  // two
  '亲爱的那不是爱情',
  '龙卷风',
  '非你不爱',
  '完整爱',
  '猜不透',
  '爱一点',
  '静悄悄',
  '雨爱',
  '白月光与朱砂痣',
  '123我爱你',
  '恋爱吧☆魔法少女',
  '走在冷风中',
  'Always Online',
  '兔子先生',
  '舍不得',
  '时间煮雨',
  '小幸运',
  '阴天',
  '后来',
  '简单爱',
  '握不住的他',
  '最后一页',
  '手写的从前',
  '你还要我怎样',
  '空空如也',
  '错位时空',
  '七月七日晴',
  '海海海',

  // one
  '还在流浪',
  '多云欲转晴',
  '恶作剧',
  '阿拉斯加海湾',
  '格斗宝贝',
  '小酒窝',
  '星空剪影',
  '广寒宫',
  '爱在西元前',
  '春三月',
  '你不是第一个离开的人',
  '泡沫',
  '热带雨林',
  '好想好想',
  '日久生情，与这波澜不惊',
  '天外来物',
  '笼',
  '我不曾忘记',
  '我太笨',
  '赤伶',
  '山鬼',
  '若把你',
  '入秋的第一场雨真让人矫情',
  '妥协',
  '我只在乎你',
  '爱的恰恰',
  '花吃了这女孩',
  '粉色海洋',
  '还在流浪',
  '最伟大的作品',
  '错过的烟火',
  '麦浪',
  '空山新雨后',
  '爱你',
  '红昭愿',
  '爱丫爱丫',
  '我知道',
  '爱上你',
  '爱的双重魔力',
  '不够成熟',
  '有点甜',
  '带我离开',
  '没有如果',
  '说好的幸福呢',
  '非酋',
  '多云欲转晴',
  '空空如也',
  '唯一',
  '还是你的笑容最可爱',
  '大喜',
  '超级敏感',
  '危险派对',
  '霓虹甜心',
  '如果',
  '断了的弦',
  '雨下一整晚',
  '白月光与朱砂痣',
  '穷极一生到不了的天堂',
  '山外小楼夜听雨',
  'Mojito',
  '千禧',
  '想想念念',
  '青柠',
  '圈住你',
  '等你下课',
  '爱的飞行日记',
  '说好不哭',
  '今后我与自己流浪',
];

const musics = async () => {
  const response = await fetch(`${api}?id=${process.env.MUSIC_LIST_ID || ''}&page=1&pagesize=300`);
  let res: KuGouResponse = await response.json();
  let songs: SongListItem[] = res.data.info;
  let musicList: Music[] = [];
  musicList = songs.map((item: SongListItem) => {
    let arr: string[] = item.name.split(' - ');
    return {
      mid: `/api/music/file?mid=${item.hash}`,
      pid: imagePrefix + item.cover.split(`{size}`)[1],
      title: arr[1],
      artist: arr[0].split('、'),
      source: 'qq',
    };
  });

  return musicList;
};

export default defineEventHandler(async () => {
  if (!musicInCache || musicInCache.size < 1) {
    const musicList = await musics();
    songArr.forEach(item => {
      let music = musicList.find(music => music.title?.includes(item));
      if (music) {
        musicInCache.set(item, music);
      }
    });
  }
  return Array.from(musicInCache.values());
});
