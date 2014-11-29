/**
 * Created by nataliamiller on 24/11/2014.
 */

'use strict';


angular.module('csaClientAngularjsApp')
  .controller('ShowUserCtrl', ['$scope', '$routeParams', '$http', '$location', 'UserService',
    function ($scope, $routeParams, $http, $location, UserService) {

      $scope.init = function() {
        $scope.getUserInfo();
      };

      $scope.getUserInfo = function() {
        $http.get('http://localhost:3000/users/'+$routeParams.userId+'.json').
          success(function(data) {
            $scope.user = data;
            UserService.setSelectedUser($scope.user);
          }).
          error(function(data) {
            Notifier.error(data.error); /*jshint ignore:line*/
          });

      };

      $scope.backToUsers = function() {
        $location.path('/users');
      };

      $scope.editSelectedUser = function() {
        $routeParams.userId = UserService.getSelectedUser().id;
        $location.path('/users/'+ $routeParams.userId + '/edit');
      };

      $scope.deleteSelectedUser = function() {
        $http.delete('http://localhost:3000/users/' + UserService.getSelectedUser().id + '.json').
          success(function(){
            UserService.clearSelectedUser();
            $scope.backToUsers();
          }).
          error(function(data){
            Notifier.error(data.error); /*jshint ignore:line*/
          });
      };
    }]);
