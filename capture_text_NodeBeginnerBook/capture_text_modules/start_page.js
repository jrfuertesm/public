// start_page.js

let start_page = `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>send text</title>
        <style>
            img {float: right; display: block; max-width: 10%;}
        </style>
    </head>
    <body>
        <form action="/rh_upload" method="post">
            <p>Text to upload:</p>
            <textarea name="text" rows="10" cols="40" placeholder="...type your text here"></textarea>
            <br>
            <input type="submit" value="Submit text">
        </form>
        <img src="http://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML 4.01">
    </body>
</html>
`

exports.start_page = start_page