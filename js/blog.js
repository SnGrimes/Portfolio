"use strict";
<<<<<<< HEAD
var blogApp = angular.module('blogApp',['ngSanitize', 'ngRoute']);

/*
=======
var blogApp = angular.module('blog',['ngSanitize', 'ngRoute']);


>>>>>>> 02256961d037f831f2c309d0ce0e91c3abbd87a3
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
<<<<<<< HEAD
   */                 


blogApp.controller('BlogController', ['$http',
    function($http) {
    var blog = this;
    
    blog.tab = 'blog';
    
    $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[posts_per_page]=3').then(function(response) {
        
        blog.posts = response.data;
        
    });
    
    blog.selectTab = function(setTab){
        blog.tab = setTab;
    };
    
    blog.selected = function(checkTab){
        return blog.tab === checkTab;
    };
    
    function getSinglePost (id) {
        $http.get('http://localhost/Portfolio/wordpress/wp-json/posts/' + id).then(function(response) {
            blog.single = response.data;
        });
        
    }
    
     $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[posts_per_page]=3').then(function(response) {
            blog.past = response.data;
        });
     
     $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[monthnum]=6').then(function(response) {
            blog.june = response.data;
        });   
            

}]);

blogApp.filter('unsafe', function($sce) {return $sce.trustAsHtml;});
/*
blogApp.controller('GetPastArticleController', ['$http',
             function($http) {

                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[posts_per_page]=3').then(function(response) {

                //$http.get('http://localhost/Portfolio/wordpress/wp-json/posts').then(function(response) {

                    blog.posts = response.data;
=======
                    


blogApp.controller('GetPostController', ['$scope','$http',
            function($scope,$http) {
            $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[posts_per_page]=3').then(function(response) {
                
                $scope.posts = response.data;
                
            });
        }]);

blogApp.controller('GetPastArticleController', ['$scope', '$http',
             function($scope, $http) {
<<<<<<< HEAD
                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[posts_per_page]=3').then(function(response) {
=======
                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts').then(function(response) {
>>>>>>> ae34d783b07034c3b4c3008eaf8f298778232df2
                    $scope.posts = response.data;
>>>>>>> 02256961d037f831f2c309d0ce0e91c3abbd87a3
                });                                            
             }]); 

blogApp.controller('GetJuneController', ['$http',
             function($http) {
                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[monthnum]=6').then(function(response) {
                    blog.posts = response.data;
                });                                            
             }]); 

<<<<<<< HEAD
=======
<<<<<<< HEAD
blogApp.controller('GetSinglePostController', ['$scope', '$http',
             function($scope, $http) {
                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts/' + id).then(function(response) {
                    $scope.posts = response.data;
                });                                            
             }]);

=======
>>>>>>> ae34d783b07034c3b4c3008eaf8f298778232df2
blogApp.filter('unsafe', function($sce) {return $sce.trustAsHtml});
>>>>>>> 02256961d037f831f2c309d0ce0e91c3abbd87a3

blogApp.controller('GetSinglePostController', ['blog', '$http',
             function($http) {
                $http.get('http://localhost/Portfolio/wordpress/wp-json/posts/').then(function(response) {
                    blog.posts = response.data;
                });                                            
             }]); */


/*
blogApp.controller('AddCommentController', function ($http) {
                blog.addNewPost = function(publish) {
                    var request = $http({
                        method: "post",
                        url: 'http://localhost/Portfolio/wordpress/wp-json/',
                        data: {
                            title: blog.newComment.title,
                            date: blog.newComment.date,
                            body: blog.newComment.body                             
                        },
                        headers: {'Content-type': 'application/www-x-form-urlencoded'}
                    });
                    
                };
            
            
}); */
