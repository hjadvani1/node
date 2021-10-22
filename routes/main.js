
const express = require("express");
var nodemailer = require("nodemailer");

const { Category, Order, Items,Blog }= require('../models/props')
const alert= require('alert-node')
const router = express.Router();



router.get("/", async function(req, res){
    
    await res.render("home");
});

router.post("/reservation", async function(req, res){
  
    try{

      const data = await Order.create(req.body)
      console.log(data);
      res.redirect('reservation')
    }
    catch(err)
    {
      throw err
    }
      
});


router.get("/reservation", async function(req, res){
    
    try
    {
        const data = await Order.find()
        res.render('Reservation',
        {
          reservation:data
        })
    }
      catch(err)
      {
        throw err
      }
});



router.get("/email", async function(req, res){
  
        await res.render('email')

});

router.post("/getdata", async function(req, res){

    if (req.body.cancel === "Cancel Reservation") 
    {     
      const data = await Order.deleteOne({email:req.body.email})
      console.log(data);
      res.redirect('reservation')
    }
  else
  {
    try
      {

        const data = await Order.findOne({email:req.body.email})
        res.render('update',{
            reservation:data,
        })
      }
      catch(err)
      {
        throw err
      }
  
  }
      
});

router.post("/update", async function(req, res){


    
      const data = await Order.updateOne({email:req.body.email},req.body)
      console.log(data);
      res.redirect('reservation')
    // }
    // catch(err)
    // {
    //   throw err
    // }
}
)
  // 
  //   Order.updateOne({ email: req.body.email }, req.body, (err, docs) => {
  //     if (!err) {
  //       console.log("data", docs);
  //       res.redirect("reservation");
  //     } else {
  //       console.log(err);
  //     }
  //   
  // }
  // try {
  //   const transporter = nodemailer.createTransport({
  //     // host: 'smtp.ethereal.email',
  //     // port: 587,
  //     service: "gmail",
  //     auth: {
  //       user: "",
  //       pass: "",
  //     },
  //   });

  //   const mailoptions = {
  //     from: "",
  //     to: req.body.email,
  //     subject: "Reservation",
  //     html: "<p>your  new reservation is confirm Thank you for the Reservation </p>",
  //   };

  //   transporter.sendMail(mailoptions, (err, info) => {
  //     if (err) {
  //       console.log(err);const Category = mongoose.model("categories", categorySchema);
  //     } else {
  //       console.log("email sent successfully to the", req.body.email);
  //     }
  //   });
  // } catch (err) {
  //   throw err;
  // }
  // res.json('hey there')docs=docs.map((element,index)=>{
    //     element=`${element.author}`;
    //     console.log(element)
    //     return element
    // })



router.get('/getcategory',async function(req,res)
{
   await res.render('category')
})

router.post('/newcategory',async function(req,res)
{

  try
  {
    const data = await Category.create(req.body)
    alert('New Category Added')
    res.redirect('menu')
  }
  catch(err)
  {
    throw err
  }


})

router.get("/getmenu", async function(req, res){
  // res.render("newmenu");
  // Category.find((err,docs)=>{


  //   if(!err)
  //   {
  //     res.render('newmenu',{
  //       categoris:docs
  //     })
  //   }

  // })
  try{
     const data = Category.find()
     res.render('newmenu',{
      categoris:data,
     })
  }
  catch(err)
  {
    throw err
  }
});

router.post("/menu1", (req, res) => {
  console.log(req.body);


  // const details = {
  //   Iname =
  // }
  Items.create(req.body, (err) => {


    if (!err) {
    //   res.redirect("menu1");
    //   res.json(req.body)
        alert('New Item Added')
        res.redirect('menu')
    } else {
      res.send(err.message);
      console.log(err);
    }
  });
});




router.get("/menu", async(req, res) => {
    // const data = req.context
    const items =  await Items.find({}).populate('category');
    let coffee = [], tea = [], cocktail = [], desserts=[], winecard=[],drinks=[];

    for(let i = 0; i< items.length; i++){
      for(let j=0; j< items[i].category.length; j++){
          if(items[i].category[j].category == "Coffee"){
            coffee.push({
              image: items[i].image,
              Iname: items[i].Iname,
              price:items[i].price,
              ingredients:items[i].ingredients

            })
          }
          if(items[i].category[j].category == "Tea"){
            tea.push({
              image: items[i].image,
              Iname: items[i].Iname,
              price:items[i].price,
              ingredients:items[i].ingredients
            })
          }
          if(items[i].category[j].category == "Cocktail"){
            cocktail.push({
              image: items[i].image,
              Iname: items[i].Iname,
              price:items[i].price,
              ingredients:items[i].ingredients
            })
          }
          if(items[i].category[j].category == "Desserts"){
            desserts.push({
              image: items[i].image,
              Iname: items[i].Iname,
              price:items[i].price,
              ingredients:items[i].ingredients

            })
          }
          if(items[i].category[j].category == "Wine Card"){
            winecard.push({
              image: items[i].image,
              Iname: items[i].Iname,
              price:items[i].price,
              ingredients:items[i].ingredients

            })
          }
          if(items[i].category[j].category == "Drinks"){
            drinks.push({
              image: items[i].image,
              Iname: items[i].Iname,
              price:items[i].price,
              ingredients:items[i].ingredients

            })
          }
      }
    }

    // console.log(coffee);
    res.render('menu',{
      coffee:coffee,
      tea:tea,
      cocktail:cocktail,
      desserts:desserts,
      winecard:winecard,
      drinks:drinks
    })

    const items1 = await Items.aggregate([
      {
        $project: {
          "image":1,
          "Iname": 1,
          "ingredients": 1,
          "price": 1,
          "category": 1
        }
      },
      {$unwind: "$category"},
      {
        $lookup: {
          from: 'categories',
          let: {cat:'$category'},
          pipeline: [{$match: {$expr: {$eq: ["$_id", "$$cat"]}}}, {$project: {"category": 1, "_id": 1}}],
          as: "categ"
        }
      },
      {
        $group: {
          _id: "$categ",
        items: {$push: {image: "$image", price: "$price", ingredients:"$ingredients",Iname:"$Iname"}}
        }
      }
    ])

    console.log(JSON.stringify(items1));

  //  Items.find((err,docs)=>
  //  {
     
     
  //    if(!err)
  //    {
  //      res.render('menu',{
  //        items:docs
  //      })
  //     }
  //   })
    // res.render("menu", req.context); 
   })

router.get("/getupmenu",(req,res)=>
{
   res.render('getupmenu')
  

})


router.post('/getmenudata',(req,res)=>
{ 

  // console.log(req.body);
  if (req.body.remove === "Remove Item")
  {
      Items.deleteOne({ Iname: req.body.Iname }, (err, docs) => {
        if (!err) {
          console.log("data", docs);
          alert('Item Remove Successfully')
          res.redirect("menu");
        } else {
          res.send(err);
          console.log(err);
        }
      });
  }
  else
  {
    // console.log("albnkbakfbkaf");
      // Items.findOne({ Iname:req.body.Iname},null,{populate:{path:"category"}},(err,docs)=>
      // {
      //   console.log(docs);
      //   if (!err)
      //   {
      //     // console.log(req.body);
      //     res.render("upmenu", {
      //       items: docs,
      //     });
          
      //   } 
      //   else
      //   {
      //     res.send(err);
      //     console.log(err);
      //   }

      // })

      Items.findOne({Iname:req.body.Iname}).exec((err,docs)=>
      {
        if(!err)
        {
          
          // console.log(categories.category);
          
          
          console.log(docs.category[0].category);
          res.render('upmenu',
          {
            items:docs,
          })
        }
        else
        {
          res.send(err)
        }
      })
  }
      
})


router.post('/menu1',(req,res)=>
{

  Items.updateOne({Iname:req.body.Iname},req.body,{populate:{path:'category'}},)
})


router.get('/addblog',async function(req,res)
{
   await res.render('addblog')
  
}

)

router.get('/blog-single',async function(req,res)
{
  await res.render('blog-single')
})

router.post('/blogs',async function(req,res)
{
  
  try{

    const blogs = await Blog.create(req.body)
    // console.log(blogs);
    res.redirect('blog')
  }
  catch(err)
  {
    throw err
  }
})









module.exports = router;
