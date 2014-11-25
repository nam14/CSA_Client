/**
 * Created by nataliamiller on 24/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('EditUserCtrl', ['$scope', '$http', '$location', '$routeParams', 'UserService',
    function ($scope, UserService, $http) {

      $scope.init = function () {
        $scope.user = UserService.getSelectedUser();
      };

      $scope.updateUser = function($http) {

      };



    }]);
