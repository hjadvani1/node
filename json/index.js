const fs = require('fs')

const user ={

    name :"naruto",
    age : 32,
    post : "hokage"
}


const userdata = JSON.stringify(user)
fs.writeFile('json1.json',userdata ,(msg)=>
{
    console.log("New user");
})


fs.readFile('json1.json','utf-8',(err,data)=>
{
    console.log(data);
})
// console.log(userdata);

// const orgdata = JSON.parse(userdata)
// console.log(orgdata);