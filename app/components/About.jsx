var React = require('react');

// var About = React.createClass({
//     render: function(){
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built with React. To use: simply type any city name into the search(leave off the state) and hit the get weather button!</p>
        </div>
    );
};

module.exports = About;