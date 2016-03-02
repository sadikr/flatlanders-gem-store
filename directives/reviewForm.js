(function() {
'use strict';

/**
* reviewForm Module
*
* Description
*/
var reviewForm = angular.module('reviewForm', []);

reviewForm.directive('reviewForm', [function() {
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    controller: function($scope, $element, $attrs, $transclude) {
      $scope.onSubmit = function(review) {
        $scope.product.reviews.push(review);
        this.review = {};
      };
    },
    cotrollerAs: 'reviewFormCtrl',
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'partials/review_form.html?' + Date.now(),
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {

    }
  };
}]);

})();
