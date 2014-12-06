/**
 * Created by nataliamiller on 05/12/2014.
 */


'use strict';

/*jshint sub:true*/

angular.module('csaClientAngularjsApp')
  .controller('BroadcastsCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {

      $scope.init = function() {
          $scope.getBroadcasts();
      };

      $scope.getBroadcasts = function() {
        $scope.broadcastsPromise = $http.get('http://localhost:3000/broadcasts.json').
          success(function(data) {
            $scope.broadcasts = data;
          }).
          error(function(status) {
            Notifier.error(status);
          });

      };

      $scope.openSelectedBroadcast = function(broadcast) {

      };

      $scope.newBroadcast = function() {
        $location.path('/broadcasts/new');
      };
    }]);
