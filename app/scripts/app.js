'use strict';

/**
 * @ngdoc overview
 * @name csaClientAngularjsApp
 * @description
 * # csaClientAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('csaClientAngularjsApp', [
   // 'ngAnimate',
   // 'ngCookies',
  //  'ngResource',
    'ngRoute',
  //  'ngSanitize',
  //  'ngTouch',
    'ngTable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/jobs', {
        templateUrl: 'views/jobs.html',
        controller: 'JobsCtrl'
      })
      .when('/broadcasts', {
        templateUrl: 'views/broadcasts.html',
        controller: 'BroadcastsCtrl'
      })
      .when('/users', {
        templateUrl: '../views/users/users.html',
        controller: 'UsersCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/show/ :userId', {
        templateUrl: '../views/users/show.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
