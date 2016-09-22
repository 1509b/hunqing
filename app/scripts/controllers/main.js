'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
<<<<<<< HEAD
	.controller('main', function ($scope,$http) {
=======
  .controller('main', function ($scope,$http,$stateParams) {
>>>>>>> origin/master
		$scope.swi=function(e){
			$scope.tab=e;
		}
		$scope.isshow=true
		$scope.aa=true
		$scope.a=function(){
			$scope.isshow=true
			$scope.isshow1=false
			$scope.isshow2=false
			$scope.aa=true
			$scope.bb=false
			$scope.cc=false
			
		}		
		$scope.b=function(){
			$scope.isshow=false
			$scope.isshow1=true
			$scope.isshow2=false
			$scope.aa=false
			$scope.bb=true
			$scope.cc=false
		}		
		$scope.c=function(){
			$scope.isshow=false
			$scope.isshow1=false
			$scope.isshow2=true	
			$scope.aa=false
			$scope.bb=false
			$scope.cc=true
		}
<<<<<<< HEAD


=======
		
		
		
		
>>>>>>> origin/master
		$http({
			url:"http://123.56.227.177:2504/wedding-news",
			method:"get",
			withCredentials:true  //withCredentials:true 把后台返的cookie再传给后台  
		}).success(function(e){
			$scope.data=e
			console.log(e)
		})
<<<<<<< HEAD

		$scope.details=function(e){
			alert(e.id)
		}




		$(function(){
			$(".song-div5-con-1").click(function(){
				$(".song-div5-con-1").css("background","#ff6637").siblings().css("background","white")
				$(".song-div5-con-1-p1").css("color","white")
				$(".song-div5-con-2-p2").css("color","#999797")
				$(".song-div5-con-3-p3").css("color","#999797")
			})
			$(".song-div5-con-2").click(function(){
				$(".song-div5-con-2").css("background","#ff6637").siblings().css("background","white")
				$(".song-div5-con-2-p2").css("color","white")
				$(".song-div5-con-1-p1").css("color","#999797")
				$(".song-div5-con-3-p3").css("color","#999797")
			})
			$(".song-div5-con-3").click(function(){
				$(".song-div5-con-3").css("background","#ff6637").siblings().css("background","white")
				$(".song-div5-con-3-p3").css("color","white")
				$(".song-div5-con-1-p1").css("color","#999797")
				$(".song-div5-con-2-p2").css("color","#999797")
			})
		})

=======
		
		
		$http({
			url:"http://123.56.227.177:2504/wedding-tab",
			method:"get",
			params:{classify:0},
			withCredentials:true 
		}).success(function(x){
			$scope.data1=x
			console.log(x)
		})
		
		$http({
			url:"http://123.56.227.177:2504/wedding-tab",
			method:"get",
			params:{classify:1},
			withCredentials:true 
		}).success(function(y){
			$scope.data2=y
			console.log(y)
		})
		
		$http({
			url:"http://123.56.227.177:2504/wedding-tab",
			method:"get",
			params:{classify:2},
			withCredentials:true 
		}).success(function(z){
			$scope.data3=z
			console.log(z)
		})
		
		
   		
>>>>>>> origin/master
		$http({
			url:"http://123.56.227.177:2504/wedding-autoplay",
			method:"get",
			withCredentials:true
		}).success(function(e){
			console.log()
			$scope.data=e
<<<<<<< HEAD
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






	}).filter("hq",function(){
		return function(q){
			if(q.length>280){
				return q.substr(0,280)+'...'
			}else{
				return q
			}
		}
	})
=======
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

	


   		

  }).filter("hq",function(){
  	return function(e){
//		alert(typeof(q))
  		if(e.length>280){
  			return e.substr(0,280)+'...'
  		}else{
  			return e
  		}
  	}
  })
>>>>>>> origin/master

// <slide ng-repeat="slide in slides" active="slide.active">
//      	{{i.img}}
//          <img ng-src="{{slide.image}}">
//          <div class="carousel-caption">
//              <p>{{slide.text}}</p>
//          </div>
//      </slide>
