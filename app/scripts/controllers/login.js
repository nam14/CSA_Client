/**
 * Created by nataliamiller on 05/11/2014.
 */


'use strict';

angular.module('csaClientAngularjsApp')
  .controller('LoginCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {

    $scope.loginUsername = '';
    $scope.loginPassword = '';

    $scope.login = function() {
      $http.post('http://localhost:3000/session', {login:$scope.loginUsername, password:$scope.loginPassword}).
        success(function(data) {
          console.log('Session created');
          $rootScope.loggedIn = true;
          $rootScope.currentUser = data.firstName;


        }).
        error(function() {

        });
    };
    $scope.register = function() {
      if($scope.password1.val() === $scope.password2.val()) {

      } else {
         // $('#passwordError').hide();
      }
    };
  }]);
