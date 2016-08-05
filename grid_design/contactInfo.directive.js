angular.module('portfolio')
 .directive('contactInfo',function() {
 return {
     templateUrl: 'contact.directive.html',
     scope: {
       chickletPath: '=chickletPath'
     },
     controller: function($scope) {
       $scope.chickletData = $scope.chickletPath['chicklet-data'];
      console.log($scope.chickletPath['chicklet-data']);
     }
}});
