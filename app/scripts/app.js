'use strict';

/**
 * @ngdoc overview
 * @name inAGiffyApp
 * @description
 * # inAGiffyApp
 *
 * Main module of the application.
 */
angular
  .module('inAGiffyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/trending', {
        templateUrl: 'views/trending.html',
        controller: 'TrendingCtrl'
      })
      .when('/favorited', {
        templateUrl: 'views/favorited.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
