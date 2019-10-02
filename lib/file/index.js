"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _simpleReactForm = require("simple-react-form");

var _underscore = _interopRequireDefault(require("underscore"));

var _uploadButton = _interopRequireDefault(require("./upload-button"));

var _preview = _interopRequireDefault(require("./preview"));

var _styles = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
   * A function that recieves { file, onProgress, onReady, onError }.
   * onProgress input is progress, a number from 0 to 1.
   * onReady inputs are { url, meta },
   *    url is the url of the file, meta is a object with whatever you want.
   * onError input is message.
   */
  upload: _propTypes["default"].func.isRequired,

  /**
   * A function that recieves { file, onReady, onError }.
   * file is the information of the file (includes the meta from before).
   * onReady is a function with no input.
   * onError input is message.
   */
  "delete": _propTypes["default"].func,

  /**
   * A mime type to match to accept the files.
   * If image prop is set and image prop is also set, this mime type is going to stay.
   * If this prop is not set and image prop is, the mime type will be 'image/*'
   */
  accept: _propTypes["default"].string,

  /**
   * Only accept images
   */
  image: _propTypes["default"].bool,

  /**
   * Accept multiple files. If you are using simple-schema and this is true,
   * you must set [Object] to the type.
   */
  multi: _propTypes["default"].bool,

  /**
   * Pass the styles props to the preview
   */
  previewStyles: _propTypes["default"].object,

  /**
   * This delete the files that are not used
   */
  deleteNotUsedFiles: _propTypes["default"].bool,

  /**
   * The label of the button
   */
  uploadLabel: _propTypes["default"].any,

  /**
   * The label of the delete button
   */
  deleteLabel: _propTypes["default"].any,

  /**
   * The text that is shown when deleting
   */
  confirmDeleteText: _propTypes["default"].any
});

var defaultProps = {
  accept: false,
  image: false,
  multi: false,
  previewStyles: {},
  deleteLabel: 'Delete',
  confirmDeleteText: 'Do you want to delete this file?',
  "delete": function _delete(_ref) {
    var file = _ref.file,
        onReady = _ref.onReady,
        onError = _ref.onError;
    return onReady();
  }
};

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    var _this;

    _classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, props));
    _this.state = {};
    _this.uploads = [];
    _this.toDelete = [];
    _this.limbo = [];
    /* $(window).unload(() => { This will be deactivated until better implementation is made
      this.componentWillUnmount()
    }) */

    return _this;
  }

  _createClass(Component, [{
    key: "onSuccess",
    value: function onSuccess() {
      var _this2 = this;

      this.toDelete.map(function (file) {
        _this2.props["delete"]({
          file: file,
          onReady: function onReady() {},
          onError: function onError(message) {
            alert(message);
          }
        });
      });
      this.toDelete = [];
      this.limbo = [];
    }
  }, {
    key: "onError",
    value: function onError(message) {// Todo something here
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!this.limbo.length) return;

      if (this.props.hasOwnProperty('deleteNotUsedFiles')) {
        if (!this.props.deleteNotUsedFiles) {
          return;
        }
      } else {
        if (this.props.form.props.hasOwnProperty('onChange')) {
          return;
        }
      }

      this.limbo.map(function (file) {
        _this3.props["delete"]({
          file: file,
          onReady: function onReady() {},
          onError: function onError(message) {
            alert(message);
          }
        });
      });
    }
  }, {
    key: "onReady",
    value: function onReady(upload, file) {
      if (this.props.multi) {
        var newValue = _underscore["default"].clone(this.props.value) || [];
        newValue.push(file);
        this.props.onChange(newValue);
      } else {
        this.props.onChange(file);
      }

      this.limbo.push(file);
    }
  }, {
    key: "startUpload",
    value: function startUpload(file, base64) {
      var _this4 = this;

      var upload = {
        key: _underscore["default"].uniqueId('uploadComponent'),
        file: file,
        base64: base64,
        isUploading: true
      };
      this.uploads.push(upload);
      this.forceUpdate();
      this.props.upload({
        file: file,
        onProgress: function onProgress(progress) {
          upload.progress = progress;

          _this4.forceUpdate();
        },
        onReady: function onReady(_ref2) {
          var url = _ref2.url,
              meta = _ref2.meta;

          _this4.onReady(upload, {
            url: url,
            meta: meta
          });

          var index = _this4.uploads.indexOf(upload);

          _this4.uploads.splice(index, 1);

          _this4.forceUpdate();
        },
        onError: function onError(message) {
          _this4.onError(upload, message);

          upload.isUploading = false;
          upload.error = message;

          _this4.forceUpdate();
        }
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(file) {
      this.toDelete.push(_underscore["default"].clone(file));

      if (this.props.multi) {
        var value = _underscore["default"].clone(this.props.value);

        var index = value.indexOf(file);
        value.splice(index, 1);
        this.props.onChange(value);
      } else {
        this.props.onChange(null);
      }
    }
  }, {
    key: "renderPreviews",
    value: function renderPreviews() {
      var _this5 = this;

      var uploadingPreviews = this.uploads.map(function (upload, index) {
        return _react["default"].createElement(_preview["default"], {
          key: upload.key,
          styles: _this5.props.previewStyles,
          base64: upload.base64,
          file: upload.file,
          isUploading: upload.isUploading,
          progress: upload.progress,
          isImage: !!_this5.props.image,
          onDelete: function onDelete() {
            return _this5.deleteFile(upload.file);
          }
        });
      });
      var value = this.props.multi ? this.props.value || [] : this.props.value ? [this.props.value] : [];
      var previews = value.map(function (file, index) {
        return _react["default"].createElement(_preview["default"], {
          key: "preview-".concat(file.url),
          styles: _this5.props.previewStyles,
          url: file.url,
          isImage: !!_this5.props.image,
          deleteLabel: _this5.props.deleteLabel,
          confirmDeleteText: _this5.props.confirmDeleteText,
          onDelete: function onDelete() {
            return _this5.deleteFile(file);
          }
        });
      });
      return _react["default"].createElement("div", null, previews, uploadingPreviews);
    }
  }, {
    key: "renderUploadButton",
    value: function renderUploadButton() {
      if (!this.props.multi && (this.props.value || this.uploads.length)) return;
      var props = {
        accept: this.props.accept ? this.props.accept : this.props.image ? 'image/*' : '',
        label: this.props.image ? this.props.uploadLabel || 'Upload image' : this.props.uploadLabel || 'Upload file',
        multi: !!this.props.multi,
        onUpload: this.startUpload.bind(this),
        passBase64: !!this.props.image
      };
      return _react["default"].createElement(_uploadButton["default"], props);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: {
          paddingTop: 10,
          paddingBottom: 10
        }
      }, _react["default"].createElement("div", {
        style: _styles["default"].label
      }, this.props.label), this.renderPreviews(), this.renderUploadButton(), _react["default"].createElement("div", {
        style: _styles["default"].errorMessage
      }, this.props.errorMessage));
    }
  }]);

  return Component;
}(_react["default"].Component);

exports["default"] = Component;
Component_.propTypes = propTypes;
Component_.defaultProps = defaultProps;