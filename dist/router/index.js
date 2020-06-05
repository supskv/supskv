"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var WebhookController = _interopRequireWildcard(require("../app/http/controllers/WebhookController"));

var router = _express["default"].Router(); // Home page route.


router.get("/", function (req, res) {
  res.send("Wiki home page");
}); // About page route.

router.get("/about", function (req, res) {
  res.send("About this wiki");
});
router.post("/webhook/:service", WebhookController.service);
var _default = router;
exports["default"] = _default;