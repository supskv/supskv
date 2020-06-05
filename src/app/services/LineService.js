import config from "@config/api"
import axios from "axios"

export const replyMsg = (event) => {
  let reply_token = event.replyToken
  let userId = event.source.userId
  console.log(reply_token, userId)
}

export const pushNoti = async (userId, msg) => {
  const data = JSON.stringify({
    to: userId,
    messages: [
      {
        type: "text",
        text: msg,
      },
    ],
  })

  try {
    await axios.post(config.LINE_PUSH_ENDPOINT, data, { headers: config.LINE_HEADER })
  } catch (e) {
    console.log(e.response)
  }
}
