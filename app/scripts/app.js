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
      .when('/users/:userId', {
        templateUrl: '../views/users/show.html',
        controller: 'ShowUserCtrl'
      })
      .when('/users/:userId/edit', {
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
    $rootScope.currentUsername = 'Guest';


    $rootScope.loggedInToBeTruthy = function (){
        $rootScope.loggedIn = true;
    };

    $rootScope.loggedInToBeFalsey = function (){
      $rootScope.loggedIn = false;
    };

    $rootScope.resetCurrentUsername = function (){
      $rootScope.currentUsername = 'Guest';
    };

    $rootScope.setCurrentUsername = function (user) {
      $rootScope.currentUsername = user;
    };

  //  $http.defaults.headers.common['Authorization'] = 'Basic ' + 'admin:password';

  });
