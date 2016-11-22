(function Blog() {
    "use strict";
    angular
        .module('blogApp',[])
        .factory('wpApiFactory', wpApiFactory)
        .filter('unsafe', function($sce) {return $sce.trustAsHtml;})
        .controller('BlogController', BlogController);
    
        function BlogController(wpApiFactory, $log) {
            var blog = this;
                 
            blog.getPost = function getPost() {
                wpApiFactory
                    .getPost()
                    .then(function(data) {
                        $log.info(data);
                            blog.result = data.data;
                    });
            };
            blog.getPost();
            blog.tab = 'blog';
            blog.selectTab = function(setTab){
                blog.tab = setTab;
            };
            
            blog.selected = function(checkTab){
                return blog.tab === checkTab;
            };
        }
        function wpApiFactory($http) {
            var postData = [];
            postData.getPost = function getPost() {
                return $http.get('http://localhost/Portfolio/wordpress/wp-json/posts?filter[posts_per_page]=3');
            };
            
            return postData;
        }   
}());
