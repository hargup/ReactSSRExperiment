var React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./Component.js');

var props = window.PROPS;
ReactDOM.hydrate(
    React.createElement(Component, props), document
);
