'use strict';

angular.module('sk.backgammon', [])
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.stones = Array.apply(null, new Array(30)).map(function(e, i, arr) {
      return {
        player: (i % 2 ) ? 'black' : 'white',
        position: i
      }
    });
  }]);

