"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var LINE_PUSH_ENDPOINT = process.env.LINE_PUSH_ENDPOINT || "https://api.line.me/v2/bot/message/push";
var LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN || "";
var LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: "Bearer {".concat(LINE_CHANNEL_ACCESS_TOKEN, "}")
};
var _default = {
  LINE_PUSH_ENDPOINT: LINE_PUSH_ENDPOINT,
  LINE_CHANNEL_ACCESS_TOKEN: LINE_CHANNEL_ACCESS_TOKEN,
  LINE_HEADER: LINE_HEADER
};
exports["default"] = _default;