/**
 * Created by nataliamiller on 05/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('UsersCtrl', ['$scope', '$http', '$location', '$routeParams', 'UserService',
    function ($scope, $http, $location, $routeParams, UserService) {
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

        UserService.setSelectedUser(user);
        $routeParams.userId = UserService.getSelectedUser().id;
        $location.path('/users/'+ $routeParams.userId);

      };

      $scope.newUser = function() {
        $location.path('/users/new');
      };

      $scope.editSelectedUser = function(user) {
        UserService.setSelectedUser(user);
        $routeParams.userId = UserService.getSelectedUser().id;
        $location.path('/users/'+ $routeParams.userId + '/edit');
      };

      $scope.deleteSelectedUser = function(user) {
        $http.delete('http://localhost:3000/users/' + user.id + '.json').
          success(function(){
            $scope.loadUsers();
          }).
          error(function(){

          });
      };



    }]);
