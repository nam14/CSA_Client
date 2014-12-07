/**
 * Created by nataliamiller on 05/12/2014.
 */


'use strict';

/*jshint sub:true*/

angular.module('csaClientAngularjsApp')
  .controller('NewBroadcastCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {

      $scope.init = function() {
        //emoty objects that will be filled in the html form
        $scope.broadcast = {};
        $scope.feeds = {};
        $scope.forms = {};
      };
      //save broadcast and feeds, if successful
      $scope.submitBroadcast = function() {
        $scope.newBroadcastPromise = $http.post('http://localhost:3000/broadcasts.json',
          {broadcast: $scope.broadcast, feeds: $scope.feeds}).
          success(function(){
            $location.path('/broadcasts');
          }).
          error(function(status){
            Notifier.error(status); /*jshint ignore:line*/
          });
      };
      //if user selects cancel then take them back to broadcasts page
      $scope.backToBroadcasts = function() {
        $location.path('/broadcasts');
      };

    }]);

