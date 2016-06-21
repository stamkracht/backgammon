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

    $scope.moveStone = function (position, player) {
      var _stones = $scope.stones.filter(function (stone) {
        return stone.position === position;
      });
      if ( $scope.active_stone ) {
        if ( _stones.length < 2 ) {
          $scope.active_stone.position = position;
          if ( _stones.length === 1 && _stones[0].player !== $scope.active_stone.player ) {
            _stones[0].position = -1;
          }
        } else if ( $scope.active_stone.player === _stones[0].player ) {
          $scope.active_stone.position = position;
        }
        $scope.active_stone.active = false;
        $scope.active_stone = undefined;
      } else {
        if ( !!_stones.length ) {
          if ( !!player ) {
            _stones = _stones.filter(function (stone) {
              return stone.player === player;
            });
          }
          $scope.active_stone = _stones[_stones.length-1];
        }
      }
    };
  }]);

