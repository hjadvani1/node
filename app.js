const mongoose = require('mongoose')
const path = require('path')
const { mainModule } = require('process')
const { callbackify } = require('util')
const blogSchema = require('./schema')

main().catch(err=>console.log(err))

async function main()
{

    await mongoose.connect('mongodb://localhost:27017/test',{autoIndex:false})

    
    // console.log(anime);
    
    // const animeSchema = new mongoose.Schema({
    
    //     name : String
    // })
    
    
    // console.log('Hey connected');
    
    // animeSchema.methods.intro = function intro()  
    // {    
    //     const greeting = this.name?"This anime name is "+this.name:'I dont have a name '
    //     console.log(greeting);
        
    // }


    // const anime = mongoose.model('anime',animeSchema)
    // const naruto = new anime({name : 'Naruto'})
    // const onepiece = new anime ({name : 'onepiece'})
  
    // onepiece.intro()
    // await naruto.save()
    // await onepiece.save()
    // naruto.intro()
    
    // const animes = await anime.find({name :'Naruto'})
    // console.log(animes);
    // console.log((naruto.name));



    //new schema 

    // const Blog = mongoose.model('Blog',blogSchema)
    
    // const music = new Blog({
    //     title:'Feel the Beat',
    //     author : 'Dan patel',
    //     body : 'Aba daba jaba',
    //     meta:{
    //         votes : 2000,
    //         favs : 1000
    //     }
    // })

    // await music.save()
    // const blogs = await Blog.find()
    // console.log(blogs);
    // console.log(music);

    // const schema = new mongoose.Schema({_id :Number})
    // schema.path("_id")
    // const model = mongoose.model('Test',schema)
    // const doc = new model()
    // // await doc.save()
    // // doc._id instanceof mongoose.Types.ObjectId

    // doc._id=1
    // // await doc.save()


    //instance methods

    // const seriesSchema = new mongoose.Schema({name:String,type:String})

    // seriesSchema.methods.category =  function(cb){
    //     return mongoose.model('series').find({type:this.type},cb)
    // }
    
    // const series = mongoose.model('series',seriesSchema)
    // const Sitcom = new series({type:'Sitcom'})

    // Sitcom.category((err,sitcoms)=>
    // {
    //     console.log(sitcoms);
    // })


//     var productSchema = new mongoose.Schema({ name: String, department: String });
//     productSchema.methods.findProductsInSameDepartment = function() {
//         return this.model('Product').find({ department: this.department });
//       };

//       var Product = mongoose.model('Product', productSchema);
//      var milk = new Product({ department: 'Dairy' });

//   milk.findProductsInSameDepartment(function(err, dairyProducts) {
//     console.log(dairyProducts);
//   });


    //indexes
    //use for to make queries faster 

//     const userschema = new mongoose.Schema({
//         name :String,
//         type:String,
//         tags:{ type:[String], index:true}
//     })

//     // userschema.index({name :1, type:-1})

//     userschema.index({_id:1},{sparse :true})
//    const user = mongoose.model('user', userschema)
//     // console.log(user);
//     const user1 = new user({
//         name :'hiren',
//         type :'weeb'
//     })
//     user.on('index', err=>console.log(err.message))
//     // console.log(user1);

    //    const animalSchema = new mongoose.Schema({
    //        name : String,
    //        type:String,
    //        Tags:{type:[String], index:true}

    //    }) 

    //    animalSchema.index({name:-1},function (err,result) {
    //         console.log(result);
    //         callback(result)
           
    //    })

    //    const animal = mongoose.model('animal',animalSchema)
    //    const animal1 = new animal({
    //        name : 'dog',
    //        type : 'pet',
           
    //    })
    //    console.log(animal1);



        //virtuals
        // its document propertie that you can get and set but that dont persisted to mongoDB
        
        // const chSchema = new mongoose.Schema({
        //     first:String,
        //     last:String
        // })

        // // chSchema.virtual('fullname').get(function() {
        // //                     return this.first + '  '+this.last  
        // // })

        // chSchema.virtual('fullname').set(function(name){
        //     const split = name.split(' ')
        //     this.first = split[0]
        //     this.last = split[1]
        // })


        // const char = mongoose.model('char',chSchema)

        // const sarcastic = new char({
        //     first : '',
        //     last :''
        // })
        // sarcastic.fullname = 'chandler bing '
        // console.log(sarcastic.first)
        // console.log(sarcastic.last)
        // // console.log(sarcastic.fullname);


        // alias
        //aliases are particular type of virtual where the getter and setter seamlessely get and set another property
        // const personSchema = new mongoose.Schema(
        // {
        //     n:{
        //         type:String,
        //         alias:'name'
        //     }

        // },{
        //     _id:false
        // })

        // const person = mongoose.model('person',personSchema)
        
        // const user = new person({name:'Hiren'})
        // console.log(user.name);
        // console.log(user);
        // console.log((user.toObject({virtuals:true})));


        // user.name = 'dan'
        // console.log((user));

    //options 

    //autoindex

    const pschema = new mongoose.Schema({name:String,age:Number},{autoIndex:true})
    const clock = mongoose.model('clock',pschema)

    

    const user1 = new clock({name:'Hiren',age:22})
    const user2 = new clock({name:'Darshan',age:21})
    const user3 = new clock({name:'Yashesh',age:25})
    const user4 = new clock({name:'Shukan',age:18})
    // console.log(user1);
    
    // await user1.save()
    // await user2.save()
    // await user3.save()
    // await user4.save()
//    await clock.createIndexes({name:1})     
//    const clocks= await clock.find({name:'hiren'})
//    console.log(clocks);
    // clock.find({},{_id:0})
    // console.log(clocks);
    // clock.

}