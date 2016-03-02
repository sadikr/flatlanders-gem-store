(function() {
'use strict';

/**
* productTabs Module
*
* Description: Product Tabs Directive
*/
var productTabs = angular.module('productTabs', []);

productTabs.directive('productTabs', [function() {

  function productTabsController($scope, $element, $attrs, $transclude) {
    this.activeTab = 0;
    console.log($scope);
    this.setTab = function(newTab) {
      this.activeTab = newTab;
      console.log(this.product);
    };
    this.isSelected = function(selected) {
      return this.activeTab == selected;
    };
  };

  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: { 'activeTab': "=", }, // {} = isolate, true = child, false/undefined = no change
    controller: productTabsController,
    controllerAs: 'productTabsCtrl',
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'partials/product_tabs.html?' + Date.now(),
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {

    }
  };
}]);

})();
