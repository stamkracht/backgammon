'use strict';

angular.module('sk.backgammon', [])
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.stones = [
      {
        position: 1,
        player: 'white'
      },
      {
        position: 1,
        player: 'white'
      },
      {
        position: 6,
        player: 'black'
      },
      {
        position: 6,
        player: 'black'
      },
      {
        position: 6,
        player: 'black'
      },
      {
        position: 6,
        player: 'black'
      },
      {
        position: 6,
        player: 'black'
      },
      {
        position: 8,
        player: 'black'
      },
      {
        position: 8,
        player: 'black'
      },
      {
        position: 8,
        player: 'black'
      },
      {
        position: 12,
        player: 'white'
      },
      {
        position: 12,
        player: 'white'
      },
      {
        position: 12,
        player: 'white'
      },
      {
        position: 12,
        player: 'white'
      },
      {
        position: 12,
        player: 'white'
      },
      {
        position: 13,
        player: 'black'
      },
      {
        position: 13,
        player: 'black'
      },
      {
        position: 13,
        player: 'black'
      },
      {
        position: 13,
        player: 'black'
      },
      {
        position: 13,
        player: 'black'
      },
      {
        position: 17,
        player: 'white'
      },
      {
        position: 17,
        player: 'white'
      },
      {
        position: 17,
        player: 'white'
      },
      {
        position: 19,
        player: 'white'
      },
      {
        position: 19,
        player: 'white'
      },
      {
        position: 19,
        player: 'white'
      },
      {
        position: 19,
        player: 'white'
      },
      {
        position: 19,
        player: 'white'
      },
      {
        position: 24,
        player: 'black'
      },
      {
        position: 24,
        player: 'black'
      },
    ];
  }]);

