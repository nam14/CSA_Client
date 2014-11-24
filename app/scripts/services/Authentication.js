/**
 * Created by nataliamiller on 22/11/2014.
 */


'use strict';

angular.module('csaClientAngularjsApp')
  .service('AuthenticationService',
  ['Base64', '$http', '$cookieStore', '$rootScope',
    function (Base64, $http, $cookieStore, $rootScope) {

          this.setCredentials = function (username, password) {
            var authData = Base64.encode(username + ':' + password);

            $rootScope.globals = {
              currentUser: {
                username: username,
                authdata: authData
              }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authData; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
          };

          this.clearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
          };

    }]);
