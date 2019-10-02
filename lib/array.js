"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _RaisedButton = _interopRequireDefault(require("@material-ui/core/RaisedButton"));

var _simpleReactForm = require("simple-react-form");

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

var styles = {
  label: {
    color: 'rgba(0,0,0,0.5)',
    marginBottom: 5,
    fontSize: 12
  }
};

var propTypes = _objectSpread2({}, _simpleReactForm.ArrayComponent.propTypes, {
  parentClassName: _propTypes["default"].string,
  childrenClassName: _propTypes["default"].string,
  useSmallSpace: _propTypes["default"].bool,
  smallRemoveButtonTooltipPosition: _propTypes["default"].string
});

var defaultProps = _objectSpread2({}, _simpleReactForm.ArrayComponent.defaultProps, {
  childrenClassName: '',
  parentClassName: '',
  useSmallSpace: false,
  smallRemoveButtonTooltipPosition: 'bottom-center'
});

var MaterialArray =
/*#__PURE__*/
function (_ArrayComponent) {
  _inherits(MaterialArray, _ArrayComponent);

  function MaterialArray() {
    _classCallCheck(this, MaterialArray);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaterialArray).apply(this, arguments));
  }

  _createClass(MaterialArray, [{
    key: "renderChildrenItem",
    value: function renderChildrenItem(_ref) {
      var index = _ref.index,
          children = _ref.children;
      if (this.props.useSmallSpace) return this.renderChildrenSmallItem({
        index: index,
        children: children
      });
      return _react["default"].createElement("div", {
        className: this.props.childrenClassName,
        key: "".concat(this.props.fieldName, ".").concat(index)
      }, _react["default"].createElement(_Paper["default"], {
        style: {
          marginTop: 20,
          marginBottom: 20,
          padding: 20
        }
      }, this.renderChildrenItemWithContext({
        index: index,
        children: children
      }), _react["default"].createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'right'
        }
      }, this.renderRemoveButton(index))));
    }
  }, {
    key: "renderChildrenSmallItem",
    value: function renderChildrenSmallItem(_ref2) {
      var index = _ref2.index,
          children = _ref2.children;
      return _react["default"].createElement("div", {
        className: this.props.childrenClassName,
        key: "".concat(this.props.fieldName, ".").concat(index),
        style: {
          marginTop: 10,
          marginBottom: 10,
          display: 'flex'
        }
      }, _react["default"].createElement("div", {
        style: {
          flexBasis: '90%',
          maxWidth: '90%'
        }
      }, this.renderChildrenItemWithContext({
        index: index,
        children: children
      })), _react["default"].createElement("div", {
        style: {
          flexBasis: '10%',
          maxWidth: '10%',
          marginTop: 20,
          textAlign: 'right'
        }
      }, this.renderSmallRemoveButton(index)));
    }
  }, {
    key: "renderRemoveButton",
    value: function renderRemoveButton(index) {
      var _this = this;

      if (this.props.disabled) return;
      return _react["default"].createElement(_RaisedButton["default"], {
        label: this.props.removeLabel,
        onTouchTap: function onTouchTap() {
          return _this.removeItem(index);
        }
      });
    }
  }, {
    key: "renderSmallRemoveButton",
    value: function renderSmallRemoveButton(index) {
      var _this2 = this;

      if (this.props.disabled) return;
      return _react["default"].createElement(_IconButton["default"], {
        iconClassName: "material-icons",
        onTouchTap: function onTouchTap() {
          return _this2.removeItem(index);
        },
        tooltip: this.props.removeLabel,
        tooltipPosition: this.props.smallRemoveButtonTooltipPosition
      }, "clear");
    }
  }, {
    key: "renderAddButton",
    value: function renderAddButton() {
      var _this3 = this;

      if (!this.props.showAddButton) return;
      if (this.props.disabled) return;
      if (this.props.useSmallSpace) return this.renderSmallAddButton();
      return _react["default"].createElement(_RaisedButton["default"], {
        label: this.props.addLabel,
        onTouchTap: function onTouchTap() {
          return _this3.addItem();
        }
      });
    }
  }, {
    key: "renderSmallAddButton",
    value: function renderSmallAddButton() {
      var _this4 = this;

      return _react["default"].createElement("div", {
        style: {
          textAlign: 'right'
        }
      }, _react["default"].createElement(_IconButton["default"], {
        iconClassName: "material-icons",
        onTouchTap: function onTouchTap() {
          return _this4.addItem();
        },
        tooltip: this.props.addLabel
      }, "add"));
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: {
          marginTop: 20
        }
      }, _react["default"].createElement("div", {
        style: styles.label
      }, this.props.label), _react["default"].createElement("div", {
        style: {
          color: 'red'
        }
      }, this.props.errorMessage), _react["default"].createElement("div", {
        className: this.props.parentClassName
      }, this.renderChildren()), _react["default"].createElement("div", {
        style: {
          marginTop: 10
        }
      }, this.renderAddButton()));
    }
  }]);

  return MaterialArray;
}(_simpleReactForm.ArrayComponent);

exports["default"] = MaterialArray;
MaterialArray.propTypes = propTypes;
MaterialArray.defaultProps = defaultProps;