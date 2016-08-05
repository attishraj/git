angular.module('portfolio')
  .controller('DemoCtrl', ["$scope","$mdDialog","user", function($scope,$mdDialog,user) {
    user.getData().then(function(response) {
      $scope.content = response.data;
// console.log($scope.content.Name);
// console.log($scope.content);
    });
    $scope.isObject = function(object,key) {
      if(angular.isObject(object[key])) {
        return true;
      }
      return false;
    };
    $scope.types = [
         "School",
         "College",
         "Institute",
         "University"
     ];

     $scope.levels = [
          "U G",
          "P G",
          "Doctoral",
          "Certification"
      ];
      $scope.streams = [
           "Enginnering",
           "Others"

       ];


  }]);
