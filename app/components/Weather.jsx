var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;

        this.setState({isLoading:true});

        openWeatherMap.getTemp(location).then(function(weatherObject){
            that.setState(weatherObject);
            that.setState({isLoading:false});
        }, function(errorMessage) {
            that.setState({isLoading:false});
            alert(errorMessage);
        });
    },
    render: function() {
        var {isLoading, temp, location, conditions, iconId} = this.state;

        function renderMessage (){
            if(isLoading){
                return <h3>Fetching weather... </h3>
            }else if(temp && location && conditions && iconId){
                return <WeatherMessage temp={temp} location={location} conditions={conditions} iconId={iconId} />;
            }
        }

        return (
            <div>
                <h1>Weather Component</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;