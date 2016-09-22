'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
    .module('yoApp', ['ui.router','ngSanitize','ngAnimate']).config(function($stateProvider,$urlRouterProvider){
    	$urlRouterProvider.when("","/main")
  	    $stateProvider.state("main",{
	  		url:"/main",
	  		templateUrl:'../views/main.html',
	  		controller:"main"
	  	}).state("serve",{
	  		url:"/serve",
	  		templateUrl:'../views/serve.html',
	  		controller:"serve"
	  	}).state("case",{
	  		url:"/case",
	  		templateUrl:'../views/case.html',
	  		controller:"case"
	  	}).state("package",{
	  		url:"/package",
	  		templateUrl:'../views/package.html',
	  		controller:"package"
	  	}).state("about",{
	  		url:"/about",
	  		templateUrl:'../views/about.html',
	  		controller:"about"
	  	}).state("team",{
	  		url:"/team",
	  		templateUrl:'../views/team.html',
	  		controller:"team"
	  	})
	  	
	  	$('.nav,.fix').find('ul>li').click(function(){
	  		$(this).addClass("hover").siblings().removeClass("hover")
			$(this).parent().parent().siblings().children().children().eq($(this).index()).addClass("hover").siblings().removeClass("hover")
	  	})
	  	
	  	
	  	$('.nav-1').hover(function(){
	  		$(this).find('ol').stop().fadeIn()
	  	},function(){
	  		$(this).find('ol').stop().fadeOut()
	  	})
	  	
	  	
	  	$(window).scroll(function(){
			var headerH=$('.logo').height();
			if($(document).scrollTop()>headerH){
				$('.fix').slideDown();
			}else{
				$('.fix').slideUp();
			}
		});
		
		$(window).scroll(function(){
			if($(document).scrollTop()>$(window).height()){
				$('.back').slideDown();
			}else{
				$('.back').slideUp();
			}
		});
		
		$('.back').click(function(){
			$('body,html').animate({'scrollTop':0},500);
		});
		  	
    });
