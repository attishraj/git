angular.module('portfolio')
  .directive('educationSection', function() {
    return {
      templateUrl: 'education.section.html',
      scope: {
        sectionName: '@'
      },
      transclude: {
        'placeholder-a': '?placeholderA'
        // 'placeholder-b': '?placeholderB',
        // 'placeholder-c': '?placeholderC',
        // 'placeholder-d': '?placeholderD'
      },
      controller: function($rootScope,$scope) {
        // console.log($rootScope["placeholder-a"]);
        // console.log($scope.sectionName);
      }
    }
  });
