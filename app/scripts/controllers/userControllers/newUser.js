/**
 * Created by nataliamiller on 27/11/2014.
 */


'use strict';


angular.module('csaClientAngularjsApp')
  .controller('NewUserCtrl', [ '$scope', '$http', '$location',
    function ($scope, $http, $location) {

      $scope.init = function () {
        $scope.user = {};
      };

      $scope.createNewUser = function() {
        $scope.saveNewUserPromise = $http.post('http://localhost:3000/users', {user:$scope.user}).
          success(function(){
            $location.path('/users');
          }).
          error(function(data) {
            //just showing data does not work, need to work out how
            //to traverse unknown attributes
            Notifier.error(data); /*jshint ignore:line*/
          });
      };

      $scope.backToUsers = function () {
        $location.path('/users');
      };


    }]);
