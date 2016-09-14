'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
    .controller('about', function () {
        $(function(){
            $('.l-about-content2').hover(function(){
                $('.l-about-content2 span').addClass('hover');
            },function(){
                $('.l-about-content2 span').removeClass('hover');
            })
            $('.span1').hover(function(){
                $('.span1 a').addClass('hover');
            },function(){
                $('.span1 a').removeClass('hover');
            })
            $('.span2').hover(function(){
                $('.span2 a').addClass('hover');
            },function(){
                $('.span2 a').removeClass('hover');
            })
        })

    });

