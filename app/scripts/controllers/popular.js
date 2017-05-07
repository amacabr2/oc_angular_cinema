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
    $scope.loading = true;
    $scope.orderByPredicate = "titre";
    $scope.orderByReverse = false;

    let loadMovies = _ => {
        $scope.loading = true;
        serviceAjax.popular($scope.currentPage).then((data) => {
            $scope.loading = false;
            $scope.movies = data.data.results;
            $scope.totalPages = data.data.total_pages;
        });
    };

    $scope.pageChanged = _ => {
        loadMovies();
    };

    $scope.clickPredicateName = _ => {
        $scope.orderByReverse = !$scope.orderByReverse;
        $scope.orderByPredicate = 'title';
    };

    $scope.clickPredicateRate = _ => {
        $scope.orderByReverse = !$scope.orderByReverse;
        $scope.orderByPredicate = 'vote_average';
    };

    loadMovies();

});
