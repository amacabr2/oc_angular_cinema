'use strict';

/**
 * @ngdoc directive
 * @name cineAngularApp.directive:loading
 * @description
 * # loading
 */
angular.module('cineAngularApp').directive('loading', function () {
    return {
        template: `<div>
                        <div class="loading-container"></div>
                        <div ng-hide="loading" ng-transclude></div>
                    </div>`,
        restrict: 'A',
        transclude: true,
        scope: {
            loading: "=loading"
        },
        compile: function (element, attrs, trabsclude) {
            let spinner = new Spinner.spin();
            let loadingContainer = element.find('.loading-container')[0];
            loadingContainer.appendChild(spinner.el);
        }
    };
});
