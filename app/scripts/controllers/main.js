'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('main', function ($scope,$http,$stateParams) {
		$scope.swi=function(e){
			$scope.tab=e;
		}
		$scope.isshow=true
		$scope.aa=true
		$scope.a=function(){
			$scope.isshow=true
			$scope.isshow1=false
			$scope.isshow2=false
			$scope.aa=true
			$scope.bb=false
			$scope.cc=false
			
		}		
		$scope.b=function(){
			$scope.isshow=false
			$scope.isshow1=true
			$scope.isshow2=false
			$scope.aa=false
			$scope.bb=true
			$scope.cc=false
		}		
		$scope.c=function(){
			$scope.isshow=false
			$scope.isshow1=false
			$scope.isshow2=true	
			$scope.aa=false
			$scope.bb=false
			$scope.cc=true
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
			url:"http://123.56.227.177:2504/wedding-tab",
			method:"get",
			params:{classify:0},
			withCredentials:true 
		}).success(function(x){
			$scope.data1=x
			console.log(x)
		})
		
		$http({
			url:"http://123.56.227.177:2504/wedding-tab",
			method:"get",
			params:{classify:1},
			withCredentials:true 
		}).success(function(y){
			$scope.data2=y
			console.log(y)
		})
		
		$http({
			url:"http://123.56.227.177:2504/wedding-tab",
			method:"get",
			params:{classify:2},
			withCredentials:true 
		}).success(function(z){
			$scope.data3=z
			console.log(z)
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

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  }).filter("hq",function(){
  	return function(e){
//		alert(typeof(q))
  		if(e.length>280){
  			return e.substr(0,280)+'...'
  		}else{
  			return e
  		}
  	}
})
