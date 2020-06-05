import config from "@config/app"
import _ from "lodash"
import aedes from "aedes"
import net from "net"

const app = aedes()
const server = net.createServer(app.handle)

const credential = {
  username: "admin",
  password: "1234",
}

app.authenticate = (client, username, password, callback) => {
  const clientCredential = { username, password: password.toString("utf8") }

  if (_.isEqual(clientCredential, credential)) {
    callback(null, username === "admin")
  } else {
    const error = new Error("Auth error")
    error.returnCode = 4
    callback(error, null)
  }
}

server.listen(config.MQTT_PORT, () => {
  console.log("MQTT Broker started and listening on port:", config.MQTT_PORT)
})
