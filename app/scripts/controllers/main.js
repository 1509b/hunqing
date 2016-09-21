'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('main', function ($scope,$http) {
  	
   		$(function(){
   			$(".song-div5-con-1").mouseover(function(){
   				$(".song-div5-con-1").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-1-p1").css("color","white")
   				$(".song-div5-con-2-p2").css("color","#999797")
   				$(".song-div5-con-3-p3").css("color","#999797")
   				$(".song-div6-con1").show().siblings().hide()
   			})
   			$(".song-div5-con-2").mouseover(function(){
   				$(".song-div5-con-2").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-2-p2").css("color","white")
   					$(".song-div5-con-1-p1").css("color","#999797")
   				$(".song-div5-con-3-p3").css("color","#999797")
   				$(".song-div6-con2").show().siblings().hide()
   			})
   			$(".song-div5-con-3").mouseover(function(){
   				$(".song-div5-con-3").css("background","#ff6637").siblings().css("background","white")
   				$(".song-div5-con-3-p3").css("color","white")
   					$(".song-div5-con-1-p1").css("color","#999797")
   				$(".song-div5-con-2-p2").css("color","#999797")
   				$(".song-div6-con3").show().siblings().hide()
   			})
   		})
   		
<<<<<<< HEAD
		$http({
			url:"http://123.56.227.177:2504/wedding-autoplay",
			method:"get",
			withCredentials:true
		}).success(function(e){
			console.log()
			$scope.data=e
		})	
			//http://123.56.227.177/bi2/public/wedding_upload/images/{{i.img}}

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }

	

=======
>>>>>>> origin/master
   		
  });

// <slide ng-repeat="slide in slides" active="slide.active">
//      	{{i.img}}
//          <img ng-src="{{slide.image}}">
//          <div class="carousel-caption">
//              <p>{{slide.text}}</p>
//          </div>
//      </slide>