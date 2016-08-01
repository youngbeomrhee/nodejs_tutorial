var http = require('http');
var url = require('url');
var port = 8888;

function start(route, handle) {
    function onRequest(request, response) {
        // console.log('Request received');
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        route(handle, pathname);
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('Hello, World!');
        response.end();
    }
    
    http.createServer(onRequest).listen(port);
    console.log('Server has started on ' + port);
}

exports.start = start;