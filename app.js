var app = angular.module('PostCollection', []);

app.controller('Postctrl', ['$scope', function($scope) {
   $scope.posts = [{
      "postid": 1,
      "title": "10 tools for web designers",
      "author": "Yashdeep hinge",
      "content": "helllo world to github blog on testing production will start soon",
      "tags": ["angular", "css", "html", "js"]
   }, {
      "postid": 2,
      "title": "10 tools for web developers",
      "author": "Yashdeep hinge",
      "content": "helllo world to github blog on testing production will start soon",
      "tags": ["node", "bootstrap"]
   }, {
      "postid": 3,
      "title": "modules for angular dev's",
      "author": "Yashdeep hinge",
      "content": "helllo world to github blog on testing production will start soon",
      "tags": ["css", "html"]
   }, {
      "postid": 4,
      "title": "Services in angular",
      "author": "Yashdeep hinge",
      "content": "helllo world to github blog on testing production will start soon",
      "tags": ["express", "html", "angular"]
   }, {
      "postid": 5,
      "title": "10 useful modules for angular dev's",
      "author": "Yashdeep hinge",
      "content": "helllo world to github blog on testing production will start soon",
      "tags": ["node", "html", "bootstrap"]
   }];
   $scope.tags = ["angular", "node", "css", "html", "js", "bootstrap", "express"];
   $scope.postCount = function(tag) {
      var count = 0;
      for (i = 0; i < $scope.posts.length; i++) {
         var tags = $scope.posts[i].tags;
         console.log(tags);
         for (j = 0; j < tags.length; j++) {
            if (tags[j] == tag) {
               count++;
               console.log($scope.posts[i]);
            }
         }
      }
      return count;
   };
   $scope.post = $scope.posts[0];
   $scope.showpost = function(postid) {
      $scope.taggeds = null;
      console.log(postid);
      $scope.post = $scope.posts[postid - 1];
   };
   $scope.showtagged = function(tag) {
      console.log(tag);
      $scope.post = null;
      $scope.taggeds = [];
      for (i = 0; i < $scope.posts.length; i++) {
         var tags = $scope.posts[i].tags;
         console.log(tags);
         for (j = 0; j < tags.length; j++) {
            if (tags[j] == tag) {
               $scope.taggeds.push($scope.posts[i]);
               console.log($scope.posts[i]);
            }
         }
      }
   }
}]);
