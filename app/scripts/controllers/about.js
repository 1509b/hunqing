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
        var  reg=0;
        var reg1=0
        $scope.telclick=function(){
            $(".tel+b").html("请正确输入手机号码");
        }
        $scope.telblur=function(){
            var tel=$(".tel").val();
            if(telphone.test(tel) && tel!=""){
                reg=0;
              $(".tel+b").html("✔");
              $(".tel+b").css("color","green")
            }else{
                reg=1;
              $(".tel+b").html("✘");
            }
        }
        var mailreg=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        $scope.mailclick=function(){
            $(".mail+b").html("请输入有效邮箱");
        }
        $scope.mailblur=function(){
            var mail=$(".mail").val();
            if(mailreg.test(mail) && mail!=""){
                reg1=0;
                $(".mail+b").html("✔");
                $(".mail+b").css("color","green")
            }else{
                reg1=1;
                $(".mail+b").html("✘");
            }
        }
        $scope.sub=function(){
            if(reg==0 && reg1==0 && $(".name").val()!="" && $(".request").val()!=""){
                $scope.data=[]
                $http({
                    url:"http://123.56.227.177:2504/wedding-commit",
                    method:"post",
                    data:$scope.updata,
                    withCredentials:true
                }).success(function(e){
                    $scope.data.push(e),
                    console.log(e),
                    alert("信息提交成功")
                })
            }else{
                alert("您输入的信息有误")
            }
        }
        $scope.reset=function(){
          $scope.updata.name='';
          $scope.updata.tel='';
          $scope.updata.email='';
          $scope.updata.request='';
        }
    /*WEDDING-COMMIT
     name
     tel
     email
     request
     */

    });

