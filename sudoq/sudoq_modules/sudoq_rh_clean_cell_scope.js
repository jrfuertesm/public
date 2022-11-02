// sudoq_rh_clean_cell_scope.js

var rh_clean_file_scope = require('./sudoq_rh_clean_file_scope')
var rh_clean_column_scope = require('./sudoq_rh_clean_column_scope')
var rh_clean_square_scope = require('./sudoq_rh_clean_square_scope')

function rh_clean_cell_scope(value_to_clean, file_cell, column_cell) {
    let first = rh_clean_file_scope.rh_clean_file_scope(value_to_clean, file_cell, column_cell)
    let second = rh_clean_column_scope.rh_clean_column_scope(value_to_clean, file_cell, column_cell)
    let third  = rh_clean_square_scope.rh_clean_square_scope(value_to_clean, file_cell, column_cell)
    let all_cells_found = [].concat(first, second, third)
    cells_in_progress = all_cells_found 
    return cells_in_progress
}

exports.rh_clean_cell_scope = rh_clean_cell_scope