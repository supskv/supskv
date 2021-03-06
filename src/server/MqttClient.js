import cors from "cors"
import mqtt from "mqtt"
import router from "@router"
import express from "express"
import config from "@config/app"
import bodyParser from "body-parser"
import { LineService } from "@app/services"

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/", router)

app.listen(config.SERVER_PORT, () => {
  console.log("Server started and listening on port:", config.SERVER_PORT)
})

// Connect MQTT
const client = mqtt.connect({
  host: config.MQTT_SERVER,
  port: config.MQTT_PORT,
  username: config.MQTT_USER,
  password: config.MQTT_PASSWORD,
})

client.on("connect", () => {
  // Subscribe any topic
  console.log("MQTT Client connected")
  config.SERVER_MQTT_SUBSCRIBE.map((topic) => {
    client.subscribe(topic, (err) => {
      if (err) console.log(err)
    })
  })
})

// Receive Message and print on terminal
client.on("message", (topic, message) => {
  // message is Buffer
  console.log(topic.toString(), message.toString())

  LineService.pushToAll()
})
