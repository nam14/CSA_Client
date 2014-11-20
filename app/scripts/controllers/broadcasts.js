/**
 * Created by nataliamiller on 20/11/2014.
 */
'use strict';


angular.module('csaClientAngularjsApp')
  .controller('BroadcastCtrl', '$http', '$scope', function ($http, $scope) {

    $http.get('http://localhost:3000/broadcasts.json').
      success(function(data) {
        $scope.broadcasts=data;
      }).
      error(function() {
      });


  });
