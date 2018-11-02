"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _simpleReactForm = require("simple-react-form");

var _styles = _interopRequireDefault(require("./styles"));

var _underscore = _interopRequireDefault(require("underscore"));

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

var propTypes = _objectSpread({}, _simpleReactForm.FieldType.propTypes);

var defaultProps = {};

var StringArrayComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(StringArrayComponent, _Component);

  function StringArrayComponent(props) {
    var _this;

    _classCallCheck(this, StringArrayComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StringArrayComponent).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(StringArrayComponent, [{
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.keyCode === 13) {
        this.addItem();
      }
    }
  }, {
    key: "addItem",
    value: function addItem() {
      if (!this.state.value) return;
      var value = this.props.value || [];
      value.push(this.state.value);
      this.props.onChange(value);
      this.setState({
        value: ''
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(value) {
      var newValue = _underscore.default.without(this.props.value, value);

      this.props.onChange(newValue);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      return (this.props.value || []).map(function (value, index) {
        return _react.default.createElement("div", {
          onClick: function onClick() {
            return _this2.removeItem(value);
          },
          key: index,
          style: _styles.default.tag
        }, value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", null, _react.default.createElement(_TextField.default, _extends({
        ref: "input",
        fullWidth: true,
        value: this.state.value,
        floatingLabelText: this.props.useHint ? null : this.props.label,
        hintText: this.props.useHint ? this.props.label : null,
        errorText: this.props.errorMessage,
        disabled: this.props.disabled,
        onChange: function onChange(event) {
          return _this3.setState({
            value: event.target.value
          });
        },
        onKeyDown: this.onKeyDown.bind(this),
        onBlur: this.addItem.bind(this)
      }, this.props.passProps)), this.renderItems());
    }
  }]);

  return StringArrayComponent;
}(_react.Component);

exports.default = StringArrayComponent;
StringArrayComponent.propTypes = propTypes;
StringArrayComponent.defaultProps = defaultProps;
(0, _simpleReactForm.registerType)({
  type: 'string-array',
  component: StringArrayComponent
});
(0, _simpleReactForm.registerType)({
  type: 'tags',
  component: StringArrayComponent
});