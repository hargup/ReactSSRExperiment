var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  render: function(){
	return (<div>
		<h1>Hello World!</h1>
                <p>Isn't server-side rendering remarkable?</p>
                <button onClick={this._handleClick}>Click Me</button>
            </div>);
	}
});

