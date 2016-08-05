angular.module('portfolio')
 .directive('iCard',function() {
 return {
     templateUrl: 'institution.tmpl.html',
     scope: {
       value:'@',
       img:'@'
     }
 }
});
