/**
 * Created by nataliamiller on 24/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('EditUserCtrl', ['$scope', 'UserService', '$location', '$http', '$routeParams',
    function ($scope, UserService, $location, $http, $routeParams) {

      $scope.init = function () {
        $scope.getSelectedUser();
      };

      $scope.getSelectedUser = function () {
        $http.get('http://localhost:3000/users/' + $routeParams.userId + '.json').
          success(function(data){
            $scope.user = data;
          }).
          error(function(){

          });
      };

      $scope.updateUser = function() {
        $http.put('http://localhost:3000/users/' + $scope.user.id + '.json', {user:$scope.user}).
          success(function(){
            console.log('updated');
            $location.path('/users/'+ $scope.user.id);
          }).error(function(){

          });
      };

      $scope.backToUsers = function () {
        $location.path('/users');
      };



    }]);
