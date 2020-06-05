"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("../config/app"));

var _lodash = _interopRequireDefault(require("lodash"));

var _aedes = _interopRequireDefault(require("aedes"));

var _net = _interopRequireDefault(require("net"));

var app = (0, _aedes["default"])();

var server = _net["default"].createServer(app.handle);

var credential = {
  username: "admin",
  password: "1234"
};

app.authenticate = function (client, username, password, callback) {
  var clientCredential = {
    username: username,
    password: password.toString("utf8")
  };

  if (_lodash["default"].isEqual(clientCredential, credential)) {
    callback(null, username === "admin");
  } else {
    var error = new Error("Auth error");
    error.returnCode = 4;
    callback(error, null);
  }
};

server.listen(_app["default"].MQTT_PORT, function () {
  console.log("MQTT Broker started and listening on port:", _app["default"].MQTT_PORT);
});