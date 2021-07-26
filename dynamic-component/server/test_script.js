"use strict";

var React = require('react');

var createReactClass = require('create-react-class');

const TestComponent = createReactClass({
  displayName: "TestComponent",
  render: function render() {
    return (<div>
      Hello Dynamic Component
    </div>);
  }
});

window.TestComponent = TestComponent;