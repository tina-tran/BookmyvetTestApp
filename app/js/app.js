'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map-view', {templateUrl: 'partials/partial1.html', controller: 'MapsController'});
  $routeProvider.otherwise({redirectTo: '/map-view'});
}]);
