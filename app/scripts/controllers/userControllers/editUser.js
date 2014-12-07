/**
 * Created by nataliamiller on 24/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('EditUserCtrl', ['$scope', 'UserService', '$location', '$http', '$routeParams',
    function ($scope, UserService, $location, $http, $routeParams) {

        $scope.init = function () {
        $scope.getSelectedUser();
          $scope.currentYear = new Date().getFullYear();
      };
      //get user information
      $scope.getSelectedUser = function () {
        $scope.userPromise =$http.get('http://localhost:3000/users/' + $routeParams.userId + '.json').
          success(function(data){
            $scope.user = data;
          }).
          error(function(data){
            //display error if request fails
            Notifier.error(data.error); /*jshint ignore:line*/
          });
      };
      //update user
      $scope.updateUser = function() {
        $scope.updateUserPromise = $http.put('http://localhost:3000/users/' + $scope.user.id + '.json', {user:$scope.user}).
          success(function(){
            console.log('updated');
            $location.path('/users/'+ $scope.user.id);
          }).error(function(data){
              Notifier.error(data.error); /*jshint ignore:line*/
          });
      };
      //if cancel is selected go back to users page
      $scope.backToUsers = function () {
        $location.path('/users');
      };



    }]);
