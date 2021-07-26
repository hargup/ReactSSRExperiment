"use strict";

var React = require('react');

var createReactClass = require('create-react-class');

module.exports = createReactClass({
  displayName: "exports",
  _handleClick: function _handleClick() {
    alert("Javascript is working");
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("title", null, this.props.title), /*#__PURE__*/React.createElement("link", {
      rel: "stylesheet",
      href: "/index.css"
    })), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("p", null, "Isn't server-side rendering remarkable?"), /*#__PURE__*/React.createElement("button", {
      onClick: this._handleClick
    }, "Click Me")), /*#__PURE__*/React.createElement("script", {
      src: "/bundle.js"
    })));
  }
});