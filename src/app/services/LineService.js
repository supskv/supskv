import axios from "axios"
import config from "@config/api"
import { Line as model } from "@app/models"

const verifyToken = "00000000000000000000000000000000"
const doorbellMsg = "Someone is ringing the doorbell."

export const replyMsg = async (events) => {
  try {
    const [
      {
        replyToken,
        type,
        mode,
        source: { userId },
      },
    ] = events

    switch (type) {
      case "follow":
        await model.save(userId)
        break
      case "unfollow":
        await model.del(userId)
        break
      case "message":
        break
    }

    console.log(replyToken, type, mode, userId)
    console.log(await model.firstOrNew())
  } catch (e) {
    console.log(e.response)
  }
}

export const pushToAll = async () => {
  try {
    const userIds = await model.firstOrNew()
    userIds.map((userId) => sendPush(userId, doorbellMsg))
  } catch (e) {
    console.log(e.response)
  }
}

const sendPush = (userId, msg) => {
  const data = {
    to: userId,
    messages: [
      {
        type: "text",
        text: msg,
      },
    ],
  }

  try {
    axios.post(config.LINE_PUSH_ENDPOINT, data, { headers: config.LINE_HEADER })
  } catch (e) {
    console.log(e.response)
  }
}
