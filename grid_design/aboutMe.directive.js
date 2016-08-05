angular.module('portfolio')
  .directive('aboutMe', function() {
    return {
      templateUrl: 'aboutMe.tmpl.html',
      scope: {
        sectionName: '@'
      },
      transclude: {
        'placeholder-a': '?placeholderA',
        'placeholder-b': '?placeholderB',
        'placeholder-c': '?placeholderC',
        'placeholder-d': '?placeholderD'
      },
      controller: function($rootScope,$scope) {
        // console.log($rootScope["placeholder-a"]);
        console.log($scope.sectionName);
      }
    }
  });
