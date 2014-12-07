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
      //get the selected broadcast from server, id take from url parameter
      $scope.getBroadcast = function() {
        $scope.broadcastPromise = $http.get('http://localhost:3000/broadcasts/' + $routeParams.broadcastId + '.json').
          success(function(data){
            $scope.broadcast = data;
          }).
          error(function(status){
            Notifier.error(status); /*jshint ignore:line*/
          });
      };
      //if cancel is selected then take back to broadcasts page
      $scope.backToBroadcasts = function() {
        $location.path('/broadcasts');
      };
      //if delete is selected then delete broadcast
      $scope.deleteBroadcast = function(broadcast) {
        $http.delete('http://localhost:3000/broadcasts/' + broadcast.id + '.json').
          success(function(){
            $location.path('/broadcasts');
          }).
          error(function(status){
            Notifier.error(status); /*jshint ignore:line*/
          });
      };

    }]);
