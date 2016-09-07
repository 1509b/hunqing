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
	  	})
    });
