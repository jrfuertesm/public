 // sudoq_rh_clean_square_scope.js

function rh_clean_square_scope(value_to_clean, file_cell, column_cell) {
    let final_result = []
    let fixed_cells_in_square_check = []

    function rh_clean_value_in_square (param_fila, param_columna) {
        for (let i = param_fila; i < param_fila + 3; i++) {
            for (let j = param_columna; j < param_columna + 3; j++) {
                if (board_in_progress[i][j] !== board_in_progress[file_cell][column_cell]) {
                switch (typeof board_in_progress[i][j]) {
                    case 'object':
                        if (board_in_progress[i][j].size > 1) {
                            if (board_in_progress[i][j].has(value_to_clean)) {    
                                board_in_progress[i][j].delete(value_to_clean)
                                if (board_in_progress[i][j].size === 1) {
                                    board_in_progress[i][j] = [...board_in_progress[i][j]][0]
                                    let celda_encontrada = []
                                    celda_encontrada.push(i, j)
                                    fixed_cells_in_square_check.push(celda_encontrada)
                                }
                            }
                        }
                    break;

                    case 'string':
                    break;

                    default: console.log('no data type (string or object) for cell')
                }
            } else {
            }
            }
        }
        return fixed_cells_in_square_check
    }

    switch (file_cell) {
        case 0: case 1: case 2: 
            switch(column_cell) {
                case 0: case 1: case 2:
                    final_result = rh_clean_value_in_square(0,0)
                break;
                case 3: case 4: case 5:
                    final_result = rh_clean_value_in_square(0,3)
                break;
                case 6: case 7: case 8:
                    final_result = rh_clean_value_in_square(0,6)
                break;
            }
        break;

        case 3: case 4: case 5:
            switch(column_cell) {
                case 0: case 1: case 2:
                    final_result = rh_clean_value_in_square(3,0)
                break;
                case 3: case 4: case 5:
                    final_result = rh_clean_value_in_square(3,3)
                break;
                case 6: case 7: case 8:
                    final_result = rh_clean_value_in_square(3,6)
                break;
            }
        break;

        case 6: case 7: case 8:
            switch(column_cell) {
                case 0: case 1: case 2:
                    final_result = rh_clean_value_in_square(6,0)
                break;
                case 3: case 4: case 5:
                    final_result = rh_clean_value_in_square(6,3)
                break;
                case 6: case 7: case 8:
                    final_result = rh_clean_value_in_square(6,6)
                break;
            }
        break;
        }
        return final_result
}

exports.rh_clean_square_scope = rh_clean_square_scope