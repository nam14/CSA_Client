/**
 * Created by nataliamiller on 30/11/2014.
 */

'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('csaClientAngularjsApp', ['ngCookies', 'ngRoute', 'cgBusy', 'ngMock']));

  var LoginCtrl, scope, createController, httpBackend, rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {

    httpBackend = $injector.get('$httpbackend');

    rootScope = $injector.get('$rootScope');

    var $controller = $injector.get('$controller');


    createController= function() {
      return $controller('LoginCtrl', {
        $scope: rootScope
      });
    };


  }));

  afterEach (function () {
    httpBackend.verifyNoOutstandingExpectation ();
    httpBackend.verifyNoOutstandingRequest ();
  });



  it('should post a session request with login info', function() {
    var controller = createController();
    httpBackend.flush();
    httpBackend.expect('POST', 'http://localhost:3000/session', {login:'admin', password:'password'}).respond(200);
    httpBackend.flush();
  });

  it('should delete a session with delete request', function() {
    var controller = createController();
    httpBackend.flush();
    httpBackend.expect('DELETE', 'http://localhost:3000/session').respond(200);
    httpBackend.flush();
  });

  it('when logged in credentials should be saved', function() {
    rootScope.loginUsername = 'admin';
    rootScope.loginPassword = 'password';
    rootScope.login();
    expect(scope.globals.currentUser.username).toEqual('admin');
  });

});
