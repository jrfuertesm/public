// rh_report.js

const fs = require('fs')
const querystring = require("querystring")
var rh_main = require("./rh_main")
var generated_report = rh_main.generated_report

function rh_report(response, postData) {
    generated_report = []

    generated_report.first_input_field = querystring.parse(postData).first_input_field
    generated_report.first_radio_selection = querystring.parse(postData).first_radio_selection
    generated_report.free_text = querystring.parse(postData).free_text

    let report_for_printing = `
    Generated Report

first input field: ${generated_report.first_input_field}
first radio selection: ${generated_report.first_radio_selection}
free text: ${generated_report.free_text}

...end of report...

    `

    function create_normalized_date() {
      let current_date = new Date()

      let current_month = current_date.toLocaleString('en-US', { month: 'long'})

      let current_day = current_date.toLocaleDateString('en-US', { day:"numeric"})
      let current_day_normalized = ''
      if (current_day.length == 1) {current_day_normalized = '0' + current_day} else {current_day_normalized = current_day}

      let current_hour = current_date.getHours()
      let current_hour_normalized = ''
      if (current_hour.length == 1) {current_hour_normalized = '0' + current_hour} else {current_hour_normalized = current_hour}

      let minuto_actual_normalized = ''
      let current_minute = current_date.getMinutes()
      if (current_minute.length == 1) {current_minute_normalized = '0' + current_minute} else {current_minute_normalized = current_minute}

      let normalized_date = '_' + current_month +  current_day_normalized + '_' + '_' + current_hour_normalized + '_' + current_minute_normalized

      return normalized_date
    }

    let date_for_report = create_normalized_date()

    generated_report.report_name = './' + generated_report.first_input_field + date_for_report + '.txt'

    fs.writeFileSync(generated_report.report_name, report_for_printing)
    console.log(    )
    console.log('created text file ...')

    let report_page = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>report - mrg</title>
            <style>
            div {border: 0px solid black;}
                p{
                  margin-top:0;
                  margin-bottom:0
                }
                img {float: right; display: block; max-width: 10%;}
            </style>
        </head>
        <body>
            <h1>mrg - report generated</h1>

            <div>
              <p>first input field: ${generated_report.first_input_field}</p>
              <p>first radio selection: ${generated_report.first_radio_selection}</p>
              <p>free text: ${generated_report.free_text}</p>
            </div>
            <br>

            <form action="/rh_main" method="post">
                <input type="submit" value="...new report">
            </form>
            <br>

            <img src="http://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML 4.01">
        </body>
    </html>
    `
    
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(report_page)
  }
  
  exports.rh_report = rh_report