/**
 * Created by nataliamiller on 30/11/2014.
 */

'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('csaClientAngularjsApp', ['ngCookies', 'ngRoute', 'cgBusy', 'ngMock']));

  var LoginCtrl, scope, httpBackend, createController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();

    createController= function() {
      return $controller('LoginCtrl', {
        $scope: scope,
        $http: $httpBackend
      });
    };

  }));



  it('should post a session request with log in info', function () {
      httpBackend.expectPOST('http://localhost:3000/session', {login:'admin', password:'password'}).respond(200);
      createController();
    //POST('http://localhost:3000/session', {login:'admin', password:'password'})
      httpBackend.flush();
  });
});
