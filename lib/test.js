"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const input = _react.default.createElement("p", null, "Hello");

console.log("input", input);
const json = (0, _index.serialize)(input);
console.log("json", json);
const output = (0, _index.deserialize)(json);
console.log("output", output);