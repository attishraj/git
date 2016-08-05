angular.module('portfolio', ['ngMaterial' , 'ngRoute'])
.controller('DemoCtrl', function($scope) {
    $scope.user = {
      name : 'Nishtha',
      when : '2010',
      where : 'Jalandhar',
    }
});
