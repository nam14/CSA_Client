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
        //ensure that credentials are empty
        AuthenticationService.clearCredentials();
        $scope.loginPromise = $http.post('http://localhost:3000/session', {login:$scope.loginUsername, password:$scope.loginPassword}).
          success(function(data) {
            loggedIn(data);
          }).
          error(function(data) {
            Notifier.error(data.error); /*jshint ignore:line*/
          });
      };

      //logout - rootScope as needs to be accessible in index.html
      $rootScope.logout = function() {
        $http.delete('http://localhost:3000/session')
          .success(function() {
            AuthenticationService.clearCredentials();
            $location.path('/#');
          }).error(function() {
          });
      };

      function loggedIn() {
        //save the users in the authentication service
        AuthenticationService.setCredentials($scope.loginUsername, $scope.loginPassword);
        $location.path('/#'); //once logged in go to home
      }
    }]);
