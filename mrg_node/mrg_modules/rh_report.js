// rh_report.js

var querystring = require("querystring")

function rh_report(response, postData) {

    let first_input_field = querystring.parse(postData).first_input_field
    let first_radio_selection = querystring.parse(postData).first_radio_selection

    let first_pre_text = "...first predefined text"
    if (first_pre_text === 'on') {
      console.log('el check está activado')
    }
    let free_text = querystring.parse(postData).free_text

    let report_page = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>report - mrg</title>
            <style>
            div {border: 1px solid black;}
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
              <p>first input field: ${first_input_field}</p>
              <p>first pre text: ${first_pre_text}</p>
              <p>first radio selection: ${first_radio_selection}</p>
              <p>free text: ${free_text}</p>
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
    response.write(report_page)
    response.end()
  }
  
  exports.rh_report = rh_report