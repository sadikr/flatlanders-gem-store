(function () {
'use strict';

/**
* productImageGallery Module
*
* Description
*/
var productImageGallery = angular.module('productImageGallery', [])

productImageGallery.directive('productImageGallery', [function () {
	function ProductImageGalleryController() {
		 this.currentImageIndex = 0;

		 this.setImageIndex = function(newIndex){
		 	this.currentImageIndex = newIndex || 0;
		 };
	}
	return {
		restrict: 'E',
		templateUrl: 'partials/product_image_gallery.html',
		controller: ProductImageGalleryController,
		controllerAs: 'imageGalleryCtrl'
	};
}])
})();