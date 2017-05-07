'use strict';

/**
 * @ngdoc service
 * @name cineAngularApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the cineAngularApp.
 */
angular.module('cineAngularApp').factory('serviceAjax', function () {
    return {
        popular: function (page) {
            return $http.get("http://localhost:3000/popular?page=" + page);
        }
    }
});
