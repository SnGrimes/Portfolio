angular.module("viewApp", ['ngAnimate'])

    .directive('viewer', function() {
  return {
    restrict: 'AE',
    scope: {
      images: '='
    },
    templateUrl: 'templates/templateurl.html'
  };
})             
                 
.controller('ViewController', function($scope) {
  $scope.images = [{
    src:'responsive.jpg',
    title: 'Responsive Page - HTML, CSS',
    link: 'Testbed/Responsive site/main.html'
  }, {
    src: 'tamarah.jpg',
    title:'Tamarah Esi Website - HTML, CSS, Wordpress template manipulation',
    link: 'http://www.tamarahesi.com'
    
  }];
  
});



angular.module("portfolio",['ngRoute', 'viewApp', 'blogApp'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl:'pages/work.html',
                controller: 'homeController',
                controllerAs: 'homeController'
            }).
            when('/blog', {
                templateUrl: 'pages/blog.html',
                contoller: 'pastController'
            }).
            when('/contact', {
                templateUrl: 'pages/contact.html',
                contoller: 'contactController'
            }).
            otherwise ({
                redirectTo: '/'
            });
    }])

.controller('homeController', ['$scope', function($scope){
    var self = this;
    self.message = "The app routing is working!";
    
}])



