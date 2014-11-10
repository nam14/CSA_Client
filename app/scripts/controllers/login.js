/**
 * Created by nataliamiller on 05/11/2014.
 */


'use strict';

angular.module('csaClientAngularjsApp')
  .controller('LoginCtrl', ['$scope', function ($scope) {

    $scope.loginUsername = '';
    $scope.loginPassword = '';

/*    $http.get('http://localhost:3000/session/new').
      success(function(data, status, headers, config) {
      }).
      error(function(data, status, headers, config) {
      }); */
    $scope.login = function() {
      $http.post('http://localhost:3000/session', {login:$scope.loginUsername, password:$scope.loginPassword}).
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
