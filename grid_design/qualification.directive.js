angular.module('portfolio')
 .directive('qCard',function() {
 return {
     templateUrl: 'qualification.tmpl.html',
     scope: {
       chickletPath: '=chickletPath'
     },
     controller: function($scope) {
       $scope.chickletData = $scope.chickletPath['chicklet-data'];
      console.log($scope.chickletPath['chicklet-data']);
     }
 }
});
