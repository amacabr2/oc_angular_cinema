'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp').controller('InfoCtrl', function ($scope, $routeParams, serviceAjax) {

    let id = $routeParams.id;
    $scope.loading = true;

    serviceAjax.info(id).then((data) => {
        $scope.loading = false;
        $scope.movie = data.data;
    });

});
