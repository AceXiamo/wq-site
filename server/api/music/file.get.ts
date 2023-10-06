const api = `https://test.xiamoqwq.com/kugou/song/url`;

type SongUrlResponse = {
  backUrl: string[];
  url: string[];
  fileName: string;
};

const getMusicUrl = async (
  hashArr: string[],
  index: number = 0
): Promise<string> => {
  if (index >= hashArr.length) {
    console.error("getMusicUrl: no url found");
    return "";
  }

  let url;
  const response = await fetch(`${api}?hash=${hashArr[index]}`);
  const json: SongUrlResponse = await response.json();
  if (json.url || json.backUrl) {
    if (!json.url || json.url.length < 1) url = json.backUrl[index];
    else url = json.url[0];
  } else {
    url = await getMusicUrl(hashArr, index + 1);
  }
  return url;
};

export default defineEventHandler(async event => {
  const query: { mid: string } = getQuery(event);
  let url;
  const response = await fetch(`${api}?hash=${query.mid}&cookie=${process.env.KUGOU_COOKIE || ""}`);
  const json: SongUrlResponse = await response.json();
  if (!json.url || json.url.length < 1) url = json.backUrl[0];
  else url = json.url[0];

  return await sendRedirect(event, url, 302);
});
