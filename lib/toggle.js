"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToggleComponent;

var _react = _interopRequireDefault(require("react"));

var _Toggle = _interopRequireDefault(require("@material-ui/core/Toggle"));

var _simpleReactForm = require("simple-react-form");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread2({}, _simpleReactForm.FieldType.propTypes);

var defaultProps = {};

function ToggleComponent(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_Toggle["default"], _extends({
    label: props.label,
    defaultToggled: !!props.value,
    disabled: props.disabled,
    onToggle: function onToggle() {
      return props.onChange(!props.value);
    }
  }, props.passProps)), _react["default"].createElement("div", {
    style: _styles["default"].errorMessage
  }, props.errorMessage));
}

ToggleComponent.propTypes = propTypes;
ToggleComponent.defaultProps = defaultProps;