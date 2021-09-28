const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>
{

    console.log(req.url,req.method);

    // res.setHeader('Content-Type','text/plain')
    // res.write('Hey..!How you Doin ?')

    res.setHeader('Content-Type','text/html')
    // res.write('<p>Hey..!How You Doin</p>')
    // res.end()

    // fs.readFile('./index.html',(err, data)=>{

    //     if(err)
    //     {
    //         console.log(err);
    //         res.end()
    //     }
    //     else{
    //             res.end(data)
    //     }

    // })


    if(req.url==='/')
    {
        res.end('<h1>Welcome to the Website</h1>')
    }
    else if(req.url==='/Home')
    {
        res.end('<h1>Welcome to the Home Page</h1>')
    }
    else if(req.url==='/contact')
    {
        res.end('<h1>Welcome to the contact Page</h1>')

    }
    else
    {
        res.end('<h1>404 Error : This Page Doesnt Exist<h1>')
        res.statusCode=404
    }

    


})
.listen(8000,'localhost',()=>
{
    console.log('listening for request on port 8000');
})