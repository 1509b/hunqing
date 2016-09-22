'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('package', function ($scope,$http) {
   
   $http({
		url:"http://123.56.227.177:2504/wedding-combo",
		method:"get",
		withCredentials:true
	}).success(function(e){
		$scope.data=e
	})
	
	$(".m_content2_img1 img").mouseover(function(){
		$(this).fadeTo("fast",1).siblings().fadeTo("fast",0.7)
		$(this).parent().siblings().children().fadeTo("fast",0.7)
	})
	$(".m_content2_img2 img").mouseover(function(){
		$(this).fadeTo("fast",1).siblings().fadeTo("fast",0.7)
		$(this).parent().siblings().children().fadeTo("fast",0.7)
	})
   
  });