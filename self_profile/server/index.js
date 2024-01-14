import { renderToString } from 'react-dom/server';
import App from '../src/App.tsx';

//var App = require('../src/App.tsx');
//var renderToString = require('react-dom/server');
var http = require('http');
//var app = http();


var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    //response.end('<h1>Hello World!!</h1>');
    //const html = renderToString(<App />);
    //response.send(html);
    //http.use('/', (request, response) => {
        const html = renderToString(<App />);
        response.end(html);
     // });
    

})

server.listen(9000);
console.log("サーバ起動");
