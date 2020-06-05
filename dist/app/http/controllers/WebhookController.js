"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.service = void 0;

var _services = require("../../services");

var service = function service(req, res) {
  var service = req.params.service;

  switch (service) {
    case "line":
      _services.LineService.replyMsg(req.body.events[0]);

      break;
  }

  res.sendStatus(200);
};

exports.service = service;