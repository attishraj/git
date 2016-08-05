angular.module('portfolio')
 .directive('otherInfo',function() {
 return {
     templateUrl: 'other.directive.html',
     scope: {
       chickletPath: '=chickletPath'
     },
     controller: function($scope) {
       $scope.chickletData = $scope.chickletPath['chicklet-data'];
      console.log($scope.chickletPath['chicklet-data']);
     }
 }
});
