'use strict';

/**
 * @ngdoc function
 * @name inAGiffyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inAGiffyApp
 */
angular.module('inAGiffyApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.searchQuery = [];

    $scope.searchGif = function() {
      var params = {};
      params.api_key = 'dc6zaTOxFJmzC';
      params.q = $scope.gif.split(',').join('+');

      $http.get('http://api.giphy.com/v1/gifs/search', { params: params }).
        success(function(data, status, headers, config) {
          $scope.searchQuery = data.data;
          $scope.gif = '';
        }).
        error(function(data, status, headers, config) {

        });
    };
  });
