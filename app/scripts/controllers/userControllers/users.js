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
      //load users from server
      $scope.loadUsers = function() {
        $scope.usersPromise = $http.get('http://localhost:3000/users.json').
          success(function(data) {
            $scope.users=data;
          }).
          error(function(data, status) {
            //display error in notification message
            if(data) {
              Notifier.error(data.error); /*jshint ignore:line*/
            } else{
              Notifier.error(status); /*jshint ignore:line*/
            }

          });
      };
      //if view has been selected, change the location to the show page
      $scope.openSelectedUser = function(user){
        if(previousSelection) {
          previousSelection.$selected = false;
        }
        previousSelection = user;
        $routeParams.userId = user.id;
        $location.path('/users/'+ $routeParams.userId);

      };
      //if new user has been selected, change the location to the new page
      $scope.newUser = function() {
        $location.path('/users/new');
      };





    }]);
