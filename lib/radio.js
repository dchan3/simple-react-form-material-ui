"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButton = _interopRequireDefault(require("@material-ui/core/RadioButton"));

var Colors = _interopRequireWildcard(require("@material-ui/core/styles/colors"));

var _simpleReactForm = require("simple-react-form");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread2({}, _simpleReactForm.FieldType.propTypes, {
  /**
   * The options for the select input. Each item must have label and value.
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    description: _propTypes["default"].string
  })).isRequired
});

var defaultProps = {};

var RadioComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(RadioComponent, _Component);

  function RadioComponent() {
    _classCallCheck(this, RadioComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioComponent).apply(this, arguments));
  }

  _createClass(RadioComponent, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      return this.props.options.map(function (item) {
        return _react["default"].createElement("div", {
          key: item.value
        }, _react["default"].createElement(_RadioButton["default"], {
          label: item.label,
          checked: item.value === _this.props.value,
          onCheck: function onCheck() {
            return _this.props.onChange(item.value);
          },
          disabled: _this.props.disabled,
          style: {
            marginBotton: 16,
            marginTop: 16
          }
        }), _react["default"].createElement("div", {
          style: {
            marginLeft: 40,
            color: Colors.grey500,
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return _this.props.onChange(item.value);
          }
        }, (item.description || '').split('\n').map(function (text, index) {
          return _react["default"].createElement("div", {
            key: index
          }, text);
        })));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: _styles["default"].fieldContainer
      }, _react["default"].createElement("div", {
        style: _styles["default"].mirrorLabel
      }, this.props.label), this.renderItems(), _react["default"].createElement("div", {
        style: _styles["default"].errorMessage
      }, this.props.errorMessage));
    }
  }]);

  return RadioComponent;
}(_react.Component);

exports["default"] = RadioComponent;
RadioComponent.propTypes = propTypes;
RadioComponent.defaultProps = defaultProps;