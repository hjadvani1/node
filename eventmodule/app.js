//events module
//use for create and listen for your own events

const EventEmitter = require('events')
const chalk = require('chalk')

const event = new EventEmitter()

event.on('printname',()=>
{
    console.log(chalk.red.inverse("My name is naruto"));
})


event.on('printname',()=>
{
    console.log(chalk.blue.inverse("My name is luffy"));
})


event.on('printname',()=>
{
    console.log(chalk.yellow("My name is eren"));
})

event.emit('printname')

event.on('checkpage',(sc,msg)=>
{
    console.log(`status code is ${sc} and the page is ${msg}`);
})


event.emit('checkpage',200,'ok')