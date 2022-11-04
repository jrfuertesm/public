// index.js

var server = require("./server")
var router = require("./router")
var rh_main = require("./mrg_modules/rh_main.js")
var rh_report = require("./mrg_modules/rh_report.js")
var handle = {}

handle["/"] = rh_main.rh_main
handle["/rh_main"] = rh_main.rh_main
handle["/rh_report"] = rh_report.rh_report

server.start(router.route, handle)