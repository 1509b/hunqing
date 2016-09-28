'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('serve', function ($scope) {
        $scope.mouseenter=function(){
            $(".l-content2 span").addClass('hover');
        }
        $scope.mouseleave=function(){
            $(".l-content2 span").removeClass('hover');
        }
        $scope.mouseenter1=function(){
            $(".l-content4-right span").addClass('hover');
        }
        $scope.mouseleave1=function(){
            $(".l-content4-right span").removeClass('hover');
        }
  });
