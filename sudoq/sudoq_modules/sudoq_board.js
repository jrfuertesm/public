var board = `
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>sudoq</title>
      <style>
        html, body {
          background-color: #FAFAFA
        }
        
        img {float: right; display: block; max-width: 10%;}

        table {
          border: 2px solid #000000;
        }

        td {
          border: 1px solid #000000;
          text-align: center;
          vertical-align: middle;  
        }
  
        input {
          color: #000000;
          padding: 0;
          border: 0;
          text-align: center;
          width: 48px;
          height: 48px;
          font-size: 24px;
          background-color: #FFFFFF;
          outline: none;
        }
  
        input:disabled {
          background-color: #EEEEEE;
          color: red;
        }
  
        #cell-00, #cell-01, #cell-02 { border-top: 2px solid #000000; }
        #cell-02, #cell-12, #cell-22 { border-right: 2px solid #000000; }
        #cell-20, #cell-21, #cell-22 { border-bottom: 2px solid #000000; }
        #cell-00, #cell-10, #cell-20 { border-left: 2px solid #000000; }
  
        #cell-03, #cell-04, #cell-05 { border-top: 2px solid #000000; }
        #cell-05, #cell-15, #cell-25 { border-right: 2px solid #000000; }
        #cell-23, #cell-24, #cell-25 { border-bottom: 2px solid #000000; }
        #cell-03, #cell-13, #cell-23 { border-left: 2px solid #000000; }
  
        #cell-06, #cell-07, #cell-08 { border-top: 2px solid #000000; }
        #cell-08, #cell-18, #cell-28 { border-right: 2px solid #000000; }
        #cell-26, #cell-27, #cell-28 { border-bottom: 2px solid #000000; }
        #cell-06, #cell-16, #cell-26 { border-left: 2px solid #000000; }
  
        #cell-30, #cell-31, #cell-32 { border-top: 2px solid #000000; }
        #cell-32, #cell-42, #cell-52 { border-right: 2px solid #000000; }
        #cell-50, #cell-51, #cell-52 { border-bottom: 2px solid #000000; }
        #cell-30, #cell-40, #cell-50 { border-left: 2px solid #000000; }
  
        #cell-33, #cell-34, #cell-35 { border-top: 2px solid #000000; }
        #cell-35, #cell-45, #cell-55 { border-right: 2px solid #000000; }
        #cell-53, #cell-54, #cell-55 { border-bottom: 2px solid #000000; }
        #cell-33, #cell-43, #cell-53 { border-left: 2px solid #000000; }
  
        #cell-36, #cell-37, #cell-38 { border-top: 2px solid #000000; }
        #cell-38, #cell-48, #cell-58 { border-right: 2px solid #000000; }
        #cell-56, #cell-57, #cell-58 { border-bottom: 2px solid #000000; }
        #cell-36, #cell-46, #cell-56 { border-left: 2px solid #000000; }
  
        #cell-60, #cell-61, #cell-62 { border-top: 2px solid #000000; }
        #cell-62, #cell-72, #cell-82 { border-right: 2px solid #000000; }
        #cell-80, #cell-81, #cell-82 { border-bottom: 2px solid #000000; }
        #cell-60, #cell-70, #cell-80 { border-left: 2px solid #000000; }
  
        #cell-63, #cell-64, #cell-65 { border-top: 2px solid #000000; }
        #cell-65, #cell-75, #cell-85 { border-right: 2px solid #000000; }
        #cell-83, #cell-84, #cell-85 { border-bottom: 2px solid #000000; }
        #cell-63, #cell-73, #cell-83 { border-left: 2px solid #000000; }
  
        #cell-66, #cell-67, #cell-68 { border-top: 2px solid #000000; }
        #cell-68, #cell-78, #cell-88 { border-right: 2px solid #000000; }
        #cell-86, #cell-87, #cell-88 { border-bottom: 2px solid #000000; }
        #cell-66, #cell-76, #cell-86 { border-left: 2px solid #000000; }

      </style>
  </head>

  <body>
    <h1>sudoq</h1>
    <form action="/rh_show_initial_arrangement" method="post">
    <button>type initial distribution and click</button>
    <table>
    <tr>
      <td><input name="cell-00" id="cell-00" type="text" autofocus></td>
      <td><input name="cell-01" id="cell-01" type="text"></td>
      <td><input name="cell-02" id="cell-02" type="text"></td>
      
      <td><input name="cell-03" id="cell-03" type="text"></td>
      <td><input name="cell-04" id="cell-04" type="text"></td>
      <td><input name="cell-05" id="cell-05" type="text"></td>
      
      <td><input name="cell-06" id="cell-06" type="text"></td>
      <td><input name="cell-07" id="cell-07" type="text"></td>
      <td><input name="cell-08" id="cell-08" type="text"></td>
    </tr>

    <tr>
      <td><input name="cell-10" id="cell-10" type="text"></td>
      <td><input name="cell-11" id="cell-11" type="text"></td>
      <td><input name="cell-12" id="cell-12" type="text"></td>
      
      <td><input name="cell-13" id="cell-13" type="text"></td>
      <td><input name="cell-14" id="cell-14" type="text"></td>
      <td><input name="cell-15" id="cell-15" type="text"></td>
      
      <td><input name="cell-16" id="cell-16" type="text"></td>
      <td><input name="cell-17" id="cell-17" type="text"></td>
      <td><input name="cell-18" id="cell-18" type="text"></td>
    </tr>

    <tr>          
      <td><input name="cell-20" id="cell-20" type="text"></td>
      <td><input name="cell-21" id="cell-21" type="text"></td>
      <td><input name="cell-22" id="cell-22" type="text"></td>
      
      <td><input name="cell-23" id="cell-23" type="text"></td>
      <td><input name="cell-24" id="cell-24" type="text"></td>
      <td><input name="cell-25" id="cell-25" type="text"></td>
      
      <td><input name="cell-26" id="cell-26" type="text"></td>
      <td><input name="cell-27" id="cell-27" type="text"></td>
      <td><input name="cell-28" id="cell-28" type="text"></td>
    </tr>

    <tr>          
      <td><input name="cell-30" id="cell-30" type="text"></td>
      <td><input name="cell-31" id="cell-31" type="text"></td>
      <td><input name="cell-32" id="cell-32" type="text"></td>
      
      <td><input name="cell-33" id="cell-33" type="text"></td>
      <td><input name="cell-34" id="cell-34" type="text"></td>
      <td><input name="cell-35" id="cell-35" type="text"></td>
      
      <td><input name="cell-36" id="cell-36" type="text"></td>
      <td><input name="cell-37" id="cell-37" type="text"></td>
      <td><input name="cell-38" id="cell-38" type="text"></td>
    </tr>

    <tr>          
      <td><input name="cell-40" id="cell-40" type="text"></td>
      <td><input name="cell-41" id="cell-41" type="text"></td>
      <td><input name="cell-42" id="cell-42" type="text"></td>
      
      <td><input name="cell-43" id="cell-43" type="text"></td>
      <td><input name="cell-44" id="cell-44" type="text"></td>
      <td><input name="cell-45" id="cell-45" type="text"></td>
      
      <td><input name="cell-46" id="cell-46" type="text"></td>
      <td><input name="cell-47" id="cell-47" type="text"></td>
      <td><input name="cell-48" id="cell-48" type="text"></td>
    </tr>

    <tr>          
      <td><input name="cell-50" id="cell-50" type="text"></td>
      <td><input name="cell-51" id="cell-51" type="text"></td>
      <td><input name="cell-52" id="cell-52" type="text"></td>
      
      <td><input name="cell-53" id="cell-53" type="text"></td>
      <td><input name="cell-54" id="cell-54" type="text"></td>
      <td><input name="cell-55" id="cell-55" type="text"></td>
      
      <td><input name="cell-56" id="cell-56" type="text"></td>
      <td><input name="cell-57" id="cell-57" type="text"></td>
      <td><input name="cell-58" id="cell-58" type="text"></td>
    </tr>

    <tr>          
      <td><input name="cell-60" id="cell-60" type="text"></td>
      <td><input name="cell-61" id="cell-61" type="text"></td>
      <td><input name="cell-62" id="cell-62" type="text"></td>
      
      <td><input name="cell-63" id="cell-63" type="text"></td>
      <td><input name="cell-64" id="cell-64" type="text"></td>
      <td><input name="cell-65" id="cell-65" type="text"></td>
      
      <td><input name="cell-66" id="cell-66" type="text"></td>
      <td><input name="cell-67" id="cell-67" type="text"></td>
      <td><input name="cell-68" id="cell-68" type="text"></td>
    </tr>

    <tr>          
      <td><input name="cell-70" id="cell-70" type="text"></td>
      <td><input name="cell-71" id="cell-71" type="text"></td>
      <td><input name="cell-72" id="cell-72" type="text"></td>
      
      <td><input name="cell-73" id="cell-73" type="text"></td>
      <td><input name="cell-74" id="cell-74" type="text"></td>
      <td><input name="cell-75" id="cell-75" type="text"></td>
      
      <td><input name="cell-76" id="cell-76" type="text"></td>
      <td><input name="cell-77" id="cell-77" type="text"></td>
      <td><input name="cell-78" id="cell-78" type="text"></td>
    </tr>

    <tr>          
      <td><input name="cell-80" id="cell-80" type="text"></td>
      <td><input name="cell-81" id="cell-81" type="text"></td>
      <td><input name="cell-82" id="cell-82" type="text"></td>
      
      <td><input name="cell-83" id="cell-83" type="text"></td>
      <td><input name="cell-84" id="cell-84" type="text"></td>
      <td><input name="cell-85" id="cell-85" type="text"></td>
      
      <td><input name="cell-86" id="cell-86" type="text"></td>
      <td><input name="cell-87" id="cell-87" type="text"></td>
      <td><input name="cell-88" id="cell-88" type="text"></td>
    </tr>

    </table>
    </form>
    <img src="http://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML 4.01">
  </body>
</html>
`

exports.board = board