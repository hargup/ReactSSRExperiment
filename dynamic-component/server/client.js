var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
// var loadScript = require('./loadscript.js')

const TestComponentNonDyanmic = createReactClass({
    render: function() {
        return <p>Non Dynamic Component</p>
    }
})

// TODO: The loadScript function is not necessary
const loadScript = (scriptPath, callback) => {  
    // const existingScript = document.getElementById('googleMaps');  if (!existingScript) {}
    const script = document.createElement('script');
    script.src = `http://localhost:3000/${scriptPath}`;    
    // script.id = 'googleMaps';
    document.body.appendChild(script);    
    script.onload = () => { 
      if (callback) callback();
    };
};

const Component = createReactClass({
    _handleClick: function() {
        // Loading the script is not necessary to test ReactDOM.render

        loadScript('test_script.js', 
            ()=> {
                ReactDOM.render(<TestComponent />, document.getElementById('dynamic_component'))
                alert("Script loading is working")})
        ;
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
                        <p>New Component will appear below this</p>
                        <div id="dynamic_component"></div>
                    </div>
		    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
});

ReactDOM.render(
    React.createElement(Component), document
);

// loadScript('http://localhost:3000/test_script.js')