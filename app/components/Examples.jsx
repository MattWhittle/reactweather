var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li><Link to='/?location=Philadelphia'>Philadelphia, PA</Link></li>
                <li><Link to='/?location=Charlotte'>Charlotte, NC</Link></li>
                <li><Link to='/?location=Memphis'>Memphis, TN</Link></li>
                <li><Link to='/?location=Phoenix'>Phoenix, AZ</Link></li>
                <li><Link to='/?location=Steubenville'>Steubenville, OH</Link></li>
            </ol>
        </div>
    );
};

module.exports = Examples;

// var Examples = React.createClass({
//     render: function(){
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });