var myArray =  ['Here we go, here we fucking go!','I can see the tears of joy now','If it doesnt challenge you, it wont change you']
var myArray1 =  ['A night on the turbo for you, pal','Looks like you gotta speak to your partner','Even if you are on the right track, you will get run over if you just sit there.']
var happyTags =  ['happy', 'joy' ,'cycling']
var sadTags = ['sad', 'windy', 'angry']

angular.module('RouteControllers', [])
// example of route controllers - enter the name, what it does and link it to app
//.controller('NewsletterSignupController', function($scope, $http) {
.controller('HomePage', function($scope, $http, $filter) {

    $http.get("https://api.giphy.com/v1/gifs/random?api_key=ZFjWi8tWR23Nbgo1bWC3oGvK99PHp94G&tag=+" + sadTags[Math.floor(Math.random() * myArray.length)] + "&rating=G")
    .then(function(response){
      windy = response.data.data.image_original_url;
    })

    $http.get("https://api.giphy.com/v1/gifs/random?api_key=ZFjWi8tWR23Nbgo1bWC3oGvK99PHp94G&tag=" + happyTags[Math.floor(Math.random() * myArray.length)] + "&rating=G").then(function(response){
      happy = response.data.data.image_original_url
    })

    $scope.number = 10;
    $scope.my_wind_choice = function() {
        $scope.number
        $scope.location
    $http.get("https://api.openweathermap.org/data/2.5/weather?q=" + $scope.location + "&APPID=99d6f9fb8d3db5c1d0e9e8b93b0ca269").then(function(response) {
              myWind = Math.round(response.data.wind.speed * 2.23694);
              myDirection = response.data.wind.deg;
              $scope.myWind = myWind;
              $scope.myDirection = myDirection;
              if (myWind <= $scope.number) {
                  document.getElementById("message").innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
                  $("#gif").attr("src", happy);
              } else {
                  document.getElementById("message").innerHTML = myArray1[Math.floor(Math.random() * myArray.length)];
                  $("#gif").attr("src", windy);
              }
              if (myDirection > 247 && myDirection < 292) {
                  document.getElementById("wind").innerHTML = "West";
              } else if (myDirection > 293 && myDirection < 337) {
                  document.getElementById("wind").innerHTML = "North WestW";
              } else if (myDirection > 338 && myDirection < 22) {
                  document.getElementById("wind").innerHTML = "North";
              } else if (myDirection > 23 && myDirection < 67) {
                  document.getElementById("wind").innerHTML = "North East";
              } else if (myDirection > 68 && myDirection < 112) {
                  document.getElementById("wind").innerHTML = "East";
              } else if (myDirection > 113 && myDirection < 157) {
                  document.getElementById("wind").innerHTML = "South East";
              } else if (myDirection > 158 && myDirection < 202) {
                  document.getElementById("wind").innerHTML = "South";
              } else {
                  document.getElementById("wind").innerHTML = "South West";
              }
        });
      };
    $('.send').click(function() {
        $('.changes').show()
    });
    $('.reset').click(function() {
        $('.changes').hide()
    });
});
