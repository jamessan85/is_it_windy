angular.module('isitWindy', ['ngRoute', 'RouteControllers']);

angular.module('isitWindy').config(function($routeProvider) {


    // **** example of app and serving controller ***
    // .when('/music', {
    // templateUrl: 'templates/music.html',
    // controller: 'MusicSearch'
	// })

    $routeProvider.when('/', {
		templateUrl: 'templates/home.html',
    controller: 'HomePage'
	})

});
