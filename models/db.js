const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/quotedb',(err,res)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("connceted");
    }
})

const quoteSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quote:
        {
            type:String,
            required:true
        }
    
    
    
})


const Quote = mongoose.model('Quote',quoteSchema)

module.exports=Quote