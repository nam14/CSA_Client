/**
 * Created by nataliamiller on 05/12/2014.
 */


'use strict';

/*jshint sub:true*/

angular.module('csaClientAngularjsApp')
  .controller('NewBroadcastCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {

      $scope.init = function() {
        $scope.broadcast = {};
        $scope.feeds = {};
      };

      $scope.submitBroadcast = function() {
        $scope.newBroadcastPromise = $http.post('http://locahost:3000/broadcasts.json',
          {broadcast: $scope.broadcast, feeds: $scope.feeds}).
          success(function(){
            $location.path('/broadcasts');
          }).
          error(function(){

          });
      };

      $scope.backToBroadcasts = function() {
        $location.path('/broadcasts');
      };
    }]);

