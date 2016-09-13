'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('serve', function () {
    $(function(){
        $('#btn').onclick=function(){
            if(mv.paused){
                mv.play();
            }else{
                mv.pause();
            }
        }
        $(".l-content2").hover(function(){
            $(".l-content2 span").addClass('hover');
        },function(){
            $(".l-content2 span").removeClass('hover');
        })
        $(".l-content4-right").hover(function(){
            $(".l-content4-right span").addClass('hover');
        },function(){
            $(".l-content4-right span").removeClass('hover');
        })
    })

    });
