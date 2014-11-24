/**
 * Created by nataliamiller on 24/11/2014.
 */


/**
 * Created by nataliamiller on 22/11/2014.
 */


angular.module('csaClientAngularjsApp')
  .factory('UserService', ['$http', function ($http) {

    return {
      getAllUsers: function () {
        var users;
        $http.get('http://localhost:3000/users').
          success(function (data) {
            users = data;
          });

        return users;
      },

      getUser: function () {

      },

      post: function (input) {

        return null;
      }
    };

  }]);
