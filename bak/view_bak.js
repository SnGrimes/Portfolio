var viewApp = angular.module('viewApp', ['ngAnimate']);

viewApp.directive('viewer', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link:function(scope, elem, attrs) {
        scope.currentIndex=0;
        
        scope.next = function() {
          scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };
        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
        };
        scope.$watch('currentIndex', function() {
          scope.images.forEach(function(image) {
            image.visible = false;
          });
          scope.images[scope.currentIndex].visible = true;
        });
      },
    templateUrl: 'templates/templateurl.html'
  };
});             
                 
var pictures = ["https://dl.dropboxusercontent.com/u/4524925/Chrysanthemum.jpg", "https://dl.dropboxusercontent.com/u/4524925/Desert.jpg","https://dl.dropboxusercontent.com/u/4524925/Hydrangeas.jpg"];

viewApp.controller('ViewController', function($scope) {
  $scope.images = [{
    src:'responsive.png',
    title: 'Responsive Page',
    link: 'Testbed/Responsive site/main.html'
  }, {
    src: 'tamarah.png',
    title:'Tamarah Esi Page',
    link: 'http://www.tamarahesi.com'
    
  }];
  
});



