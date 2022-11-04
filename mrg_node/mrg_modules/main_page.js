// main_page.js

let main_page = `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>main - mrg</title>
        <style>
            img {float: right; display: block; max-width: 10%;}
        </style>
    </head>
    <body>

    <h1>mrg - main</h1>

        <form action="/rh_report" method="post">

            <label for="first_input_field">first input field
                <input name="first_input_field" id="first_input_field" type="text" placeholder="...first input field"><br>
            </label>
            <br>

            <label for="first_pre_text">first pre text
                <input id="first_pre_text" name="first_pre_text" type="checkbox">
            </label>
            <br>

            <fieldset id="first_radio_group">
                <legend>First radio group</legend>  
                <label for="first_a">first option
                    <input id="first_a" name="first_radio_selection" type="radio" value="first">
                </label>
                <br>
                <label for="first_b">second option
                    <input id="first_b" name="first_radio_selection" type="radio" value="second">
                </label>
            </fieldset>
            <br>

			<label for="free_text">free text
				<textarea rows="8" cols="28" name="free_text" id="free_text" placeholder="...free text"></textarea>
			</label>
            <br>

          <input type="submit" value="...create report">
        </form>

        <img src="http://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML 4.01">
    </body>
</html>
`

exports.main_page = main_page