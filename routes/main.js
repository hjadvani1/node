const express = require("express");
var nodemailer = require("nodemailer");
// const { createIndexes } = require('../models/props')
// const Props = require("../models/props");
// const Items = require("../models/props");
// const Order = require("../models/props");
const { Category, Order, Items }= require('../models/props')
// const alert= require('alert-node')
const router = express.Router();

router.get("/", (req, res, next) => {
    const data = req.context
    res.render("home", data);
});

router.get("/blog", (req, res) => {
  // const data = req.context
  res.render("blog", req.context);
});



router.post("/reservation", (req, res) => {
  // res.redirect('order')
  // console.log(req.body);
  Order.create(req.body, (err) => {
    if (!err) {
      res.redirect("reservation");
    } else {
      res.send(err.message);
      console.log(err);
    }
  });
  // console.log(req.body.email);
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
  //     html: "<p>your reservation is confirm.Thank you for the Reservation .Have a great day</p>",
  //   };

  //   transporter.sendMail(mailoptions, (err, info) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("email sent successfully to ", req.body.email);
  //     }
  //   });
  // } catch (err) {
  //   throw err;
  // }
});

router.get("/reservation", (req, res) => {
//   console.log("enter");

    Order.find((err, docs) => {
      if (!err) {
        console.log(docs)
        // docs=docs.map((element,index)=>{
        //     element=`${element.name}</br>`;
        //     console.log(element)
        //     return element
        // })
        res.render("Reservation", {
          reservation: docs,
        });
        // res.json(docs)
      } else {
        res.send(err);
        console.log(err);
      }
    });
  
  // res.json('hey there')
});

router.get("/email", (req, res) => {
  try {
    res.render("email");
  } catch (err) {
    throw err;
  }

  // res.json('hey there')
});

router.post("/getdata", (req, res) => {
  console.log("email", req.body);

  Order.findOne({ email: req.body.email }, (err, docs) => {
    if (!err) {
      // console.log(docs)
      // docs=docs.map((element,index)=>{
      //     element=`${element.name}</br>`;
      //     console.log(element)
      //     return element
      // })
      // console.log("data",docs)
      res.render("update", {
        reservation: docs,
      });
      // res.json(docs)
    } else {
      res.send(err);
      console.log(err);
    }
  });

  // res.json('hey there')
});

router.post("/update", (req, res) => {
  console.log("enter", req.body.cancel);
  if (req.body.cancel === "Cancel Reservation") {
    Order.deleteOne({ email: req.body.email }, (err, docs) => {
      if (!err) {
        console.log("data", docs);
        res.redirect("reservation");
      } else {
        res.send(err);
        console.log(err);
      }
    });
  } else {
    Order.updateOne({ email: req.body.email }, req.body, (err, docs) => {
      if (!err) {
        console.log("data", docs);
        res.redirect("reservation");
      } else {
        console.log(err);
      }
    });
  }
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
  //       console.log(err);
  //     } else {
  //       console.log("email sent successfully to the", req.body.email);
  //     }
  //   });
  // } catch (err) {
  //   throw err;
  // }
  // res.json('hey there')
});


router.get('/getcategory',(req,res)=>
{
   res.render('category')
})

router.post('/newcategory',(req,res)=>
{

  Category.create(req.body,(err)=>
  {
    console.log(req.body);
    if(!err)
    {
      // alert('New Category Added')
      res.redirect('menu')
    }
  })

})

router.get("/getmenu", (req, res) => {
  // res.render("newmenu");
  Category.find((err,docs)=>{


    if(!err)
    {
      res.render('newmenu',{
        categoris:docs
      })
    }

  })
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
        // alert('New Item Added')
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
    let coffee = [], tea = [], mojito = [];

    for(let i = 0; i< items.length; i++){
      for(let j=0; j< items[i].category.length; j++){
          if(items[i].category[j].category == "Coffee"){
            coffee.push({
              image: items[i].image,
              Iname: items[i].Iname,
              price:items[i].price,
            })
          }
          if(items[i].category[j].category == "Tea"){
            tea.push({
              image: items[i].image,
              Iname: items[i].Iname,
              price:items[i].price,
            })
          }
      }
    }

    console.log(coffee);
    res.render('menu',{
      coffee:coffee,
      tea:tea
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
        items: {$push: {image: "$image", price: "$price",}}
        }
      }
    ])

    // console.log(JSON.stringify(items1));

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

// router.get()













module.exports = router;
