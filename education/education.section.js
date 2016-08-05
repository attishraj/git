angular.module('portfolio')
 .directive('educationSection',function() {
 return {
     templateUrl: 'education.section.html',
     scope: {
       value:'@',
       img:'@'
     }
 }
});
