"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SelectField = _interopRequireDefault(require("@material-ui/core/SelectField"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _simpleReactForm = require("simple-react-form");

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread({}, _simpleReactForm.FieldType.propTypes, {
  /**
   * Optional default value.
   */
  defaultValue: _propTypes.default.string,

  /**
   * The options for the select input. Each item must have label and value.
   */
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
  }))
});

var defaultProps = {};

var SelectComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectComponent, _React$Component);

  function SelectComponent() {
    _classCallCheck(this, SelectComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectComponent).apply(this, arguments));
  }

  _createClass(SelectComponent, [{
    key: "getOptions",
    value: function getOptions() {
      if (this.props.options) {
        return this.props.options;
      } else if (this.props.fieldSchema && this.props.fieldSchema.allowedValues) {
        return _underscore.default.map(this.props.fieldSchema.allowedValues, function (allowedValue) {
          return {
            label: allowedValue,
            value: allowedValue
          };
        });
      } else {
        throw new Error('You must set the options for the select field');
      }
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      if (this.props.defaultValue) {
        return this.props.defaultValue;
      } else if (this.props.fieldSchema && this.props.fieldSchema.defaultValue) {
        return this.props.fieldSchema.defaultValue;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.value) {
        this.props.onChange(this.getDefaultValue());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_SelectField.default, _extends({
        value: String(this.props.value),
        defaultValue: this.getDefaultValue(),
        fullWidth: true,
        disabled: this.props.disabled,
        floatingLabelText: this.props.label,
        errorText: this.props.errorMessage
      }, this.props.passProps), this.getOptions().map(function (item) {
        return _react.default.createElement(_MenuItem.default, {
          key: item.value,
          value: String(item.value),
          primaryText: item.label,
          onTouchTap: function onTouchTap(value) {
            return _this.props.onChange(item.value);
          }
        });
      }));
    }
  }]);

  return SelectComponent;
}(_react.default.Component);

exports.default = SelectComponent;
SelectComponent.propTypes = propTypes;
SelectComponent.defaultProps = defaultProps;
(0, _simpleReactForm.registerType)({
  type: 'select',
  component: SelectComponent
});