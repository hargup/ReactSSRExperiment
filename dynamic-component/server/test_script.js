"use strict";

var React = require('react');

var createReactClass = require('create-react-class');

const TestComponent = createReactClass({
  displayName: "TestComponent",
  render: function render() {
    return /*#__PURE__*/React.createElement("div", null, "Hello XYZ");
  }
});

function hello(x) {
  return 'Hello ' + x;
}

window.TestComponent = TestComponent;
var _default = TestComponent;

exports.default = _default;