$(document).ready(function () {
    var fahrenheit, celcius;
    let apiKey = "bc535a3982bd83c620ac0add30362f06";
    let WeatherUrl = "http://api.openweathermap.org/data/2.5/weather"


    // call the getData function to show local weather
    getData();


    /**
     * function to get local weather without input
     * just getting the user location
     */
    function getData() {
        $.ajax({
            type: "GET",
            //get your current position
            url: "https://geoip-db.com/json/",
           // data: "data",
            dataType: "json",
            success: function (data) {
                var lat = data.latitude;
                var long = data.longitude;

                $(".city").html(data.city);
                $(".country").html(data.country_name);
                WeatherUrl += "?lat="+lat+"&lon="+long+"&APPID="+apiKey+"&units=metric";
               

                //we call the weather API with no PARAMS
                getWeatherData();
                
            },
            //if there's an error
            error: function(err) {
                alert('Oops something went wrong, Please try again.');
                console.log(err);
              }// end of error function
        });
        
    }//end of function getData

    /**
     * This function makes ajax call to weather API 
     * and gives temperature and weather description in the json response.
     */
    function getWeatherData() {
        //alert(WeatherUrl);
        $.ajax({
            type: "GET",
            url: WeatherUrl,
            
            data: "data",
            dataType: "json",
            success: function (data) {
                
                var temperature = data.main.temp;
                celsius = Math.round(temperature);
                //now we convert celcius to fahrenheit
                fahrenheit = Math.round(temperature * 9 / 5 + 32);
                console.log(fahrenheit);
                //we get the icon for the current weather
                var icon = data.weather[0].icon;
                //the description of the weather
                var weatherDetail = data.weather[0].main + "," + data.weather[0].description;
                //update the description on the html file
                $(".weatherDetail").html(weatherDetail);
                //update the icon attribute based on the weather
                $(".iconpic>img").attr("src","http://openweathermap.org/img/w/" + icon + ".png");
                //Update the temperature
                $(".temp").html(Math.round(temperature) + "&#8451;");
                
                
            },
            error: function(err) {
                alert('Oops something went wrong, Please try again.');
                console.log(err);
              }//end error function
        });
        
    }//end of function getWeatherData
    $('.toggle .btn').click(function(){
        // if the div has attribute id as c then convert temperature to fahrenheit
        if($('.toggle').attr('id')=='c'){
          $('.temp').html(fahrenheit+"&#8457;");
          $('.toggle').attr('id','f');
        }
        else if($('.toggle').attr('id')=='f'){
          //else if div has attribute id as f than convert temperature to celsius
          $('.temp').html(celsius+"&#8451;");
          $('.toggle').attr('id','c');
        }
   
   
    /*
    Toggle button to change from C to F
    Add a click event listener to the button
     

     $(".toggle .btn").click(function () { 
         // if the div is in Celsius we change it to fahrenheit
         if ($(".toggle").attr("id") == "c") {
             $(".temp").html(fahrenheit + "&#8457;");
             $(".toggle").attr("id","f");
         }
         else if($(".toggle").attr("id")=="f"){
             //else if div has a f attribute then we change it to c
             $(".temp").html(celcius + "&#8451;");
             $(".toggle").attr("id","c");

         }
         */
      });

});