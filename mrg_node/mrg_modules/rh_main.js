// rh_main.js

const main_page_file = require("./main_page")
const main_page = main_page_file.main_page

var generated_report = []

function rh_main(response) {
  console.log(    )
  console.log('... rh_main called')
  response.writeHead(200, {"Content-Type": "text/html"})
  response.end(main_page)
}

exports.generated_report = generated_report
exports.rh_main = rh_main