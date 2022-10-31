// rh_upload.js

var querystring = require("querystring")

function rh_upload(response, postData) {
    console.log(    )
    console.log("Request Handler 'upload' called")
  
    let received_text = querystring.parse(postData).text
    // let received_text = querystring.parse(postData).text
    let upload_page = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>uploaded text</title>
            <style>
                img {float: right; display: block; max-width: 10%;}
            </style>
        </head>
        <body>
            <p>Uploaded text:</p>
            <textarea name="text" rows="10" cols="40">${received_text}
            </textarea>
            <br>
            <img src="http://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML 4.01">
        </body>
    </html>
    `
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(upload_page)
    response.end()
  }
  
  exports.rh_upload = rh_upload