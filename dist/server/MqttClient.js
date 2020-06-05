"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _cors = _interopRequireDefault(require("cors"));

var _router = _interopRequireDefault(require("../router"));

var _express = _interopRequireDefault(require("express"));

var _app = _interopRequireDefault(require("../config/app"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _services = require("../app/services");

// import mqtt from "mqtt"
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use("/", _router["default"]);
app.listen(80, function () {
  console.log("Server started and listening on port:", 80);
}); // // Connect MQTT
// const client = mqtt.connect({
//   host: config.MQTT_SERVER,
//   port: config.MQTT_PORT,
//   username: config.MQTT_USER,
//   password: config.MQTT_PASSWORD,
// })
// client.on("connect", () => {
//   // Subscribe any topic
//   console.log("MQTT Client connected")
//   client.subscribe("test", (err) => {
//     if (err) {
//       console.log(err)
//     }
//   })
//   // LineService.pushNoti("U9e5c1fc807fff3db84401a018942b6f1", "Hello, test")
// })
// // Receive Message and print on terminal
// client.on("message", (topic, message) => {
//   // message is Buffer
//   console.log(topic.toString(), message.toString())
// })