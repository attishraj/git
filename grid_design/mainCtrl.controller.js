angular.module('portfolio')
  .controller('mainCtrl', function($scope,profile) {
    profile.getData().success(function(profile) {
      $scope.profile = profile;
    });
    $scope.streams = [
           "Engineering",
           "Others"

       ];
       $scope.levels = [
         "U G",
         "P G",
         "Doctoral",
         "Certification"
     ];
  });
