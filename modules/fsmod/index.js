
//crud in  sychronous fs module 


const fs = require('fs')

//to creatr a new folder 
// fs.mkdirSync('temp')


// fs.writeFileSync('temp/data.txt', "Im 7th Hokage Naruto")

// fs.appendFileSync('temp/data.txt',"Im from hidden leaf village")

// const info = fs.readFileSync('temp/data.txt')

// org_info = info.toString()
// console.log(org_info);

//utf8 is used for encoding a file
// const info = fs.readFileSync('temp/data.txt','utf-8')
// console.log(info);


// fs.renameSync('temp/data.txt','temp/newdata.txt')

//to remove current file in folder 
// fs.unlinkSync('temp/newdata.txt')

//to dlt folder 
fs.rmdirSync('temp')