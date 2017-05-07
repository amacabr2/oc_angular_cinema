'use strict';

/**
 * @ngdoc overview
 * @name cineAngularApp
 * @description
 * # cineAngularApp
 *
 * Main module of the application.
 */
angular
    .module('cineAngularApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/popular', {
                templateUrl: 'views/movies.html',
                controller: 'PopularCtrl',
                controllerAs: 'popular'
            })
            .when('/search/:query', {
                templateUrl: 'views/movies.html',
                controller: 'SearchCtrl',
                controllerAs: 'search'
            })
            .otherwise({
                redirectTo: '/popular'
            });
    });
