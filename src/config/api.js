import "dotenv/config"

const LINE_PUSH_ENDPOINT =
  process.env.LINE_PUSH_ENDPOINT || "https://api.line.me/v2/bot/message/push"
const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN || ""
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer {${LINE_CHANNEL_ACCESS_TOKEN}}`,
}

export default {
  LINE_PUSH_ENDPOINT,
  LINE_CHANNEL_ACCESS_TOKEN,
  LINE_HEADER,
}
