angular.module('portfolio')
 .directive('personalInfo',function() {
 return {
     templateUrl: 'personal.directive.html',
     scope: {
       chickletPath: '=chickletPath'
     },
     controller: function($scope) {
       $scope.chickletData = $scope.chickletPath['chicklet-data'];
      console.log($scope.chickletPath['chicklet-data']);
     }
 }
});
