// index.js

var server = require("./server")
var router = require("./router")
var rh_start = require("./capture_text_modules/rh_start.js")
var rh_upload = require("./capture_text_modules/rh_upload.js")
var handle = {}

handle["/"] = rh_start.rh_start
handle["/rh_start"] = rh_start.rh_start
handle["/rh_upload"] = rh_upload.rh_upload

server.start(router.route, handle)