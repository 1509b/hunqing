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
    .module('yoApp', ['ui.router']).config(function($stateProvider){
  	    $stateProvider.state("main",{
	  		url:"main",
	  		templateUrl:'../views/main.html',
	  		controller:"main"
	  	}).state("serve",{
	  		url:"serve",
	  		templateUrl:'../views/serve.html',
	  		controller:"serve"
	  	}).state("case",{
	  		url:"case",
	  		templateUrl:'../views/case.html',
	  		controller:"case"
	  	}).state("package",{
	  		url:"package",
	  		templateUrl:'../views/package.html',
	  		controller:"package"
	  	}).state("about",{
	  		url:"about",
	  		templateUrl:'../views/about.html',
	  		controller:"about"
	  	}).state("team",{
	  		url:"team",
	  		templateUrl:'../views/team.html',
	  		controller:"team"
	  	})
    });
