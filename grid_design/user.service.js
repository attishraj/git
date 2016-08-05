angular.module('portfolio')
    .service('user', ["$http", function ($http) {
        this.getData = function () {
            return $http.get("http://localhost:3000/profiles");
        }
    }]);
