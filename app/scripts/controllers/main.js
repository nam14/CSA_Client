'use strict';

/**
 * @ngdoc function
 * @name csaClientAngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the csaClientAngularjsApp
 */
angular.module('csaClientAngularjsApp')
  .controller('MainCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.loggedIn = false;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  }]);
