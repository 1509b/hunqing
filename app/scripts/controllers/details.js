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

		$scope.myInterval = 2000;
		$scope.noWrapSlides = false;
		var slides = $scope.slides = [];
		$scope.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				img: 'http://123.56.227.177/bi2/public/wedding_upload/images/a927899159dc3bc53440daa5e6376c9d.jpg',
				//text: 'Chocola & Vanilla'
			});
			slides.push({
				img: 'http://123.56.227.177/bi2/public/wedding_upload/images/f80ac9886d550c571b7470ddf768e59f.jpg',
				//text: 'Chocola & Vanilla'
			});
		};
		$scope.addSlide();
}).filter("hq",function(){
  	return function(e){
  		if(e.length>280){
  			return e.substr(0,280)+'...'
  		}else{
  			return e
  		}
  	}

})