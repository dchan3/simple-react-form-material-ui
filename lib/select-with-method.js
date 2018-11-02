"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AutoComplete = _interopRequireDefault(require("@material-ui/core/AutoComplete"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _underscore = _interopRequireDefault(require("underscore"));

var _simpleReactForm = require("simple-react-form");

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var Colors = _interopRequireWildcard(require("@material-ui/core/styles/colors"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _FontIcon = _interopRequireDefault(require("@material-ui/core/FontIcon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread({}, _simpleReactForm.FieldType.propTypes, {
  /**
   * Allow to select multiple items.
   */
  multi: _propTypes.default.bool,

  /**
   * Meteor method that recieves the search string and returns an array of items
   * with 'label' and 'value' attributes.
   */
  methodName: _propTypes.default.string.isRequired,

  /**
   * Meteor method that recieves the value and must return the label. If
   * ```multi``` is set to true, it will recieve an array and it must return an
   * with the labels in the same order.
   */
  labelMethodName: _propTypes.default.string.isRequired,

  /**
   * A Meteor connection.
   */
  connection: _propTypes.default.any,

  /**
   * Time with no changes that activates the search.
   */
  waitTime: _propTypes.default.number,

  /**
   * A function that creates a document and pass the value in a callback
   */
  create: _propTypes.default.func,

  /**
   * A function that returns the create label
   */
  createLabel: _propTypes.default.func,

  /**
   * A function that returns if a value can be created
   */
  canCreate: _propTypes.default.func
});

var defaultProps = {
  multi: false,
  waitTime: 400,
  createLabel: function createLabel(search) {
    return "Create '".concat(search, "'");
  },
  canCreate: function canCreate() {
    return true;
  }
};

var SelectWithMethodComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectWithMethodComponent, _React$Component);

  function SelectWithMethodComponent(props) {
    var _this;

    _classCallCheck(this, SelectWithMethodComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectWithMethodComponent).call(this, props));
    _this.state = {
      dataSource: [],
      selected: null,
      items: [],
      knownItems: [],
      response: [],
      isFetchingData: false,
      isFetchingLabel: false,
      hasTitleFor: null,
      searchText: ''
    };
    _this.debouncedSearch = _underscore.default.debounce(_this.search.bind(_assertThisInitialized(_assertThisInitialized(_this))), _this.props.waitTime);
    return _this;
  }

  _createClass(SelectWithMethodComponent, [{
    key: "isLoading",
    value: function isLoading() {
      return this.state.isFetchingData || this.state.isFetchingLabel;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateLabel(this.props.value);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // console.log('will recieve props', nextProps)
      if (this.props.value !== nextProps.value && nextProps.value) {
        this.updateLabel(nextProps.value);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.searchText !== this.refs.input.state.searchText) {
        this.refs.input.setState({
          searchText: this.state.searchText
        });
      }
    }
  }, {
    key: "updatedSelectedItems",
    value: function updatedSelectedItems(values) {
      var _this2 = this;

      var missingLabels = [];
      var knownItems = this.state.knownItems;
      var valueArray = _underscore.default.isArray(values) ? values : [values];
      if (!values) return;
      valueArray.map(function (value) {
        if (!_this2.state.knownItems[value]) {
          missingLabels.push(value);
        }
      });

      if (missingLabels.length > 0) {
        var labelMethodName = this.props.labelMethodName;
        var connection = this.props.connection || global.Meteor;
        var labelsMethod = this.props.multi ? missingLabels : missingLabels[0];
        this.setState({
          isFetchingLabel: true
        });
        connection.call(labelMethodName, labelsMethod, function (error, response) {
          _this2.setState({
            isFetchingLabel: false
          });

          if (error) {
            console.log("[select-with-method] Recieved error from '".concat(labelMethodName, "'"), error);
          } else {
            if (_this2.props.multi) {
              missingLabels.map(function (value, index) {
                if (_underscore.default.isString(response[index])) {
                  knownItems[value] = {
                    label: response[index]
                  };
                } else {
                  knownItems[value] = response[index];
                }
              });
            } else {
              if (_underscore.default.isString(response)) {
                knownItems[labelsMethod] = {
                  label: response
                };
              } else {
                knownItems[labelsMethod] = response;
              } // console.log('setting to response', response)


              _this2.setState({
                searchText: knownItems[labelsMethod].label
              });
            }

            _this2.setState({
              knownItems: knownItems
            });
          }
        });
      } else {
        if (!this.props.multi) {
          // console.log('setting to known label', knownItems[values])
          this.setState({
            searchText: knownItems[values]
          });
        }
      }
    }
  }, {
    key: "updateLabel",
    value: function updateLabel(value) {
      if (!this.props.multi && !value) {
        // console.log('clean on update')
        this.setState({
          searchText: ''
        });
        return;
      }

      this.updatedSelectedItems(value);
    }
  }, {
    key: "search",
    value: function search(text) {
      var _this3 = this;

      // console.log('searching with text', text)
      this.setState({
        selected: null,
        isFetchingData: true
      });

      if (!this.props.multi) {
        this.props.onChange(null);
      }

      var methodName = this.props.methodName;
      var connection = this.props.connection || global.Meteor;
      connection.call(methodName, text, function (error, response) {
        _this3.setState({
          isFetchingData: false
        });

        if (error) {
          console.log("[select-with-method] Recieved error from '".concat(methodName, "'"), error);
        } else {
          response = response || [];

          _this3.setState({
            response: response
          });

          var dataSource = response.map(function (item) {
            return {
              text: item.value,
              value: _react.default.createElement(_MenuItem.default, {
                primaryText: item.label
              })
            };
          });

          if (_underscore.default.isFunction(_this3.props.create) && text && _this3.props.canCreate(text)) {
            dataSource.push({
              text: text,
              value: _react.default.createElement(_MenuItem.default, {
                primaryText: _this3.props.createLabel(text)
              })
            });
          }

          _this3.setState({
            dataSource: dataSource
          });
        }
      });
    }
  }, {
    key: "onUpdateText",
    value: function onUpdateText(text) {
      this.setState({
        searchText: text,
        isFetchingData: true
      });
      this.debouncedSearch(text);
    }
  }, {
    key: "createItem",
    value: function createItem(item) {
      var _this4 = this;

      this.props.create(item.text, function (value) {
        if (_this4.props.multi) {
          setTimeout(function () {
            _this4.setState({
              searchText: ''
            });
          }, 101);

          if (_underscore.default.contains(_this4.props.value || [], value)) {
            return;
          }

          _this4.props.onChange(_underscore.default.union(_this4.props.value || [], [value]));
        } else {
          _this4.props.onChange(value);
        }
      });
    }
  }, {
    key: "onItemSelected",
    value: function onItemSelected(item, index) {
      var _this5 = this;

      if (index === this.state.response.length && _underscore.default.isFunction(this.props.create)) {
        return this.createItem(item);
      }

      var selected = this.state.response[index];

      if (this.props.multi) {
        // console.log('clean on item selected')
        setTimeout(function () {
          _this5.setState({
            searchText: ''
          });
        }, 101);
        if (_underscore.default.contains(this.props.value || [], selected.value)) return;
        this.props.onChange(_underscore.default.union(this.props.value || [], [selected.value]));
      } else {
        this.props.onChange(selected ? selected.value : null);
        setTimeout(function () {
          _this5.setState({
            searchText: selected.label
          });
        }, 101);
      }

      if (selected) {
        this.state.knownItems[selected.value] = selected;
        this.setState({
          knownItems: this.state.knownItems
        });
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem(value) {
      this.props.onChange(_underscore.default.without(this.props.value || [], value));
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      if (!this.props.multi && !this.props.value) {
        this.search('');
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        open: false
      });

      if (!this.props.value) {
        this.setState({
          searchText: ''
        });
      }

      if (this.state.searchText !== this.refs.input.state.searchText) {
        // console.log('did blur, not equal')
        this.refs.input.setState({
          searchText: this.state.searchText
        });
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this6 = this;

      return (_underscore.default.isArray(this.props.value) ? this.props.value : []).map(function (value, index) {
        var item = _this6.state.knownItems[value] || 'Loading...';
        var label = item.label;
        var image = item.image;
        var initials = item.initials || undefined;
        var color = item.color;
        var textColor = color ? Colors.white : Colors.grey900;
        var icon = item.icon ? _react.default.createElement(_FontIcon.default, {
          className: "material-icons"
        }, item.icon) : null;
        var avatar = null;

        if (initials || icon || image) {
          avatar = _react.default.createElement(_Avatar.default, {
            src: image,
            size: 32,
            icon: icon,
            color: Colors.blue200,
            backgroundColor: Colors.blue600
          }, initials);
        }

        return _react.default.createElement(_Chip.default, {
          onRequestDelete: function onRequestDelete() {
            return _this6.removeItem(value);
          },
          key: value,
          labelColor: textColor,
          style: {
            marginBottom: 3
          },
          backgroundColor: color
        }, avatar, label);
      });
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      if (!this.isLoading()) return;
      return;
      /* return (
        <CircularProgress
          style={{float: 'right', marginTop: -55, marginRight: -6}}
          size={0.4} />
      ) */
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_AutoComplete.default, _extends({
        ref: "input",
        fullWidth: true,
        searchText: "",
        dataSource: this.state.dataSource,
        filter: _AutoComplete.default.noFilter,
        onUpdateInput: this.onUpdateText.bind(this),
        label: this.props.useHint ? null : this.props.label,
        placeholder: this.props.useHint ? this.props.label : null,
        onNewRequest: this.onItemSelected.bind(this),
        errorText: this.props.errorMessage,
        onFocus: this.onFocus.bind(this),
        onBlur: this.onBlur.bind(this),
        open: this.state.open,
        openOnFocus: true,
        disabled: this.props.disabled,
        menuCloseDelay: 100
      }, this.props.passProps)), this.renderLoading(), _react.default.createElement("div", null, this.renderItems()));
    }
  }]);

  return SelectWithMethodComponent;
}(_react.default.Component);

exports.default = SelectWithMethodComponent;
SelectWithMethodComponent.propTypes = propTypes;
SelectWithMethodComponent.defaultProps = defaultProps;