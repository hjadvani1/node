// const mongoose= require('mongoose')
const Customer = require('./models/customer')
const Order = require('./models/order')


let customerId = null
Customer.insertMany([
    {
        name:'chandler bing',
        email:'bandleching@woopah.com'
    },
    {
        name:'Joey Tribianni',
        email:'kaneadams@howudoin.com'
    
    },
    // {
    //     name:'Ross Gellar',
    //     email:'rachel@divorceforce.com'
    
    // }
])
.then(customers=>{
    console.log(`customers list : ${customers}`)
   return Customer.deleteOne({name:'Joey Tribianni'})
}
).then(deletecustomer=>{
    console.log(`deleted ${deletecustomer}`);
    return Customer.find()
})
.then(remainingcustomers=>{
    console.log(`remaining customers are : ${remainingcustomers}`);
    customerId = remainingcustomers[0]._id
    return Order.create({
        customer_id : customerId,
        total: 15
    })
})
.then((order)=>
{
    console.log(`current customer's order is  : ${order}`);
    return Order.find({customer_id:customerId})
})
.then((selectorder)=>
{
    console.log(`current customer's selected order is : ${selectorder}`);
})
.catch(err=>console.log(err))