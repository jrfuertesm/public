// index.js

const server = require("./server")
const router = require("./router")
const rh_main = require("./mrg_modules/rh_main.js")
const rh_report = require("./mrg_modules/rh_report.js")
const handle = {}

handle["/"] = rh_main.rh_main
handle["/rh_main"] = rh_main.rh_main
handle["/rh_report"] = rh_report.rh_report

server.start(router.route, handle)