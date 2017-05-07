'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp').controller('PopularCtrl', function ($scope, serviceAjax) {

    $scope.currentPage = 1;
    $scope.totalPages = 0;

    let loadMovies = _ => {
        $scope.loading = true;
        serviceAjax.popular($scope.currentPage).then((data) => {
           $scope.movies = data.data.results;
           $scope.totalPages = data.data.total_pages;
           $scope.loading = false;
        });
    };

    $scope.pageChanged = _ => {
        loadMovies();
    };

    loadMovies();

});
