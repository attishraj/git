angular.module('portfolio')
 .directive('summaryInfo',function() {
 return {
     templateUrl: 'summary.directive.html',
     scope: {
       chickletPath: '=chickletPath'
     },
     controller: function($scope) {
       $scope.chickletData = $scope.chickletPath['chicklet-data'];
      console.log($scope.chickletPath['chicklet-data']);
     }
 }
});
