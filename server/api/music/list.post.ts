const api = `https://me.axm.moe/music`;
const songlist = `${api}/v1/qq/playlist/info?pid=9035694603`;
const regex = /&id=([^&]+)/;

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

type SongItem = {
  mid?: string;
  name?: string;
  singer?: Singer[];
};

type Singer = {
  id?: string;
  mid?: string;
  name?: string;
};

const musicInCache = new Map<string, Music>();

const songArr = [
  "还在流浪",
  "多云欲转晴",
  "恶作剧",
  "阿拉斯加海湾",
  "格斗宝贝",
  "爱不会绝迹",
  "小酒窝",
  "星空剪影",
  "广寒宫",
  "爱在西元前",
  "春三月",
  "你不是第一个离开的人",
  "泡沫",
  "热带雨林",
  "好想好想",
  "日久生情，与这波澜不惊",
  "天外来物",
  "笼",
  "我不曾忘记",
  "我太笨",
  "赤伶",
  "山鬼",
  "若把你",
  "入秋的第一场雨真让人矫情",
  "妥协",
  "我只在乎你",
  "爱的恰恰",
  "花吃了这女孩",
  "粉色海洋",
  "还在流浪",
  "最伟大的作品",
  "错过的烟火",
  "麦浪",
  "空山新雨后",
  "爱你",
  "红昭愿",
  "爱丫爱丫",
  "我知道",
  "爱上你",
  "爱的双重魔力",
  "不够成熟",
  "有点甜",
  "带我离开",
  "没有如果",
  "说好的幸福呢",
  "非酋",
  "多云欲转晴",
  "空空如也",
  "唯一",
  "还是你的笑容最可爱",
  "大喜",
  "超级敏感",
  "危险派对",
  "霓虹甜心",
  "如果",
  "断了的弦",
  "雨下一整晚",
  "白月光与朱砂痣",
  "穷极一生到不了的天堂",
  "山外小楼夜听雨",
  "Mojito",
  "千禧",
  "想想念念",
  "青柠",
  "圈住你",
  "等你下课",
  "爱的飞行日记",
  "说好不哭",
  "今后我与自己流浪",
];

const musics = async () => {
  const response = await fetch(songlist);
  let res = await response.json();
  let songs: SongItem[] = res.cdlist[0].songlist;
  let musicList: Music[] = [];
  musicList = songs.map((item: SongItem) => {
    let singer = "";
    if (item.singer) {
      item.singer.forEach((sgr: Singer) => {
        singer += sgr.name + " & ";
      });
      singer = singer.slice(0, -3);
    }
    return {
      mid: `/api/music/file?mid=${item.mid}`,
      title: item.name,
      artist: [singer],
      source: "qq",
    };
  });

  return musicList;
};

const getMusicList = async (): Promise<Music[]> => {
  const response = await fetch(
    `https://bohecat.com/musicapi?type=list&id=9035694603&source=tencent`
  );
  let res = await response.json();
  res = res.map((item: Music) => {
    const match = item.mid?.match(regex);
    const mid = match![1];
    item.mid = `/api/music/file?mid=${mid}`;
    return item;
  });
  return res;
};
export default defineEventHandler(async () => {
  if (!musicInCache || musicInCache.size < 1) {
    const musicList = await getMusicList();
    songArr.forEach((item) => {
      let music = musicList.find((music) => music.title === item);
      if (music) {
        musicInCache.set(item, music);
      }
    })
  }
  return Array.from(musicInCache.values());
});
