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
  	
   		$(function(){
   			$(".song-div5-con-1").mouseover(function(){
   				$(".song-div5-con-1").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-1-p1").css("color","white")
   				$(".song-div5-con-2-p2").css("color","#999797")
   				$(".song-div5-con-3-p3").css("color","#999797")
   				$(".song-div6-con1").show().siblings().hide()
   			})
   			$(".song-div5-con-2").mouseover(function(){
   				$(".song-div5-con-2").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-2-p2").css("color","white")
   					$(".song-div5-con-1-p1").css("color","#999797")
   				$(".song-div5-con-3-p3").css("color","#999797")
   				$(".song-div6-con2").show().siblings().hide()
   			})
   			$(".song-div5-con-3").mouseover(function(){
   				$(".song-div5-con-3").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-3-p3").css("color","white")
   					$(".song-div5-con-1-p1").css("color","#999797")
   				$(".song-div5-con-2-p2").css("color","#999797")
   				$(".song-div6-con3").show().siblings().hide()
   			})
   		})
   		
		$http({
			url:"http://123.56.227.177:2504/wedding-autoplay",
			method:"get",
			withCredentials:true
		}).success(function(e){
			console.log()
			$scope.data=e
		})	
			//http://123.56.227.177/bi2/public/wedding_upload/images/{{i.img}}


		$scope.myInterval = 2000;
		$scope.noWrapSlides = false;
		var slides = $scope.slides = [];
		$scope.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				img: 'img/11.jpg',
				//text: 'Chocola & Vanilla'
			});
			slides.push({
				img: 'img/22.jpg',
				//text: 'Chocola & Vanilla'
			});
			slides.push({
				img: 'img/33.jpg',
				//text: 'Chocola & Vanilla'
			});
			slides.push({
				img: 'img/44.jpg',
				//text: 'Chocola & Vanilla'
			});
		};
		$scope.addSlide();
