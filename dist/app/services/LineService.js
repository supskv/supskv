"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushNoti = exports.replyMsg = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _api = _interopRequireDefault(require("../../config/api"));

var _axios = _interopRequireDefault(require("axios"));

var replyMsg = function replyMsg(event) {
  var reply_token = event.replyToken;
  var userId = event.source.userId;
  console.log(reply_token, userId);
};

exports.replyMsg = replyMsg;

var pushNoti = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId, msg) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = JSON.stringify({
              to: userId,
              messages: [{
                type: "text",
                text: msg
              }]
            });
            _context.prev = 1;
            _context.next = 4;
            return _axios["default"].post(_api["default"].LINE_PUSH_ENDPOINT, data, {
              headers: _api["default"].LINE_HEADER
            });

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.response);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function pushNoti(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.pushNoti = pushNoti;