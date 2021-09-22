const { log } = require('console')
const http = require('http')
const mongoose = require('mongoose')
const { Db } = require('mongoose/node_modules/mongodb')

mongoose.connect("mongodb://localhost:27017/Mydb",(err,db)=>
{

    if(err) throw err
    


        //collection created
        // db.createCollection('Users',(err,res)=>
        // {
            
                // // console.log('database created');
                // console.log('collection created');
                // db.close()
    
        // })



    //more than one records inserted
    // const user1 = [{name : 'Jay', age:25, add:"Ghatlodiya"},{name:'Jaydeep',age:24, add:'Satadhar'},{name:'Shukan',age:18, add:'Nilmani'}]

    // db.collection('Users').insertMany(user1,(err, res)=>
    // {
    //     if(err) throw err
    //     console.log('Numbers of records inserted : '+res.insertedCount);
    //     db.close
    // })

    

    //print all the records in collections
    // db.collection('Users').find({}).toArray((err,result)=>
    // {
    //     if(err) throw err
    //     console.log(result);
    //     db.close()
    // })


    //find specified records
    // const query = {add:'Nilmani'}

    // db.collection('Users').find(query).toArray((err,result)=>
    // {
    //     if(err) throw err
    //     console.log(result);
    //     db.close()
    // })




    //sorting records in ascending order
    // const mysort = {name:1}

    // db.collection('Users').find().sort(mysort).toArray((err,result)=>
    // {
    //     if(err) throw err
    //     console.log(result);
    //     db.close()

    // })


        //removing specified records
        // const query = {name:'Shukan'}
        // // console.log('old database');
        // db.collection('Users').remove(query,(err,obj)=>
        // {
        //     if(err) throw err
        //     console.log('record removed successfully');
        //     db.close()

        // })



    
})


// // module.exports = mongoose
