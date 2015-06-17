'use strict';

/**
 * @ngdoc function
 * @name inAGiffyApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the inAGiffyApp
 */
angular.module('inAGiffyApp')
  .controller('UserCtrl', function ($scope, $firebaseArray, $firebaseAuth) {
    var ref = new Firebase('https://in-a-giffy.firebaseio.com/users');
    var favoritesRef = new Firebase('https://in-a-giffy.firebaseio.com/users/favorites');
    $scope.users = $firebaseArray(ref);
    $scope.favorites = $firebaseArray(favoritesRef);
    var auth = $firebaseAuth(ref);
    $scope.user;

    $scope.facebookSignIn = function() {
      auth.$authWithOAuthPopup('facebook').then(function(authData) {
        $scope.users.$add({
          firstName: authData.facebook.cachedUserProfile.first_name,
          lastName: authData.facebook.cachedUserProfile.last_name,
          facebook_uid: authData.facebook.id,
          profile_picture: authData.facebook.cachedUserProfile.picture.data.url
        });
        console.log('Logged in as:', authData);
      }).catch(function(error){
        console.log('Authentication failed:', error);
      });
    };

    $scope.users.$loaded().then(function(usersArray) {
      $scope.user = usersArray.$getRecord('-JryD68yEacswVDL1V0A');
    }).catch(function(error) {
      console.log('Error:', error);
    });

    $scope.favoriteGif = function(gif) {
      $scope.favorites.$add({
        user: $scope.user.$id,
        gifImage: gif.images.fixed_height.url,
        gifId: gif.id
      });
    };
  });
