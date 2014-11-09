/**
 * Created by nataliamiller on 05/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('UsersCtrl', ['$scope', '$http', 'ngTableParams', '$location', '$routeParams',
    function ($scope, $http, ngTableParams, $location, $routeParams) {
    var previousSelection = null;
    $http.get('http://localhost:3000/users.json').
      success(function(data) {
        $scope.users=data;
      }).
      error(function(data) {
      });

    $scope.openSelectedUser = function(user){
      if(previousSelection) {
        previousSelection.$selected = false;
      }
      previousSelection = user;

      $http.get(user.url).
        success(function(data) {
          $scope.user = data;
          $routeParams.userId = data.id;
          $location.path('/show/' + $routeParams.userId);
        }).
        error(function(data) {
        });
      console.log(user);
    };


  }]);
