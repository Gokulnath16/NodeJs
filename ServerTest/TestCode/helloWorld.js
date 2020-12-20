import express from 'express';

const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('Example app listenig on port 3000');
});



//---------------------------------


console.log('Hello');


let http = require('http');
const port = 3001;

const server = http.createServer((request, response,) => {

    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Trailer' : 'Content-MD5'
    });


    response.write(`This is a response for a request\n`);
    const ipAddress = request.socket.remoteAddress;
    response.write(`IpAddress : ${ipAddress}`);
    response.write(`Request url: ${request.url}`);
    response.write(`Detail request url: ${require('url').parse(request.url, true)}`);
    debugger;
    response.addTrailers({'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667'}); 
    response.end();

/* 
GET Request data from Debugger
> require('url').parse(request.url, true)
> JSON.stringify(require('url').parse(request.url, true))
> JSON.stringify(require('url').parse(request.url, true).query)
> JSON.stringify(require('url').parse(request.url, true).query.name)
*/

}).listen(port);


console.log(`Server is running on port: ${port}`);