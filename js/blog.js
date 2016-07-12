var blogApp = angular.module('blog',[]);


blogApp.controller('GetPostController', ['$scope','$http',
            function($scope,$http) {
            $http.get('http://localhost/Portfolio/wordpress/wp-json/posts').then(function(response) {
                
                $scope.posts = response.data;
                
            });
        }]);

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
   