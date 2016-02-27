(function () {
'use strict';
/**
* navbar Module
*
* Description : navbar directive
*/
var navbar = angular.module('navbar', []);

navbar.directive('navBar', [function(){
	// Private Functions
	function NavBarController() {
	  this.activeTab = 1;

	 	this.setTab = function (newValue) {
	 		this.activeTab = newValue;
	 	};

	 	this.isSet = function (tabIndex) {
	 		return this.activeTab == tabIndex;
	 	};  
	}

	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: NavBarController,
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'partials/navbar.html',
		controllerAs: 'navBarCtrl',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}]);
})();