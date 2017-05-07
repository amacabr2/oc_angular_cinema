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

    let loadMovies = _ => {
      serviceAjax.search($scope.query, $scope.currentPage).then((data) => {
         $scope.movies = data.data.results;
         $scope.totalPages = data.data.total_pages;
      });
    };

    $scope.pageChanged = _ => {
      loadMovies();
    };

    loadMovies();

});
