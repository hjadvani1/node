const path = require('path')

//to get path of the directory
console.log(path.dirname('C:/Users/jadva/Desktop/Node/hello/pathmod/app.js'));

//to get extension name 
console.log(path.extname('C:/Users/jadva/Desktop/Node/hello/pathmod/app.js'));

// to get filename

console.log(path.basename('C:/Users/jadva/Desktop/Node/hello/pathmod/app.js'));


//to get all infomation about path 
console.log(path.parse('C:/Users/jadva/Desktop/Node/hello/pathmod/app.js'));

