'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp').controller('InfoCtrl', function ($scope, $scopeParams, serviceAjax) {

    let id = $routeParams.id;

    serviceAjax.info(id).then((data) => {
       $scope.movie = data.data;
    });

});
