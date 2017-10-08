// I need Zip Code Input Submit ID
//#submit and #zip
var weather = 0;

 $("#submit").on("click", function(event) {
        
        event.preventDefault();
        
        var zip = $("#zip").val().trim();
        console.log(zip)
        
        var APIKey = "ab54a62fdc9bfbe9d64faaccba9d0aff";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "zip=" + zip + ",us&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {

       console.log(queryURL);

       console.log(response);
    function weatherChecker() {
      let temp = response.main.temp;
      if (temp > 75 && temp < 120) { 
      $("body").css("background-image", "url('assets/images/sunny.jpg')");  
        weather = "hot";
        console.log(weather);
        chooseSong();
    }
      else if (temp > 30 && temp < 75) { 
        $("body").css("background-image", "url('assets/images/cold.jpg')");  
        weather = "cold";
        console.log(weather);
        chooseSong();
      } 
    };

     function appendToWeatherBox() {
      var hotDiv = $("<div>").addClass("hot");
      var sunSpan = $("<span>").addClass("sun");
      var sunxSpan = $("<span>").addClass("sunx");
      var weatherAreaDiv = $("<div>").addClass("weather-area");
      var appendAll = hotDiv.append(sunSpan, sunxSpan, weatherAreaDiv);
      $(".weather-box").append(appendAll);

     }
    
       
       function createWeatherArea() {

        $(".weather-area").empty();
        var weatherDetails = ["city", "icon", "temp"];
        for (var i = 0; i < weatherDetails.length; i++) {
          var div = $("<div>");
          div.addClass("weather-details");
          div.attr('id', weatherDetails[i]);
          $(".weather-area").append(div);
          
        }

}
 
        function showWeather(){
        var cityName = response.name;
        var iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        var weatherIcon = $("<img>").attr("src", iconUrl).attr("width", "auto").attr("height", "150px");
        var tempValue = response.main.temp +"&#730F"
        var temp = $("<p>").html("Temperature: " + tempValue);
        $("#city").append(cityName);
      $("#icon").append(weatherIcon);
      $("#temp").append(temp);
}
appendToWeatherBox();
createWeatherArea();
showWeather();
weatherChecker();

        
      });
       });