'use strict';

/**
 * @ngdoc function
 * @name csaClientAngularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the csaClientAngularjsApp
 */
angular.module('csaClientAngularjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
