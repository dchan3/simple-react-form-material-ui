"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _RaisedButton = _interopRequireDefault(require("material-ui/RaisedButton"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var propTypes = {
  accept: _propTypes.default.string,
  label: _propTypes.default.any,
  multi: _propTypes.default.bool,
  onUpload: _propTypes.default.func.isRequired,
  passBase64: _propTypes.default.bool
};
var defaultProps = {
  label: 'Upload image',
  multi: false,
  accept: null,
  passBase64: false
};

var UploadButton =
/*#__PURE__*/
function (_Component) {
  _inherits(UploadButton, _Component);

  function UploadButton() {
    _classCallCheck(this, UploadButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(UploadButton).apply(this, arguments));
  }

  _createClass(UploadButton, [{
    key: "openFileDialog",
    value: function openFileDialog() {
      var fileInputDom = _reactDom.default.findDOMNode(this.refs.input);

      fileInputDom.click();
    }
  }, {
    key: "handleFile",
    value: function handleFile(event) {
      var _this = this;

      _underscore.default.keys(event.target.files).map(function (index) {
        var file = event.target.files[index];

        if (_this.props.passBase64) {
          var reader = new FileReader();

          reader.onload = function (upload) {
            var base64 = upload.target.result;

            _this.props.onUpload(file, base64);
          };

          reader.readAsDataURL(file);
        } else {
          _this.props.onUpload(file);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_RaisedButton.default, {
        label: this.props.label,
        onClick: this.openFileDialog.bind(this)
      }), _react.default.createElement("input", {
        type: "file",
        multiple: this.props.multi,
        ref: "input",
        style: {
          display: 'none'
        },
        accept: this.props.accept,
        onChange: this.handleFile.bind(this)
      }));
    }
  }]);

  return UploadButton;
}(_react.Component);

exports.default = UploadButton;
UploadButton.propTypes = propTypes;
UploadButton.defaultProps = defaultProps;