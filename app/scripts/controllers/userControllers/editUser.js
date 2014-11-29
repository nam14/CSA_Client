/**
 * Created by nataliamiller on 24/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('EditUserCtrl', ['$scope', 'UserService', '$location', '$http', '$routeParams',
    function ($scope, UserService, $location, $http, $routeParams) {

      $scope.phoneRegEx=/^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;

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
