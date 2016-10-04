"use strict";
var blogApp = angular.module('blog',['ngSanitize', 'ngRoute']);


blogApp.config(['$routeProvider', '$locationProvider',
                function($routeProvider) {
                    $routeProvider.
                    when('/', {
                        templateUrl: 'templates/base.html',
                        controller: 'GetPostController'
                    }).
                    when('/post', {
                        templateUrl: 'templates/post.html',
                        controller: 'GetPostController'
                    }).
                    otherwise({
                        redirectTo: '/'
                        });
                    
                    //$locationProvider.html5Mode(true);
                }]);
                    


blogApp.controller('GetPostController', ['$scope','$http',
            function($scope,$http) {
            $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[posts_per_page]=3').then(function(response) {
                
                $scope.posts = response.data;
                
            });
        }]);

blogApp.controller('GetPastArticleController', ['$scope', '$http',
             function($scope, $http) {
                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[posts_per_page]=3').then(function(response) {
                    $scope.posts = response.data;
                });                                            
             }]);

blogApp.controller('GetJuneController', ['$scope', '$http',
             function($scope, $http) {
                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[monthnum]=6').then(function(response) {
                    $scope.posts = response.data;
                });                                            
             }]);

blogApp.controller('GetSinglePostController', ['$scope', '$http',
             function($scope, $http) {
                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts/' + id).then(function(response) {
                    $scope.posts = response.data;
                });                                            
             }]);

blogApp.filter('unsafe', function($sce) {return $sce.trustAsHtml});

blogApp.controller('AddCommentController', function ($scope, $http) {
                $scope.addNewPost = function(publish) {
                    var request = $http({
                        method: "post",
                        url: 'http://localhost/Portfolio/wordpress/wp-json/',
                        data: {
                            title: $scope.newComment.title,
                            date: $scope.newComment.date,
                            body: $scope.newComment.body                             
                        },
                        headers: {'Content-type': 'application/www-x-form-urlencoded'}
                    });
                    
                };
            
            
});


   