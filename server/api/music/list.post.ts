const api = `https://test.xiamoqwq.com/musicapi?type=list&id=${process.env.MUSIC_LIST_ID}`;

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

const getMusicList = async (): Promise<Music[]> => {
  const response = await fetch(api);
  return await response.json();
};
export default defineEventHandler(async () => {
  return await getMusicList();
});
