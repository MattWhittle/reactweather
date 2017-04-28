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
            <p>This is a weather application built with React.</p> 
            <h4>To use:</h4> 
            <p>Simply type any city name into the search(leave off the state) and hit the get weather button! You will receive the current location in the city you have searched.</p>
            <h4>Technologies used:</h4>
            <ol>
                <li><a src="https://facebook.github.io/react/">ReactJS</a></li>
                <li><a src="https://openweathermap.org/">OpenWeatherMap</a></li>
                <li><a src="https://webpack.github.io/">Webpack</a></li>
            </ol>
        </div>
    );
};

module.exports = About;