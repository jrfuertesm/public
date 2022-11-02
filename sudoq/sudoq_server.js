// sudoq_server.js

var http = require('http')
var url = require('url')

function start_sudoq_server(route, handle) {

  function onRequest(request, response) {
    var postData = ""
    var pathname = url.parse(request.url).pathname
    request.setEncoding("utf8")
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk
    })
    request.addListener("end", function() {
      route(handle, pathname, response, postData)
    })
  }

  http.createServer(onRequest).listen(8888)

  console.log(    )
  console.log("...server started at 127.0.0.1:8888...")
}

exports.start_sudoq_server = start_sudoq_server