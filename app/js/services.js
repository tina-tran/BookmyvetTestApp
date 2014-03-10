'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').factory('themoviedbService', ['$resource', function($resource) {   
	return  $resource('https://api.themoviedb.org/3/discover/movie?api_key=:api_key', 
		{api_key: "112418abeebeae8f32fae01b433089a6"},
		{query:  {method:'GET', isArray: true, transformResponse: function(data) { return JSON.parse(data).results; }}});
	}]);
