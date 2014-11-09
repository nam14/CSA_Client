/**
 * Created by nataliamiller on 05/11/2014.
 */


'use strict';

angular.module('csaClientAngularjsApp')
  .controller('LoginCtrl', ['$scope', function ($scope) {

    $scope.username;

/*    $http.get('http://localhost:3000/session/new').
      success(function(data, status, headers, config) {
      }).
      error(function(data, status, headers, config) {
      }); */
    $scope.login = function() {
      $http.get('/someUrl').
        success(function(data, status, headers, config) {

        }).
        error(function(data, status, headers, config) {

        });
    };
    $scope.register = function() {
      if($scope.password1.val() === $scope.password2.val()) {

      } else {
          $('#passwordError').hide();
      }
    };
  }]);
