# Show the Local Weather

The weather app will be a single page app with the following features:

* I can see the weather in my current location.
* I can see a different icon (e.g. snowy mountain, hot desert, cloudy, rainy) depending on the weather.
* I can push a button to toggle between Fahrenheit and Celsius.

We will also use the Geo IP database(no API required):
* [Geo Ip](https://geoip-db.com/) 

We could also use the geolocation.getCurrentPosition() from JavaScript:
```JavaScript
var getWeather = function() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        showWeather(lat, long)
      })
    }
       else {
            window.alert("Could not get location");
      }
  }

```


You will need to get your API key from:
* [Open Weather](https://openweathermap.org/)
* ![OpenWeather](https://upload.wikimedia.org/wikipedia/commons/1/15/OpenWeatherMap_logo.png)

# Prerequisites
* Basics of Bootstrap.
* Basics of Jquery ajax.
