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
      //get selected users information. User id stored in routeParams
      $scope.getUserInfo = function() {
        $scope.getUserInfoPromise = $http.get('http://localhost:3000/users/'+$routeParams.userId+'.json').
          success(function(data) {
            $scope.user = data;
            UserService.setSelectedUser($scope.user);
          }).
          error(function(data) {
            Notifier.error(data.error); /*jshint ignore:line*/
          });

      };
      //if cancel is selected go back tp users page
      $scope.backToUsers = function() {
        $location.path('/users');
      };
      //if edit button is selected change location to edit page
      $scope.editSelectedUser = function() {
        $routeParams.userId = UserService.getSelectedUser().id;
        $location.path('/users/'+ $routeParams.userId + '/edit');
      };
      //delete selected user, send delete request
      $scope.deleteSelectedUser = function() {
        $http.delete('http://localhost:3000/users/' + UserService.getSelectedUser().id + '.json').
          success(function(){
            UserService.clearSelectedUser();
            Notifier.success('User deleted'); /*jshint ignore:line*/
            $scope.backToUsers();
          }).
          error(function(data){
            Notifier.error(data.error); /*jshint ignore:line*/
          });
      };
    }]);
