const api = `https://me.axm.moe/music`;
const playUrlApi = `${api}/v1/qq/song?mid=`;

export default defineEventHandler(async event => {
  const query: { mid: string } = getQuery(event);
  const response = await fetch(playUrlApi + query.mid);
  const json = await response.json();
  return await sendRedirect(event, json.data.url, 302);
});
