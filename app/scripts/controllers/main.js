'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('main', function ($scope) {
		$scope.swi=function(e){
			$scope.tab=e;
		}
		$scope.addback=function(e){
			$scope.i=e
		}
		


  });

