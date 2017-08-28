angular.module('myApp.login', ['ngResource'])

    .factory('JsonService', function($resource) {
        return $resource('package.json',{ }, {
            getData: {method:'GET', isArray: false}
        });
    })
.controller('loginController',function($scope,JsonService) {

    $scope.signin = function () {

        JsonService.getData(function(data){
           /* $scope.name = data.username;
            $scope.children = data.password;*/
           console.log(data);
        });
    }

});


