/**
 * Created by nataliamiller on 24/11/2014.
 */

'use strict';


angular.module('csaClientAngularjsApp')
  .controller('ShowUserCtrl', ['$scope', '$routeParams', '$http', '$location',
    function ($scope, $routeParams, $http, $location) {

      $scope.init = function() {
        $scope.getUserInfo();
      };

      $scope.getUserInfo = function() {
        $http.get('http://localhost:3000/users/'+$routeParams.userId+'.json').
          success(function(data) {
            $scope.user = data;
          }).
          error(function(data) {
          });

      };

      $scope.editUser = function() {
        $location.path('/users/'+$routeParams.userId+'/edit');
      };

      $scope.backToUsers = function() {
        $location.path('/users');
      };
    }]);
