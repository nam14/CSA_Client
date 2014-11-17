'use strict';

/**
 * @ngdoc function
 * @name csaClientAngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the csaClientAngularjsApp
 */
angular.module('csaClientAngularjsApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
