/**
 * Created by nataliamiller on 24/11/2014.
 */
'use strict';

/**
 * Created by nataliamiller on 22/11/2014.
 */


angular.module('csaClientAngularjsApp')
  .service('UserDataService', ['$http','$routeParams', function ($http) {

      this.setCurrentUser = function () {
        return $http.get('http://localhost:3000/users.json');
        //return users;
      };

      this.getUser = function (selectedUser) {
        var user = {};
        $http.get(selectedUser.url).
          success(function (data) {
            user = data;
          });
        return user;
      };

      this.post= function () {

        return null;
      };

  }]);
