var React = require('react');

/*var WeatherMessage = React.createClass({
    render: function(){
        var {temp, location, conditions, iconId} = this.props;
        console.log(iconId);
        var weatherIcon = "http://openweathermap.org/img/w/" + iconId + ".png";
        return (
            <div>
                <h3>It is {temp} with {conditions} in {location}</h3> <img src={weatherIcon} />
            </div>
        );
    }
});*/

var WeatherMessage = (props) => {
    var {temp, location, conditions, iconId} = props;
        console.log(iconId);
    var weatherIcon = "http://openweathermap.org/img/w/" + iconId + ".png";
    return (
        <div>
            <h3 className="text-center">It is {temp} with {conditions} in {location}</h3> <img className="float-center" src={weatherIcon} />
        </div>
    );
};

module.exports = WeatherMessage;