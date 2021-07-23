var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  render: function(){
	return React.createElement('div', null, 'Hello React SSR');
	}
});

