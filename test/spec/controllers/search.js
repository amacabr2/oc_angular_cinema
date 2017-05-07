'use strict';

describe('Controller: SearchCtrl', function () {

    // load the controller's module
    beforeEach(module('cineAngularApp'));

    let SearchCtrl, scope, serviceAjax;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _serviceAjax_) {
        scope = $rootScope.$new();
        serviceAjax = _serviceAjax_;
        SearchCtrl = $controller('SearchCtrl', {
            $scope: scope,
            serviceAjax: serviceAjax
        });
    }));

    it('should set $scope.movies and $scope.total_pages when callling $scope.loadMovies', function () {

        spyOn(serviceAjax, 'search').andCallFake(_ => {

            return {
                success: function (callback) {
                    callback({
                        "results": [{}],
                        "total-pages": 10
                    })
                }
            };

            scope.loadMovies();

            expect(scope.totalPages).toEquals(10);
            expect(scope.movies).toEquals([{}]);

        });

    });

    it('should call loadMovies function when calling pageChanged function', function () {
        spyOn(scope, 'loadMovies');
        scope.pageChanged();
        expect(scope.loadMovies).toHaveBeenCalled();
    });

});
