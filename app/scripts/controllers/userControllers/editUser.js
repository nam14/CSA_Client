/**
 * Created by nataliamiller on 24/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('EditUserCtrl', ['$scope', 'UserService', '$location', '$http',
    function ($scope, UserService, $location, $http) {

      $scope.init = function () {
        $scope.user = UserService.getSelectedUser();
      };

      $scope.updateUser = function() {
        $http.put('http://localhost:3000/users/' + $scope.user.id + '.json', {user:$scope.user}).
          success(function(){
            console.log('updated');
            $location.path('/users/'+ $scope.user.id);
          }).error(function(){

          });

      };



    }]);
