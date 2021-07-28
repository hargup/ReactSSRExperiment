var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var createReactClass = require('create-react-class');

var Component = createReactClass({
  _handleClick: function() {
        alert("Javascript is working");
    },
  render: function(){
	return (<div>
		<h1>Hello World!</h1>
                <p>Isn't server-side rendering remarkable?</p>
                <button onClick={this._handleClick}>Click Me</button>
            </div>);
	}
});


app.get('/', function(request, response) {
    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );
    response.send(html);
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
