"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _simpleReactForm = require("simple-react-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  fieldType: _propTypes.default.string
});

var defaultProps = {};

var TextFieldComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TextFieldComponent, _Component);

  function TextFieldComponent(props) {
    var _this;

    _classCallCheck(this, TextFieldComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextFieldComponent).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(TextFieldComponent, [{
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.keyCode === 13) {
        this.props.onChange(event.target.value);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      if (this.props.onBlur) {
        this.props.onBlur();
      }

      this.props.onChange(event.target.value);
    }
  }, {
    key: "isNumberType",
    value: function isNumberType() {
      if (this.props.fieldSchema) {
        return this.props.fieldSchema.type === Number;
      }

      if (this.props.fieldType === 'number') {
        return true;
      }

      if (this.type === 'number') {
        return true;
      }

      return false;
    }
  }, {
    key: "onChange",
    value: function onChange(event, other) {
      var value = this.isNumberType() ? Number(event.target.value) : event.target.value;
      this.props.onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var fieldType = this.props.fieldType || this.type || 'text';
      return _react.default.createElement(_TextField.default, _extends({
        ref: "input",
        fullWidth: true,
        value: typeof this.props.value !== 'undefined' ? this.props.value : '',
        type: fieldType,
        label: this.props.useHint ? null : this.props.label,
        placeholder: this.props.useHint ? this.props.label : null,
        errortext: this.props.errorMessage,
        disabled: this.props.disabled,
        onChange: this.onChange.bind(this),
        onKeyDown: this.onKeyDown.bind(this),
        onBlur: this.onBlur.bind(this)
      }, this.props.passProps));
    }
  }]);

  return TextFieldComponent;
}(_react.Component);

exports.default = TextFieldComponent;
TextFieldComponent.propTypes = propTypes;
TextFieldComponent.defaultProps = defaultProps;

var StringFieldComponent =
/*#__PURE__*/
function (_TextFieldComponent) {
  _inherits(StringFieldComponent, _TextFieldComponent);

  function StringFieldComponent(props) {
    var _this2;

    _classCallCheck(this, StringFieldComponent);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(StringFieldComponent).call(this, props));
    _this2.type = 'text';
    return _this2;
  }

  return StringFieldComponent;
}(TextFieldComponent);

var NumberFieldComponent =
/*#__PURE__*/
function (_TextFieldComponent2) {
  _inherits(NumberFieldComponent, _TextFieldComponent2);

  function NumberFieldComponent(props) {
    var _this3;

    _classCallCheck(this, NumberFieldComponent);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(NumberFieldComponent).call(this, props));
    _this3.type = 'number';
    return _this3;
  }

  return NumberFieldComponent;
}(TextFieldComponent);

var DateFieldComponent =
/*#__PURE__*/
function (_TextFieldComponent3) {
  _inherits(DateFieldComponent, _TextFieldComponent3);

  function DateFieldComponent(props) {
    var _this4;

    _classCallCheck(this, DateFieldComponent);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(DateFieldComponent).call(this, props));
    _this4.type = 'date';
    return _this4;
  }

  return DateFieldComponent;
}(TextFieldComponent);