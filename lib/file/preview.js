"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var Colors = _interopRequireWildcard(require("@material-ui/core/styles/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  image: {
    marginBottom: 10,
    marginRight: 10,
    cursor: 'pointer',
    display: 'inline-block',
    maxHeight: 150,
    maxWidth: '100%',
    backgroundColor: 'white',
    borderRadius: 2,
    boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)'
  },
  imageLoading: {
    maxHeight: 150,
    maxWidth: '100%',
    marginBottom: -5,
    opacity: 0.5
  },
  progress: {
    margin: '0 auto',
    display: 'block',
    marginTop: -50
  }
};
var propTypes = {
  base64: _propTypes["default"].string,
  url: _propTypes["default"].string,
  isImage: _propTypes["default"].bool,
  isUploading: _propTypes["default"].bool,
  progress: _propTypes["default"].number,
  onDelete: _propTypes["default"].func,
  deleteLabel: _propTypes["default"].any,
  confirmDeleteText: _propTypes["default"].any,
  styles: _propTypes["default"].object.isRequired
};

var FilesPreview =
/*#__PURE__*/
function (_Component) {
  _inherits(FilesPreview, _Component);

  function FilesPreview() {
    _classCallCheck(this, FilesPreview);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilesPreview).apply(this, arguments));
  }

  _createClass(FilesPreview, [{
    key: "askDelete",
    value: function askDelete() {
      if (confirm(this.props.confirmDeleteText)) {
        // we should use a react component hereº
        this.props.onDelete();
      }
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      return _react["default"].createElement("div", {
        style: {
          marginBottom: 10
        }
      }, _react["default"].createElement(_LinearProgress["default"], {
        mode: "determinate",
        value: this.props.progress * 100
      }));
    }
  }, {
    key: "renderBase64",
    value: function renderBase64() {
      return _react["default"].createElement("div", null, _react["default"].createElement("img", {
        src: this.props.base64,
        style: styles.imageLoading
      }), _react["default"].createElement(_CircularProgress["default"], {
        style: styles.progress,
        mode: "determinate",
        value: this.props.progress * 100,
        size: 0.5
      }));
    }
  }, {
    key: "renderPreviewImage",
    value: function renderPreviewImage() {
      return _react["default"].createElement("img", {
        src: this.props.url,
        style: _objectSpread2({}, styles.image, {}, this.props.styles),
        onClick: this.askDelete.bind(this)
      });
    }
  }, {
    key: "renderPreview",
    value: function renderPreview() {
      return _react["default"].createElement("div", {
        style: {
          marginBottom: 10
        }
      }, _react["default"].createElement("a", {
        style: {
          color: Colors.blue400
        },
        href: this.props.url,
        target: "_blank"
      }, this.props.url), _react["default"].createElement("span", {
        style: {
          color: Colors.red400,
          marginLeft: 5,
          cursor: 'pointer'
        },
        onClick: this.props.onDelete.bind(this)
      }, this.props.deleteLabel));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isUploading) {
        if (this.props.isImage) {
          return this.renderBase64();
        } else {
          return this.renderLoading();
        }
      } else {
        if (this.props.isImage) {
          return this.renderPreviewImage();
        } else {
          return this.renderPreview();
        }
      }
    }
  }]);

  return FilesPreview;
}(_react.Component);

exports["default"] = FilesPreview;
FilesPreview.propTypes = propTypes;