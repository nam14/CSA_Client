/**
 * Created by nataliamiller on 27/11/2014.
 */


'use strict';


angular.module('csaClientAngularjsApp')
  .controller('NewUserCtrl', [ '$scope', '$http',
    function ($scope, $http) {

      $scope.init = function () {
        $scope.user = {};
      };

      $scope.createNewUser = function() {
        $http.post('http://localhost:3000/users', {user:$scope.user}).
          success(function(){

          }).
          error(function() {

          });
      };

    }]);
