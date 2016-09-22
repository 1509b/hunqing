'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('details', function ($scope,$http,$stateParams) {
   		$http({
			url:"http://123.56.227.177:2504/wedding-news",
			params:{id:$stateParams.id},
			method:"get" 
		}).success(function(e){
			$scope.data=e
			console.log(e)
		});


})