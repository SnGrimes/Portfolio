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
    src:'responsive.png',
    title: 'Responsive Page - HTML, CSS',
    link: 'Testbed/Responsive site/main.html'
  }, {
    src: 'tamarah.png',
    title:'Tamarah Esi Website - HTML, CSS, Wordpress template manipulation',
    link: 'http://www.tamarahesi.com'
  },
   {
    src: 'weatherapp.png',
    title: 'Weather Application - HTML, CSS, JS, PHP, Openweathermap API',
    link: 'Testbed/Weatherapp/index.html'
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
                controller: 'BlogController'
            }).
            when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            }).
            otherwise ({
                redirectTo: '/'
            });
    }])

.controller('homeController', ['$scope', function($scope){
    var self = this;
    self.message = "The app routing is working!";
    
}])




