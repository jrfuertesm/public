// sudoq_rh_clean_column_scopejs

function rh_clean_column_scope(value_to_clean, file_cell, column_cell) {
    let fixed_cells_in_column_check = []
    for (let i = 0; i < 9; i++) {
        if (board_in_progress[i][column_cell] !== board_in_progress[file_cell][column_cell]) {
            switch (typeof board_in_progress[i][column_cell]) {
                case 'object':
                    if (board_in_progress[i][column_cell].size > 1) {
                        if (board_in_progress[i][column_cell].has(value_to_clean)) {
                            board_in_progress[i][column_cell].delete(value_to_clean)
                            if (board_in_progress[i][column_cell].size === 1) {
                                board_in_progress[i][column_cell] = [...board_in_progress[i][column_cell]][0]
                                let cell_found = []
                                cell_found.push(i, column_cell)
                                fixed_cells_in_column_check.push(cell_found)
                            }
                        }
                    }
                break;

                case 'string':
                break;

                default: console.log('...no data type (string or object) for cell')
              }
        } else {
        }
    }
    return fixed_cells_in_column_check
}

exports.rh_clean_column_scope = rh_clean_column_scope