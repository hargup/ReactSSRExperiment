var React = require('react');
var createReactClass = require('create-react-class');

var TestComponent = createReactClass({

    render: function() {
        return (
            <div>
                Hello XYZ
            </div>

        );
    }
});


function hello(x) {
    return 'Hello ' + x;
}