/**
 * Created by nataliamiller on 05/12/2014.
 */


'use strict';

/*jshint sub:true*/

angular.module('csaClientAngularjsApp')
  .controller('BroadcastsCtrl', ['$scope', '$http', '$location', '$routeParams',
    function ($scope, $http, $location, $routeParams) {

      $scope.init = function() {
        $scope.getBroadcasts();
      };
      //retrieve a list of broadcasts
      $scope.getBroadcasts = function() {
        $scope.broadcastsPromise = $http.get('http://localhost:3000/broadcasts.json').
          success(function(data) {
            $scope.broadcasts = data;
          }).
          error(function(status) {
            Notifier.error(status); /*jshint ignore:line*/
          });
      };
      //send selected broadcast to ShowBroadcastCtrl
      $scope.openSelectedBroadcast = function(broadcast) {
        $routeParams.broadcastId = broadcast.id;
        $location.path('/broadcasts/' + $routeParams.broadcastId);
      };
      //send page to NewBroadcastCtrl
      $scope.newBroadcast = function() {
        $location.path('/broadcasts/new');
      };
    }]);
