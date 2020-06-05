"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _cors = _interopRequireDefault(require("cors"));

var _mqtt = _interopRequireDefault(require("mqtt"));

var _router = _interopRequireDefault(require("../router"));

var _express = _interopRequireDefault(require("express"));

var _app = _interopRequireDefault(require("../config/app"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _services = require("../app/services");

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use("/", _router["default"]);
app.listen(_app["default"].SERVER_PORT, function () {
  console.log("Server started and listening on port:", _app["default"].SERVER_PORT);
}); // Connect MQTT

var client = _mqtt["default"].connect({
  host: _app["default"].MQTT_SERVER,
  port: _app["default"].MQTT_PORT,
  username: _app["default"].MQTT_USER,
  password: _app["default"].MQTT_PASSWORD
});

client.on("connect", function () {
  // Subscribe any topic
  console.log("MQTT Client connected");
  client.subscribe("test", function (err) {
    if (err) {
      console.log(err);
    }
  }); // LineService.pushNoti("U9e5c1fc807fff3db84401a018942b6f1", "Hello, test")
}); // Receive Message and print on terminal

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(topic.toString(), message.toString());
});