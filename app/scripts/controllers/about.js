'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
    .controller('about', function ($scope,$http) {
        //$http({
        //    url:"http://",
        //    method:"GET",
        //    withCredentials:true
        //}).success(function(e){
        //
        //})
        $scope.mouseenter = function () {
            $('.l-about-content2 span').addClass('hover');
         }
        $scope.mouseleave = function () {
            $('.l-about-content2 span').removeClass('hover');
        }
        $scope.mouseenter1 = function () {
            $('.span1 a').addClass('hover');
        }
        $scope.mouseleave1 = function () {
            $('.span1 a').removeClass('hover');
        }
        $scope.mouseenter2 = function () {
            $('.span2 a').addClass('hover');
        }
        $scope.mouseleave2 = function () {
            $('.span2 a').removeClass('hover');
        }
        //验证信息
        var telphone=/^1[34578]\d{9}$/;
        $scope.telclick=function(){
            $(".tel+b").html("请正确输入手机号码");
        }
        $scope.telblur=function(){
            var tel=$(".tel").val();
            if(telphone.test(tel) && tel!=""){
              $(".tel+b").html("输入正确");
            }else{
              $(".tel+b").html("请核对信息");
            }
        }
        var mailreg=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        $scope.mailclick=function(){
            $(".mail+b").html("请输入有效邮箱");
        }
        $scope.mailblur=function(){
            var mail=$(".mail").val();
            if(mailreg.test(mail) && mail!=""){
                $(".mail+b").html("输入正确");
            }else{
                $(".mail+b").html("请核对信息");
            }
        }
        //$scope.sub=function(){
        //    $http({
        //        url:'http://localhost:2403/upload',
        //        method:"POST",
        //    }).success(function(e){
        //        console.log(e)
        //    })
        //}

    });

