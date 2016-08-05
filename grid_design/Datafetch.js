angular.module('portfolio')
 .controller('DemoCtrl', ["$scope","user","page",function($scope,user,page) {
   user.getData().then(function(response) {
     $scope.name = response.data.Name;
     $scope.profileImg =  response.data.profileImg;
     console.log($scope, response.data)
   });
   page.getData().then(function(response) {
     $scope.backgroundImg = response.data.img;
   });
 }]);
