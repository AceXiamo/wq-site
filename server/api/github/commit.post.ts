import dayjs from "dayjs"
import RelativeTime from "dayjs/plugin/relativeTime.js"
dayjs.extend(RelativeTime)

const api = `https://api.github.com/repos/AceXiamo/wq-site/commits`

export type CommitHistoryItem = {
  auth: {
    name: string
    email: string
    date: string
    avatar: string
    url: string
    type: "User" | "Bot"
  },
  date: string,
  message: string,
}

const hisGet = () => {
  return fetch(api).then(res => res.json()).then(res => {
    return res.map((item: any) => {
      return {
        auth: {
          name: item.author.login,
          email: item.commit.author.email,
          date: item.commit.author.date,
          avatar: item.author.avatar_url,
          url: item.author.html_url,
          type: item.author.type,
        },
        date: dayjs(item.commit.author.date).fromNow(),
        message: item.commit.message,
      }
    })
  })
}


export default defineEventHandler(async event => {
  return hisGet()
});
