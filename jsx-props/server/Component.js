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
                    <title>{this.props.title}</title>
                    <link rel='stylesheet' href='/index.css' />
                </head>
                <body>
                    <div>
                        <h1>{this.props.title}</h1>
                        <p>Isn't server-side rendering remarkable?</p>
                        <button onClick={this._handleClick}>Click Me</button>
                    </div>
		    <script dangerouslySetInnerHTML={{__html: 'window.PROPS=' + JSON.stringify(this.props)}} />
		    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
});
