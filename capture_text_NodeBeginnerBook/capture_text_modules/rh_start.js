// rh_start.js

let start_page = require("./start_page")
let show_start_page = start_page.start_page

function rh_start(response) {
  console.log(    )
  console.log("...Request Handler 'start' called")

  response.writeHead(200, {"Content-Type": "text/html"})
  response.end(show_start_page)
}

exports.rh_start = rh_start