// rh_main.js

let main_page = require("./main_page")
let main_page_2 = main_page.main_page

function rh_main(response) {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.end(main_page_2)
}

exports.rh_main = rh_main