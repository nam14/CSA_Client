/**
 * Created by nataliamiller on 05/11/2014.
 */


'use strict';

angular.module('csaClientAngularjsApp')
  .controller('LoginCtrl', ['$scope', '$http', '$rootScope', '$location', function ($scope, $http, $rootScope,
                                                                                    $location) {

    $scope.loginUsername = '';
    $scope.loginPassword = '';

    //login
    $scope.login = function() {
      $http.post('http://localhost:3000/session', {login:$scope.loginUsername, password:$scope.loginPassword}).
        success(function(data) {
          console.log('Session created');
          console.log($scope.loggedIn);
          $scope.loggedInToBeTruthy();
          console.log($scope.loggedIn);
          $rootScope.setCurrentUser(data.login);
          $location.path('/#');
        //  $rootScope.currentUser = data.firstName;

        }).
        error(function() {

        });
    };

    //register a new user
    $scope.register = function() {
      if($scope.password1.val() === $scope.password2.val()) {
      } else {
      }
    };

    //logout - rootScope as needs to be accessible in index.html
    $rootScope.logout = function() {
      $http.delete('http://localhost:3000/session')
        .success(function() {
          console.log('session deleted');
          $rootScope.resetCurrentUser();
          $rootScope.loggedInToBeFalsey();
          $location.path('/#');


        }).error(function() {

        });

    };
  }]);
