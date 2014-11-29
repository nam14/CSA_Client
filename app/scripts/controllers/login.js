/**
 * Created by nataliamiller on 05/11/2014.
 */


'use strict';

/*jshint sub:true*/

angular.module('csaClientAngularjsApp')
  .controller('LoginCtrl', ['$scope', '$http', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $http, $rootScope, $location, AuthenticationService) {

      //login
      $scope.login = function() {
        //var loginData = Base64.encode($scope.loginUsername + ':' + $scope.loginPassword);
        //$http.defaults.headers.common['Authorization'] = 'Basic ' + loginData;
        AuthenticationService.clearCredentials();
        $http.post('http://localhost:3000/session', {login:$scope.loginUsername, password:$scope.loginPassword}).
          success(function(data) {
            loggedIn(data);
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
            AuthenticationService.clearCredentials();
            $location.path('/#');
          }).error(function() {

          });
      };

      function loggedIn() {
        AuthenticationService.setCredentials($scope.loginUsername, $scope.loginPassword);
        $location.path('/#');
      }
    }]);
