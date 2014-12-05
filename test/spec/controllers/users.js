/**
 * Created by nataliamiller on 30/11/2014.
 */

'use strict';

describe('Controller: UsersCtrl', function () {

  // load the controller's module
  beforeEach(module('csaClientAngularjsApp', ['ngCookies', 'ngRoute', 'cgBusy', 'ngMock']));

  var UsersCtrl, createController, httpBackend, rootScope,location, AuthenticationService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {

    httpBackend = $injector.get('$httpbackend');

    rootScope = $injector.get('$rootScope');

    location = $injector.get('$location');

    AuthenticationService = $injector.get('AuthenticationService');

    var $controller = $injector.get('$controller');

    createController= function() {
      return $controller('UsersCtrl', {
        $scope: rootScope
      });
    };

  }));

  afterEach (function () {
    httpBackend.verifyNoOutstandingExpectation ();
    httpBackend.verifyNoOutstandingRequest ();
  });

  it('should start with empty users list', function() {
    var controller = createController();
    expect(controller.users).toBeUndefined();
  });

  it('should reject http request with no authorization', function() {
    var controller = createController();
    controller.init();
    expect(controller.users).toBeUndefined();
  });

  it('should return a list of users from server', function() {
    var controller = createController();
    var username = 'admin';
    var password = 'password';
    AuthenticationService.setCredentials(username,password);
    controller.init();
    expect(controller.users.size()).toBeGreaterThan(0);
  });

  it('should change location when opening selected user', function() {
    var controller = createController();
    var user = {id: 1};
    controller.openSelectedUser(user);
    expect(location.path).toHaveBeenCalledWith('/users/1');
  });

  it('should change location when selecting new user', function() {
    var controller = createController();
    controller.newUser();
    expect(location.path).toHaveBeenCalledWith('/users/new');
  });


});
