"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Panel = _interopRequireDefault(require("./Panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  text-transform: uppercase;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function noop() {}

var TimeDisplay = _styledComponents["default"].div(_templateObject());

var TimeText = _styledComponents["default"].div(_templateObject2());

var AMPMText = _styledComponents["default"].div(_templateObject3());

var Picker =
/*#__PURE__*/
function (_Component) {
  _inherits(Picker, _Component);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));

    _this.onPanelChange = function (value) {
      _this.setValue(value);
    };

    _this.onAmPmChange = function (ampm) {
      var onAmPmChange = _this.props.onAmPmChange;
      onAmPmChange(ampm);
    };

    _this.onVisibleChange = function (open) {
      _this.setOpen(open);
    };

    _this.closePanel = function () {
      _this.setOpen(false);

      _this.focus();
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode === 40) {
        _this.setOpen(true);
      }
    };

    _this.saveInputRef = _react["default"].createRef();
    _this.savePanelRef = _react["default"].createRef();

    var defaultOpen = props.defaultOpen,
        defaultValue = props.defaultValue,
        _props$open = props.open,
        _open = _props$open === void 0 ? defaultOpen : _props$open,
        _props$value = props.value,
        _value = _props$value === void 0 ? defaultValue : _props$value;

    _this.state = {
      open: _open,
      value: _value
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          open = nextProps.open;

      if ('value' in nextProps) {
        this.setState({
          value: value
        });
      }

      if (open !== undefined) {
        this.setState({
          open: open
        });
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var onChange = this.props.onChange;

      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      onChange(value);
    }
  }, {
    key: "getFormat",
    value: function getFormat() {
      var includeAMPM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$props = this.props,
          format = _this$props.format,
          showHour = _this$props.showHour,
          showMinute = _this$props.showMinute,
          showSecond = _this$props.showSecond,
          use12Hours = _this$props.use12Hours;

      if (format) {
        return format;
      }

      if (use12Hours) {
        var fmtString = [showHour ? 'h' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
          return !!item;
        }).join(':');
        return includeAMPM ? fmtString.concat(' a') : fmtString;
      }

      return [showHour ? 'HH' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
        return !!item;
      }).join(':');
    }
  }, {
    key: "getPanelElement",
    value: function getPanelElement() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          placeholder = _this$props2.placeholder,
          disabledHours = _this$props2.disabledHours,
          disabledMinutes = _this$props2.disabledMinutes,
          disabledSeconds = _this$props2.disabledSeconds,
          hideDisabledOptions = _this$props2.hideDisabledOptions,
          inputReadOnly = _this$props2.inputReadOnly,
          showHour = _this$props2.showHour,
          showMinute = _this$props2.showMinute,
          showSecond = _this$props2.showSecond,
          defaultOpenValue = _this$props2.defaultOpenValue,
          addon = _this$props2.addon,
          use12Hours = _this$props2.use12Hours,
          onKeyDown = _this$props2.onKeyDown,
          hourStep = _this$props2.hourStep,
          minuteStep = _this$props2.minuteStep,
          secondStep = _this$props2.secondStep;
      var value = this.state.value;
      return _react["default"].createElement(_Panel["default"], {
        prefixCls: "".concat(prefixCls, "-panel"),
        ref: this.savePanelRef,
        value: value,
        inputReadOnly: inputReadOnly,
        onChange: this.onPanelChange,
        onAmPmChange: this.onAmPmChange,
        defaultOpenValue: defaultOpenValue,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        closePanel: this.closePanel,
        format: this.getFormat(),
        placeholder: placeholder,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        hideDisabledOptions: hideDisabledOptions,
        use12Hours: use12Hours,
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondStep: secondStep,
        addon: addon,
        onKeyDown: onKeyDown
      });
    }
  }, {
    key: "setOpen",
    value: function setOpen(open) {
      var _this$props3 = this.props,
          onOpen = _this$props3.onOpen,
          onClose = _this$props3.onClose;
      var currentOpen = this.state.open;

      if (currentOpen !== open) {
        if (!('open' in this.props)) {
          this.setState({
            open: open
          });
        }

        if (open) {
          onOpen({
            open: open
          });
        } else {
          onClose({
            open: open
          });
        }
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      var el = this.saveInputRef.current;
      if (el) el.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      var el = this.saveInputRef.current;
      if (el) el.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          placeholder = _this$props4.placeholder,
          id = _this$props4.id,
          disabled = _this$props4.disabled,
          className = _this$props4.className,
          name = _this$props4.name,
          inputReadOnly = _this$props4.inputReadOnly,
          ariaLabelFunc = _this$props4.ariaLabelFunc,
          onFocus = _this$props4.onFocus,
          onBlur = _this$props4.onBlur,
          onKeyDown = _this$props4.onKeyDown,
          onKeyPress = _this$props4.onKeyPress,
          onKeyUp = _this$props4.onKeyUp;
      var _this$state = this.state,
          open = _this$state.open,
          value = _this$state.value;
      return _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-wrapper ").concat(className),
        id: id,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onKeyUp: onKeyUp
      }, open ? this.getPanelElement() : _react["default"].createElement(TimeDisplay, {
        tabIndex: 0,
        className: "".concat(prefixCls, "-input"),
        onClick: function onClick() {
          return _this2.setOpen(true);
        },
        onKeyDown: function onKeyDown(e) {
          if (e.keyCode === 13 || e.keyCode === 32) {
            // enter or space
            _this2.setOpen(true);

            e.preventDefault();
            e.stopPropagation();
          }
        },
        disabled: disabled,
        ref: this.saveInputRef,
        role: "button",
        "aria-label": ariaLabelFunc(value.format(this.getFormat()))
      }, _react["default"].createElement(TimeText, {
        className: "".concat(prefixCls, "-input-time")
      }, value ? value.format(this.getFormat(false)) : ''), _react["default"].createElement(AMPMText, {
        className: "".concat(prefixCls, "-input-ampm")
      }, "\xA0", value ? value.format('a') : '')));
    }
  }]);

  return Picker;
}(_react.Component);

exports["default"] = Picker;
Picker.propTypes = {
  prefixCls: _propTypes["default"].string,
  value: _propTypes["default"].object,
  defaultOpenValue: _propTypes["default"].object,
  inputReadOnly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  allowEmpty: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].object,
  open: _propTypes["default"].bool,
  defaultOpen: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  format: _propTypes["default"].string,
  showHour: _propTypes["default"].bool,
  showMinute: _propTypes["default"].bool,
  showSecond: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  popupClassName: _propTypes["default"].string,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  disabledSeconds: _propTypes["default"].func,
  hideDisabledOptions: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onAmPmChange: _propTypes["default"].func,
  onOpen: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  addon: _propTypes["default"].func,
  name: _propTypes["default"].string,
  use12Hours: _propTypes["default"].bool,
  hourStep: _propTypes["default"].number,
  minuteStep: _propTypes["default"].number,
  secondStep: _propTypes["default"].number,
  id: _propTypes["default"].string,
  ariaLabelFunc: _propTypes["default"].func
};
Picker.defaultProps = {
  prefixCls: 'rc-time-picker',
  defaultOpen: false,
  inputReadOnly: false,
  className: '',
  popupClassName: '',
  id: '',
  defaultOpenValue: (0, _moment["default"])(),
  allowEmpty: true,
  showHour: true,
  showMinute: true,
  showSecond: true,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  hideDisabledOptions: false,
  onChange: noop,
  onAmPmChange: noop,
  onOpen: noop,
  onClose: noop,
  onFocus: noop,
  onBlur: noop,
  onKeyDown: noop,
  onKeyUp: noop,
  onKeyPress: noop,
  addon: noop,
  use12Hours: false,
  ariaLabelFunc: noop
};