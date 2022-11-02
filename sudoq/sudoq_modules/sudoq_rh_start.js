// sudoq_rh_start.js

var fs = require('fs')
var sudoq_board = require('./sudoq_board')
var board = sudoq_board.board

function rh_start(res) {
  var board_in_progress = []
  var cells_in_progress = []
  res.end(board)
} 

exports.rh_start = rh_start