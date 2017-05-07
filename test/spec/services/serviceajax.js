'use strict';

describe('Service: serviceAjax', function () {

    // load the service's module
    beforeEach(module('cineAngularApp'));

    // instantiate service
    let serviceAjax, httpBackend, popularRequest;

    beforeEach(inject(function (_serviceAjax_, _$httpBackend_) {
        serviceAjax = _serviceAjax_;
        httpBackend = _$httpBackend_
    }));

    it('should make a request to the right URL when calling popular function', function () {
        serviceAjax.popular(1);
        httpBackend.expectGET('http://localhost:3000/popular?page=1').respond({});
        httpBackend.flush();
    });

    it('should set $scope.movies and $scope.total_pages when calling $scope.loadMovies', function () {

        spyOn(serviceAjax, 'search').andCallFake(function () {
            return {
                success: function (callback) {
                    callback({"results": [{}], "total_pages": 10})
                }
            }
        });

        scope.loadMovies();

        expect(scope.totalPages).toEqual(10);
        expect(scope.movies).toEqual([{}]);

    });

});
