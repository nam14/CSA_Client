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
    'ngRoute'
  //  'ngSanitize',
  //  'ngTouch',
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/#', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: '../views/users/users.html',
        controller: 'UsersCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/users/new', {
        templateUrl: '../views/users/new.html',
        controller: 'NewUserCtrl'
      })
      .when('/users/:userId', {
        templateUrl: '../views/users/show.html',
        controller: 'ShowUserCtrl'
      })
      .when('/users/:userId/edit', {
        templateUrl: '../views/users/edit.html',
        controller: 'EditUserCtrl'
      })
      .otherwise({
        redirectTo: '/#'
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

    $rootScope.setCurrentUsername = function (username) {
      $rootScope.currentUsername = username;
    };

  //  $http.defaults.headers.common['Authorization'] = 'Basic ' + 'admin:password';

  });
