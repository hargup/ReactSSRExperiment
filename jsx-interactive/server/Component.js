var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    _handleClick: function() {
        alert("Javascript is working");
    },
    render: function() {
        return (
            <html>
                <head>
                    <title>Universal App with React</title>
                    <link rel='stylesheet' href='/index.css' />
                </head>
                <body>
                    <div>
                        <h1>Hello World!</h1>
                        <p>Isn't server-side rendering remarkable?</p>
                        <button onClick={this._handleClick}>Click Me</button>
                    </div>
		    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
});
