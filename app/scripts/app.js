'use strict';

/*jshint sub:true*/

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
    'ngCookies',
  //  'ngResource',
    'ngRoute',
  //  'ngSanitize',
  //  'ngTouch',
    'ngTable'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/#', {
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
        templateUrl: '../views/broadcasts/broadcasts.html',
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
      .when('/users/show/:userId', {
        templateUrl: '../views/users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/users/edit', {
        templateUrl: '../views/users/edit.html',
        controller: 'UsersCtrl'
      })
      .when('/users/new', {
        templateUrl: '../views/users/new.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($rootScope) {
    $rootScope.loggedIn = false;
    $rootScope.currentUser = 'Guest';


    $rootScope.loggedInToBeTruthy = function (){
        $rootScope.loggedIn = true;
    };

    $rootScope.loggedInToBeFalsey = function (){
      $rootScope.loggedIn = false;
    };

    $rootScope.resetCurrentUser = function (){
      $rootScope.currentUser = 'Guest';
    };

    $rootScope.setCurrentUser = function (user) {
      $rootScope.currentUser = user;
    };

  //  $http.defaults.headers.common['Authorization'] = 'Basic ' + 'admin:password';

  });
