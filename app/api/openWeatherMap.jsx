var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=70e7dcd40ec5a6bbabf3f10d325238c9&units=imperial';

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
console.log(requestUrl);
        return axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                if (res.data.name.toLowerCase() == location.toLowerCase()) {
                    return {
                        location: location,
                        temp: res.data.main.temp,
                        conditions: res.data.weather[0].description,
                        iconId: res.data.weather[0].icon
                    }
                } else {
                    throw new Error('City not found');
                }
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
};