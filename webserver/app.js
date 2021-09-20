//create a web server with node.js

//with the help of http module node dont need any third party application create a web server

const http = require('http')
// const url = require('url')
const server = http.createServer((req,res)=> {

    // console.log(req.url);

    if(req.url == '/')
    {
        res.end('Hey welcome to the server man....')
    
    }
    else if(req.url == '/about')
    {
        res.end('Hey welcome to the about man....')

    }
    else if(req.url == '/contact')
    {
        res.end('Hey welcome to the contact man....')

    }
    else
    {
        //use for show status code 
        res.writeHead(404, {'Content-type': "text/html"})
        res.end('<h1> this page doesnt exist wat are u doin here ? </h1>')
    }
          
})

server.listen(8000,"127.0.0.1", ()=>
{
    console.log("listening to the port no 80fsff00");
}) 