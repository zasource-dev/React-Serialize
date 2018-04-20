"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = serialize;
exports.deserialize = deserialize;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Serialize React element to JSON string
 *
 * @param {ReactNode} element
 * @returns {string}
 */
function serialize(element) {
  var replacer = function replacer(key, value) {
    switch (key) {
      case "_owner":
      case "_store":
      case "ref":
        return;

      default:
        return value;
    }
  };

  return JSON.stringify(element, replacer);
}
/**
 * Deserialize JSON string to React element
 *
 * @param {string|object} data
 * @param {object} options
 * @param {object} options.components
 * @param {function} options.reviver
 * @returns {ReactNode}
 */


function deserialize(data, options) {
  if (typeof data === "string") {
    data = JSON.parse(data);
  }

  if (_typeof(data) === "object") {
    return deserializeElement(data, options);
  }

  throw new Error("Deserialization error: incorrect data type");
}

function deserializeElement(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var key = arguments.length > 2 ? arguments[2] : undefined;
  var _options$components = options.components,
      components = _options$components === void 0 ? {} : _options$components,
      reviver = options.reviver;

  if (_typeof(element) !== "object") {
    return element;
  }

  if (element === null) {
    return element;
  }

  if (element instanceof Array) {
    return element.map(function (el, i) {
      return deserializeElement(el, options, i);
    });
  } // Now element has following shape { type: string, props: object }


  var type = element.type,
      props = element.props;

  if (typeof type !== "string") {
    throw new Error("Deserialization error: element type must be string");
  }

  type = components[type] || type.toLowerCase();

  if (props.children) {
    props.children = deserializeElement(props.children, options);
  }

  if (reviver) {
    ;

    var _reviver = reviver(type, props, key, components);

    type = _reviver.type;
    props = _reviver.props;
    key = _reviver.key;
    components = _reviver.components;
  }

  return _react.default.createElement(type, _objectSpread({}, props, {
    key: key
  }));
}