angular.module('portfolio')
 .directive('sCard',function() {
 return {
     templateUrl: 'summary.tmpl.html',
     scope: {
       value:'@',
       img:'@'
     }
 }
});
