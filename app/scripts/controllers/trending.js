'use strict';

/**
 * @ngdoc function
 * @name inAGiffyApp.controller:TrendingCtrl
 * @description
 * # TrendingCtrl
 * Controller of the inAGiffyApp
 */
angular.module('inAGiffyApp')
  .controller('TrendingCtrl', function ($scope, $http) {
    $scope.trendingGifs = [];

    $http.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=20').
      success(function(data, status, headers, config) {
        $scope.trendingGifs = data.data;
      }).
      error(function(data, status, headers, config) {

      });
  });
