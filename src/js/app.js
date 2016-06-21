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

    $scope.moveStone = function (position) {
      if ( $scope.active_stone ) {
        var _stones = $scope.stones.filter(function (stone) {
          return stone.position === position;
        });
        if ( _stones.length < 2 ) {
          $scope.active_stone.position = position;
        } else if ( $scope.active_stone.player === _stones[0].player ) {
          $scope.active_stone.position = position;
        }
        $scope.active_stone.active = false;
        $scope.active_stone = undefined;
      } else {
        angular.forEach($scope.stones, function (stone) {
          if ( stone.position === position ) {
            $scope.active_stone = stone;
          }
        });
      }
    };
  }]);

