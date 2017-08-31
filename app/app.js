'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute','myApp.login']).
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
        })
        $routeProvider.when('/admin',{
            templateUrl: 'admin/admin.html',
            controller:""
        });
        $routeProvider.otherwise({redirectTo: '/home'});
}])
    .controller('initController',function($scope) {

        $scope.homeStatus="notSelected";
        $scope.aboutStatus="notSelected";
        $scope.servicesStatus="notSelected";
        $scope.careersStatus="notSelected";
        $scope.contactStatus="notSelected";
        $scope.loginStatus="notSelected";

        $scope.homeStatusChange = function () {
             $scope.homeStatus="selected";
             $scope.aboutStatus="notSelected";
             $scope.servicesStatus="notSelected";
             $scope.careersStatus="notSelected";
             $scope.contactStatus="notSelected";
             $scope.loginStatus="notSelected";
            }

        $scope.aboutStatusChange = function (){
            $scope.homeStatus="notSelected";
            $scope.aboutStatus="selected";
            $scope.servicesStatus="notSelected";
            $scope.careersStatus="notSelected";
            $scope.contactStatus="notSelected";
            $scope.loginStatus="notSelected";
        }

        $scope.servicesStatusChange = function (){
            $scope.homeStatus="notSelected";
            $scope.aboutStatus="notSelected";
            $scope.servicesStatus="selected";
            $scope.careersStatus="notSelected";
            $scope.contactStatus="notSelected";
            $scope.loginStatus="notSelected";
        }

        $scope.careersStatusChange = function (){
            $scope.homeStatus="notSelected";
            $scope.aboutStatus="notSelected";
            $scope.servicesStatus="notSelected";
            $scope.careersStatus="selected";
            $scope.contactStatus="notSelected";
            $scope.loginStatus="notSelected";
        }

        $scope.contactStatusChange = function (){
            $scope.homeStatus="notSelected";
            $scope.aboutStatus="notSelected";
            $scope.servicesStatus="notSelected";
            $scope.careersStatus="notSelected";
            $scope.contactStatus="selected";
            $scope.loginStatus="notSelected";
        }

        $scope.loginStatusChange = function (){
            $scope.homeStatus="notSelected";
            $scope.aboutStatus="notSelected";
            $scope.servicesStatus="notSelected";
            $scope.careersStatus="notSelected";
            $scope.contactStatus="notSelected";
            $scope.loginStatus="selected";
        }
    });