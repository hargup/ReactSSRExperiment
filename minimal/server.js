var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var createReactClass = require('create-react-class');

Component = createReactClass({
  render: function(){
	return React.createElement('div', null, 'Hello React SSR');
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
