// sudoq.js

const server = require("./sudoq_server")
const router = require("./sudoq_router")
const rh_start= require("./sudoq_modules/sudoq_rh_start")
const rh_show_initial_arrangement = require("./sudoq_modules/sudoq_rh_show_initial_arrangement")
const rh_populate_empty_cells_with_all_values = require("./sudoq_modules/sudoq_rh_populate_empty_cells_with_all_values")
const rh_clean_initial_arrangement = require("./sudoq_modules/sudoq_rh_clean_initial_arrangement")
const rh_clean_fixed_cells_scope = require("./sudoq_modules/sudoq_rh_clean_fixed_cells_scope")

var handle = {}
handle["/"] = rh_start.rh_start
handle["/start"] = rh_start.rh_start
handle["/rh_show_initial_arrangement"] = rh_show_initial_arrangement.rh_show_initial_arrangement
handle["/rh_populate_empty_cells_with_all_values"] = rh_populate_empty_cells_with_all_values.rh_populate_empty_cells_with_all_values
handle["/rh_clean_initial_arrangement"] = rh_clean_initial_arrangement.rh_clean_initial_arrangement
handle["/rh_clean_fixed_cells_scope"] = rh_clean_fixed_cells_scope.rh_clean_fixed_cells_scope

server.start_sudoq_server(router.route, handle)