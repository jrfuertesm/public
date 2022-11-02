// sudoq_router.js

function route(handle, pathname, response, postData) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData)
  } else {
    if (pathname == '/favicon.ico') {} else {
        console.log("Request Handler not found for  " + pathname)
        response.writeHead(404, {"Content-Type": "text/plain"})
        response.write("404 Not Found")
        response.end()
    }
  }
}

exports.route = route