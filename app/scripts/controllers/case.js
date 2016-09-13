'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('case', function () {
	$(".c_wedding_pic img").mouseover(function(){
		$(this).fadeTo("fast",1).siblings().fadeTo("fast",0.7)
		$(this).parent().siblings().children().fadeTo("fast",0.7)
	})
	

});
