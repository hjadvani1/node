//  const { LOADIPHLPAPI } = require/('dns')
const afs = require('fs')

 //creatr asycn fs using callback function as an arg
//  afs.writeFile('anime.txt',"I watched so many animes ",
//  (msg)=>
//  {
//     console.log("file is created");
//  })

// to add some data in current file using callback function
// afs.appendFile('anime.txt',"lets see ",(msg)=>
// {
//     console.log("yeah its working ");
// })


//to read file data

// afs.readFile('anime.txt','utf-8',(err,data)=>
// {
//     console.log(data);
// })
// // console.log(data);

// ====================================
//async crud operations using fs modules

// afs.mkdir('atemp',(msg)=>
// {
//     console.log("folder is created");
// })


// afs.writeFile('atemp/anime1.txt','new file information',(msg)=>
// {
//     console.log("new file created");
// })

// afs.appendFile('atemp/anime1.txt','yeah this one is new ',(msg)=>
// {
//     console.log("new file created");
// })

// afs.readFile('atemp/anime1.txt','utf-8',(msg,data)=>
// {
//     console.log(data);
// })


// afs.rename('atemp/anime1.txt','atemp/anime2.txt',(msg)=>
// {
//     console.log("file name is changed");
// })

// afs.unlink('atemp/anime2.txt',(msg)=>
// {
//     console.log("file is removed ");
// })


// afs.rmdir('atemp',(msg)=>
// {
//     console.log("folder is removed");
// })