$(document).ready(function() {
    var board2 = Chessboard('board2', {
      draggable: false,
      dropOffBoard: 'trash',
      sparePieces: true,
      appearSpeed: 500
    });
    
    $('#startBtn').on('click', board2.start);
    $('#clearBtn').on('click', board2.clear);
  });
  