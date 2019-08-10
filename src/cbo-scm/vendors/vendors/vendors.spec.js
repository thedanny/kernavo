'use strict';

describe('vendorsController', function () {

    var scope, httpBackend, createController;


    beforeEach(function () {
      angular.module('angular-loading-bar', [])
      angular.module('easypiechart', [])
      module('cbo-scm')
    });
  
    beforeEach(inject(function ($rootScope, $httpBackend, $controller) {
      httpBackend = $httpBackend;
      scope = $rootScope.$new();
  
      createController = function () {
        return $controller('vendorsController', {
          '$scope': scope
        });
      };
    }));
  

    it('loads and initializes', function () {
      //spec body 
      var ctrl = createController();
      expect(ctrl).toBeDefined();
  
    });


    //ADD More tests here
    // it(' ', function () {
       
    //     var ctrl = createController();
    //     expect(ctrl).toBeDefined();
    
    // });
  
});
