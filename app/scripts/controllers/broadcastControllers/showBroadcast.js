/**
 * Created by nataliamiller on 06/12/2014.
 */


'use strict';

/*jshint sub:true*/

angular.module('csaClientAngularjsApp')
  .controller('ShowBroadcastCtrl', ['$scope', '$http', '$location', '$routeParams',
    function ($scope, $http, $location, $routeParams) {

      $scope.init = function() {
        $scope.getBroadcast();
      };

      $scope.getBroadcast = function() {
        $scope.broadcastPromise = $http.get('http://localhost:3000/broadcasts/' + $routeParams.broadcastId + '.json').
          success(function(data){
            $scope.broadcast = data;
          }).
          error(function(){

          });
      };

      $scope.backToBroadcasts = function() {
        $location.path('/broadcasts');
      };

      $scope.deleteBroadcast = function(broadcast) {
        $http.delete('http://localhost:3000/broadcasts/' + broadcast.id + '.json').
          success(function(){
            $location.path('/broadcasts');
          }).
          error(function(){

          });
      };

    }]);
