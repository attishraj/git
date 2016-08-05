angular.module('portfolio')
 .directive('qCard',function() {
 return {
     templateUrl: 'qualification.tmpl.html',
     scope: {
       value:'@',
       img:'@'
     }
 }
});
