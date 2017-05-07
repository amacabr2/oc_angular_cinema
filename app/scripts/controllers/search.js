'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp').controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) {

    $scope.query = $routeParams.query;
    $scope.currentPage = 1;
    $scope.totalPages = 0;
    $scope.loading = true;
    $scope.orderByPredicate = "titre";
    $scope.orderByReverse = false;

    let loadMovies = _ => {
        $scope.loading = true;
        serviceAjax.search($scope.query, $scope.currentPage).then((data) => {
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
