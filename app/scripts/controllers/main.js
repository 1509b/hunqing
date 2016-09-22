'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('main', function ($scope,$http) {
		$scope.swi=function(e){
			$scope.tab=e;
		}
		$scope.addback=function(e){
			$scope.i=e
		}
		
		
		$http({
			url:"http://123.56.227.177:2504/wedding-news",
			method:"get",
			withCredentials:true  //withCredentials:true 把后台返的cookie再传给后台  
		}).success(function(e){
			$scope.data=e
			console.log(e)
		})
		
		
   		$(function(){
   			$(".song-div5-con-1").click(function(){
   				$(".song-div5-con-1").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-1-p1").css("color","white")
   				$(".song-div5-con-2-p2").css("color","#999797")
   				$(".song-div5-con-3-p3").css("color","#999797")
   			})
   			$(".song-div5-con-2").click(function(){
   				$(".song-div5-con-2").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-2-p2").css("color","white")
   					$(".song-div5-con-1-p1").css("color","#999797")
   				$(".song-div5-con-3-p3").css("color","#999797")
   			})
   			$(".song-div5-con-3").click(function(){
   				$(".song-div5-con-3").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-3-p3").css("color","white")
   					$(".song-div5-con-1-p1").css("color","#999797")
   				$(".song-div5-con-2-p2").css("color","#999797")
   			})
   		})
   		
		$http({
			url:"http://123.56.227.177:2504/wedding-autoplay",
			method:"get",
			withCredentials:true
		}).success(function(e){
			console.log(e)
			$scope.da=e
		})	
			//http://123.56.227.177/bi2/public/wedding_upload/images/{{i.img}}
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
