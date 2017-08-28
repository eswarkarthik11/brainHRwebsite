'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute','myApp.login'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

        $routeProvider.when('/login',{
            templateUrl: 'login/login.html',
            controller:"loginController"

        })
        $routeProvider.when('/home',{
            templateUrl: 'home/home.html',
            controller:""
        })
        $routeProvider.when('/about',{
            templateUrl: 'about/about.html',
            controller:""
        })
        $routeProvider.when('/services',{
            templateUrl: 'services/services.html',
            controller:""
        })
        $routeProvider.when('/careers',{
            templateUrl: 'careers/careers.html',
            controller:""
        })
        $routeProvider.when('/contact',{
            templateUrl: 'contact/contact.html',
            controller:""
        });
        $routeProvider.otherwise({redirectTo: '/home'});
}])
