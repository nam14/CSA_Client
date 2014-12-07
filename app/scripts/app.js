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
    'ngCookies',
    'ngRoute',
    'cgBusy'
  ])
  .config(function ($routeProvider) {
    //routing of the application

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
      .when('/broadcasts', {
        templateUrl: 'views/broadcasts/broadcasts.html',
        controller: 'BroadcastsCtrl'
      })
      .when('/broadcasts/new', {
        templateUrl: 'views/broadcasts/new.html',
        controller: 'NewBroadcastCtrl'
      }).
      when('/broadcasts/:broadcastId', {
        templateUrl: 'views/broadcasts/show.html',
        controller: 'ShowBroadcastCtrl'
      })
      .otherwise({
        redirectTo: '/#'
      });
  }).run(function ($rootScope) {
    $rootScope.loggedIn = false;
    $rootScope.currentUsername = 'Guest';

    //loggedin boolean controls which menu tabs are visible
    $rootScope.loggedInToBeTruthy = function (){
        $rootScope.loggedIn = true;
    };

    $rootScope.loggedInToBeFalsey = function (){
      $rootScope.loggedIn = false;
    };

    $rootScope.resetCurrentUsername = function (){
      $rootScope.currentUsername = 'Guest';
    };
    //currentUsername to be displayed on homepage
    $rootScope.setCurrentUsername = function (username) {
      $rootScope.currentUsername = username;
    };

  });
