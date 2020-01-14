var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = "C";
var currentTempInCelsius;

$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Not supported");
  }

  $(".weatherButton").click(function() {
    alert("button was clicked");
  });
});

function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
}
