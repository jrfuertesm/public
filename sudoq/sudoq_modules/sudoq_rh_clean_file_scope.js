// sudoq_rh_clean_file_scope.js

function rh_clean_file_scope(value_to_clean, file_cell, column_cell) {
    let fixed_cells_in_file_check = []
    for (let j = 0; j < 9; j++) {
        if (board_in_progress[file_cell][j] !== board_in_progress[file_cell][column_cell]) {
            switch (typeof board_in_progress[file_cell][j]) {
                case 'object':
                    if (board_in_progress[file_cell][j].size > 1) {
                        if (board_in_progress[file_cell][j].has(value_to_clean)) {
                            board_in_progress[file_cell][j].delete(value_to_clean)
                            if (board_in_progress[file_cell][j].size === 1) {
                                board_in_progress[file_cell][j] = [...board_in_progress[file_cell][j]][0]
                                let cell_found = []
                                cell_found.push(file_cell, j)
                                fixed_cells_in_file_check.push(cell_found)
                            }
                        }
                    }
                break;
                case 'string':

                break;
                default: console.log('...no data type (string or object) dor cell')
              }
        } else {
        }
    }
    return fixed_cells_in_file_check
}

exports.rh_clean_file_scope = rh_clean_file_scope