import "dotenv/config"

export default {
  APP_URL: process.env.APP_URL || "127.0.0.1",
  MQTT_SERVER: process.env.MQTT_SERVER || "127.0.0.1",
  MQTT_USER: process.env.MQTT_USER || "",
  MQTT_PASSWORD: process.env.MQTT_PASSWORD || "",
  MQTT_PORT: process.env.MQTT_PORT || 1883,
  SERVER_PORT: process.env.SERVER_PORT || 4000,
  SERVER_MQTT_SUBSCRIBE: ["home/doorbell"],
}
