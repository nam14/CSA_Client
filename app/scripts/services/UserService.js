/**
 * Created by nataliamiller on 25/11/2014.
 */


/**
 * Created by nataliamiller on 24/11/2014.
 */
'use strict';

/**
 * Created by nataliamiller on 22/11/2014.
 */


angular.module('csaClientAngularjsApp')
  .factory('UserService', ['$rootScope', function ($rootScope) {

    var service={};

    service.setSelectedUser = function (user) {
      $rootScope.selectedUser = user;
    };

    service.clearSelectedUser = function () {
      $rootScope.selectedUser = null;
    };

    service.getSelectedUser = function () {
        return $rootScope.selectedUser;
    };

    return service;

  }]);
