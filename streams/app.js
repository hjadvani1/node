const stream = require('stream');
const fs = require('fs')
const http = require('http')


const server = http.createServer()

server.on('request',(req,res)=>
{
    //  var fs = require('fs')
    //  fs.readFile('input.txt',(err,data)=>
    //  {
    //  if (err) return console.error(err)
    //  res.end(data.toString())
    //  })
    const rstream = fs.createReadStream('input.txt')
    // rstream.on('data',(tempdata)=>
       
    // {
    //     res.write(tempdata)
    

    // })
    // rstream.on('end',()=>{
    //     res.end()
    // })
    // rstream.on('error',(err)=>
    // {
    //     console.log(err);
    //     res.end('file isnt found ')
    // })

    // short way to read and write current file
    rstream.pipe(res)
}

)


server.listen(8000,"127.0.0.1")
