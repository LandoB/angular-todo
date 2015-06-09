'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/authenticate', {
      templateUrl: 'partials/authenticate',
      controller: 'AuthCtrl'
    }).
    when('/taskList', {
      templateUrl: 'partials/taskList',
      controller: 'ListCtrl'
    }).
    when('/addTask', {
      templateUrl: 'partials/addTask',
      controller: 'AddCtrl'
    }).
    when('/editTask', {
      templateUrl: 'partials/editTask',
      controller: 'EditCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
