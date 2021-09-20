
// const { fstat } = require('fs')

const fs = require('fs')
const path = require('./user.json')
const http = require('http')


// const url = require('url')
const server = http.createServer((req,res)=> {


   const data= fs.readFileSync('user.json','utf-8')
   const objdata = JSON.parse(data)
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
    else if(req.url== '/userdata'){
        res.writeHead(200,{'Content-type': "application/json"})
        res.end(objdata[0].firstName)
        
        // fs.readFile('user.json','utf-8',(err,data)=>
        // {
        //     console.log(data);
        //     const objdata = JSON.parse(data)
        //     res.end(objdata[1].firstName)
        //     // res.end(data)
        // })

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