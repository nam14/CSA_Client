/**
 * Created by nataliamiller on 30/11/2014.
 */

'use strict';

describe('Controller: UsersCtrl', function () {

  // load the controller's module
  beforeEach(module('csaClientAngularjsApp', ['ngCookies', 'ngRoute', 'cgBusy', 'ngMock']));

  var ctrl, createController, httpBackend, scope,location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $location) {
    httpBackend = _$httpBackend_;

    httpBackend.expectGET('http://localhost:3000/users.json',
      {'headers': {'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='}}).respond(200);

    scope = $rootScope.$new();
    ctrl = $controller('UsersCrl', {$scope: scope});
    location = $location;
  }));

  afterEach (function () {
    httpBackend.verifyNoOutstandingExpectation ();
    httpBackend.verifyNoOutstandingRequest ();
  });

  it('should start with no users', function() {
    expect(scope.users).toBeUndefined();
  });


  it('should return a list of users from server', function() {
    httpBackend.flush();
    expect(scope.users.size()).toBeGreaterThan(0);
  });

  it('should change location when opening selected user', function() {
    var user = {id: 1};
    ctrl.openSelectedUser(user);
    expect(location.path).toHaveBeenCalledWith('/users/1');
  });

  it('should change location when selecting new user', function() {
    var controller = createController();
    controller.newUser();
    expect(location.path).toHaveBeenCalledWith('/users/new');
  });


});
