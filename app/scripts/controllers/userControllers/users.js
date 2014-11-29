/**
 * Created by nataliamiller on 05/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('UsersCtrl', ['$scope', '$http', '$location', '$routeParams',
    function ($scope, $http, $location, $routeParams) {
      var previousSelection;

      $scope.initUsers = function() {
        $scope.loadUsers();
      };

      $scope.loadUsers = function() {
        $http.get('http://localhost:3000/users.json').
           success(function(data) {
            $scope.users=data;
           }).
           error(function(data) {
           });
        };

      $scope.openSelectedUser = function(user){
        if(previousSelection) {
          previousSelection.$selected = false;
        }
        previousSelection = user;
        $routeParams.userId = user.id;
        $location.path('/users/'+ $routeParams.userId);

      };

      $scope.newUser = function() {
        $location.path('/users/new');
      };





    }]);
