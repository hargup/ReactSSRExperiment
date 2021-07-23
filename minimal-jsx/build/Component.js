"use strict";

var React = require('react');

var createReactClass = require('create-react-class');

module.exports = createReactClass({
  displayName: "exports",
  render: function render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello World!"), /*#__PURE__*/React.createElement("p", null, "Isn't server-side rendering remarkable?"), /*#__PURE__*/React.createElement("button", {
      onClick: this._handleClick
    }, "Click Me"));
  }
});