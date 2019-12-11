"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _raf = _interopRequireDefault(require("raf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n\n  /* Pos rel needed to make offsetTop work\n  used in scrolling to selected option */\n  position: relative;\n  overflow-y: auto;\n  max-height: 12em;\n\n  ul {\n    list-style: none;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n  }\n\n  li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    /* padding: 0 0 0 16px; */\n    /* width: 100%; */\n    height: 24px;\n    line-height: 24px;\n    text-align: left;\n    cursor: pointer;\n    user-select: none;\n\n    &:hover {\n      background: #edfaff;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var scrollTo = function scrollTo(element, to, duration) {
  // jump to target if duration zero
  if (duration <= 0) {
    (0, _raf["default"])(function () {
      element.scrollTop = to;
    });
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  (0, _raf["default"])(function () {
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Column = _styledComponents["default"].div(_templateObject());

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _this.onSelect = function (value) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          type = _this$props.type;
      onSelect(type, value);
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === 40) {
        // down arrow
        _this.changeFocusBy(1);

        e.preventDefault();
        e.stopPropagation();
      } else if (e.keyCode === 38) {
        // up arrow
        _this.changeFocusBy(-1);

        e.preventDefault();
        e.stopPropagation();
      } // pass keydown to parent


      _this.props.onKeyDown(e);
    };

    _this.selectRef = _react["default"].createRef();
    _this.listRef = _react["default"].createRef();
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // jump to selected option
      this.scrollToSelected(0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          selectedIndex = _this$props2.selectedIndex,
          focused = _this$props2.focused; // smooth scroll to selected option

      if (prevProps.selectedIndex !== selectedIndex) {
        this.scrollToSelected(120);
      }

      if (prevProps.focused !== focused && focused) {
        // focus on selectedIndex
        this.changeFocusBy(0);
      }
    }
  }, {
    key: "getOptionLabel",
    value: function getOptionLabel(value) {
      // 01 -> 1
      // 30 -> 30
      var number = parseInt(value, 10);

      if (isNaN(number)) {
        // am -> AM
        return value.toUpperCase();
      }

      return number;
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this2 = this;

      var _this$props3 = this.props,
          options = _this$props3.options,
          selectedIndex = _this$props3.selectedIndex,
          prefixCls = _this$props3.prefixCls;
      return options.map(function (item, index) {
        var _classNames;

        var selected = selectedIndex === index;
        var cls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-select-option-selected"), selected), _defineProperty(_classNames, "".concat(prefixCls, "-select-option-disabled"), item.disabled), _classNames));
        var onClick = item.disabled ? undefined : function () {
          _this2.onSelect(item.value);
        };

        var onKeyDown = function onKeyDown(e) {
          if (e.keyCode === 13 || e.keyCode === 32) {
            // enter or space
            onClick();
            e.preventDefault();
            e.stopPropagation();
          }
        };

        return _react["default"].createElement("li", {
          role: "radio",
          onClick: onClick,
          className: cls,
          key: index,
          disabled: item.disabled,
          tabIndex: 0,
          onKeyDown: onKeyDown,
          "aria-checked": selected,
          "aria-label": _this2.getOptionLabel(item.value)
        }, item.value);
      });
    }
  }, {
    key: "changeFocusBy",
    value: function changeFocusBy(offset) {
      var _this$props4 = this.props,
          options = _this$props4.options,
          selectedIndex = _this$props4.selectedIndex; // get new element index

      var index = selectedIndex + offset;

      if (index < 0) {
        index = options.length - 1;
      } else if (index >= options.length) {
        index = 0;
      } // get new value


      var selectedOption = options[index];
      this.onSelect(selectedOption.value); // get new ref

      var list = this.listRef.current;

      if (!list) {
        return;
      }

      var optionRef = list.children[index];
      optionRef.focus({
        preventScroll: true
      });
    }
  }, {
    key: "scrollToSelected",
    value: function scrollToSelected(duration) {
      // move to selected item
      var selectedIndex = this.props.selectedIndex;
      var list = this.listRef.current;

      if (!list) {
        return;
      }

      var index = selectedIndex;

      if (index < 0) {
        index = 0;
      }

      var topOption = list.children[index];
      var to = topOption.offsetTop;
      scrollTo(this.selectRef.current, to, duration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          options = _this$props5.options,
          label = _this$props5.label;

      if (options.length === 0) {
        return null;
      }

      return _react["default"].createElement(Column, {
        className: "".concat(prefixCls, "-select"),
        onKeyDown: this.handleKeyDown,
        ref: this.selectRef
      }, _react["default"].createElement("ul", {
        role: "radiogroup",
        "aria-label": "Select ".concat(label),
        ref: this.listRef
      }, this.getOptions()));
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  prefixCls: _propTypes["default"].string,
  options: _propTypes["default"].array,
  selectedIndex: _propTypes["default"].number,
  type: _propTypes["default"].string,
  label: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  focused: _propTypes["default"].bool
};
var _default = Select;
exports["default"] = _default;