(function() {
  'use strict';
  /**
  	* gemStore Module
  	*
  	* Description : Application's Main Module.
  	*/
  var app = angular.module('gemStore', ['navbar',
  'productTitle',
  'productImageGallery',
  'productTabs',
  'reviewForm',
  'reviewComments'
  ]);

  app.controller('StoreController', ['$scope', '$http',
    function($scope, $http) {
      $scope.products = [];
      $http.get('products.json')
      .success(function(response) {
        $scope.products = response;
      })
      .error(function(err) {
        console.log('Err ..' + err);
      });
    }
  ]);

})();
