
const mongoose = require('mongoose')


const ObjectId = mongoose.Schema.Types.ObjectId;

main().catch(err=>console.log(err))


async function main()
{
    await mongoose.connect('mongodb://localhost:27017/27sep')

    // const aSchema = new mongoose.Schema({

    //     name :String,
    //     age:Number,
    //     add:String
    // })


    // aSchema.path('name').get(function(v){

    //     return v + ' is my name'
    // })
    //toJSON option
    // aSchema.set('toJSON',{getters:true,virtuals:false})

    // toObject option
    // aSchema.set('toObject',{getters:true})
    // const temp = mongoose.model('temp',aSchema)

    // const person = new temp(
    //     {
    //         name :'Hiren',
    //         age:21,
    //         add:'Ahmedabad'
    //     }
    // )
    // console.log(person.toObject());
    // console.log(person.toJSON());
    // console.log(JSON.stringify(person));


    // strict 
    // with the help of strict :false we can save the records in db without any declaring types  in schemas
//  const strictSchema = new mongoose.Schema({

//         // name :String,
//         // age:Number
//  },{strict:false})

//      const strict = mongoose.model('strict',strictSchema)

//      const user = new strict({

//         name :'hiren',
//         age:21
//      })

//    await  user.save()



    //validateBeforeSave
    // by default documents are automatically validated before thhey are saved to the database
    // but what if we want to save invalid documents in db 
    // so we can set validate.... : false so we can save invalid documnets in db


    // const validSchema = new mongoose.Schema({
    //     name:String
    // })

    // validSchema.set('validateBeforeSave',false)

    // validSchema.path('name').validate(function(value){

    //     return value != null

    // })
    // const valid = mongoose.model('valid',validSchema)


    //  const user = new valid({
    //      name :null
    //  })


    //  user.validate(function(err){
    //      console.log(err);
    //  })
     
    // await user.save()




    //versionkey
    // is property se on each documnet when first created by mongoose
    // we can set any name to a version name by using versionkey:
    
        // const versionSchema = new mongoose.Schema(
        // {

        //     name:String

        // },

        // {versionKey:  '_Titan'}

        // )
        
    // const version = mongoose.model('version',versionSchema)

    // const user = new version({

    //         name:'Eren'

    // })


    // console.log(user);
    //await user.save()
    
     
    // collation

    // const colSchema = new mongoose.Schema({

    //     name:String

    // },{collation:{locale:'en_US',strength:1}})

    // const col = mongoose.model('col',colSchema)

    // // const user = new col({
    // //     name:'Naruto'
    // // })

    // col.create([{name:'val'},{name:'val'}]).then(()=>{return col.find({name:'val'})}).then((docs)=>{console.log(docs);})


    // timestamos
    // this option tells mongoose to assign createdAt and updatedAt fields to your schema.the type assigned is Date.

    // const timeSchema = new mongoose.Schema({
    
    //     name : String,
    //     anime:String

    // },
    // {
    //     timestamps:00:20:51 Fly High (Haikyuu)

    // const time = mongoose.model('time',timeSchema)

    // const user = new time({

    //     name:'Goku'

    // })

    // // await user.save()
    
    // await time.updateOne({},{ $set:{name:'vegeta'}})


    // await time.bulkWrite([
    //     {
    //     insertOne:
    //     {
            
    //         document:
    //         {

    //             name:'Deku',
    //             anime :'My Hero Academia'

    //         }
    //      },
         
    //      updateOne:
    //      {
            
    //         filter:{name:'Deku'},
    

    //             $set:
    //             {
    //                 anime:'Boku no hero academia'
    //             }
    //         }
    //      }
    //     }
    // ]).then(res=>console.log(res.insertedCount))



        
    //     })

    // const pop = mongoose.model('pop',popSchema)

    // const user = new pop(
    // {

    //     name:'chandler',
    //     series:'FRIENDS'

    // }
    // )

    // // await user.save()

    // await pop.find().select('name').populate('series')



    // const animeSchema = new mongoose.Schema(
    // {

    //     name : String

    // })

    // const animeBoxSchema = new mongoose.Schema(
    // {

    //     animes:[String],
    //     buffers : [Buffer],
    //     strings : [String],
    //     numbers:[Number]

    // })


    // const animebox = mongoose.model('animebox',animeBoxSchema)

    // const adventure = new animebox({
    //     animes:['Naruto','HXH','One Piece']
    // })


    // console.log(adventure.animes);

//    console.log( Array.isArray(adventure.animes))

 
        // const personSchema = new mongoose.Schema(
        // {

        //     name :String

        // })

        // const person = mongoose.model('person',personSchema)

        // // console.log(person);


        // const animeSchema  = new mongoose.Schema(
        // {
        //     title:String,
        //             creator:
        //             {
        //                 type:mongoose.Schema.Types.ObjectId,
        //                 ref:'personSchema'
        //             },
        //             MCS:
        //             [{
        //                 type:ObjectId,
        //                 ref:'personSchema'
        //             }]
        
        // })

        // const anime = mongoose.model('anime', animeSchema)
        // // console.log(anime);

        // const user = new person(   
        // [
        //     {
        //         name:'Hajime Isayama'
        //     },
        //     {name:'Eren Yeager'},
        //     {name:'Mikasa Ackerman'},
        // ])

        // // console.log(user.creator);

        // const user2 = new anime({

        //     title :'Attck on titan',
        //     creator:user[0]._id,
        //     MCS:[user[1]._id,user[2]._id]
        // })

        // console.log(user2.title);

        // let series = await anime.findOne().populate('creator')
        // console.log(series.creator.name);

        // let series1 = await anime.findOne().populate('creator').populate('MCS')
        // console.log(series1.creator[0].name);
        // console.log(series1.creator[1].name);


        
        // lean 
        // Makes queries faster and less memory intensive
        // but tresult documents are not mongoose documents 
        
        // const TestSchema = new mongoose.Schema({
        //   active : Boolean,
        //   user_id: { type: ObjectId, required: true },
        //   name   : { type: String, unique: true, required: true },
        //   another: String
        // });
        // const Test = mongoose.model('Test', TestSchema);
      
        // const active  = true;
        // const name    = 'martin';
        // const user_id = new mongoose.Types.ObjectId();
        // const another = 'another';
      
        // await Test.deleteMany({});
        // await Test.create({ active, name, user_id, another });
      
        // const firstResult  = await Test.findOne({name}, {lean: true});
        // const secondResult  = await Test.findOne({name}).lean();
        // console.log('first: ', firstResult); // 
        // console.log('second: ', secondResult);


        // 
      

        // enum
        // we can specify the available roles one could use 
        // required : if u set required value as a true that means that field must be required itll throw an eroor if field is empty while saving on database
        // minlegnth and maxlength its specify minimum and maximum legnth 
        // const personSchema = new mongoose.Schema(
        // {
        //      name :
        //      {
        //          type:String,
        //          required : [true,'Name must not be empty!...'],
        //          minlength:4,
        //          maxlength:20
                 
        //      },
        //      email:
        //      {  
        //         type:String,
        //         required : [true,'Email must not be empty!...'],
        //         minlength :10,
        //         maxlength:20,                
                
        //      },
        //      role:
        //      {
        //         type:[String],
        //         validate:{
        //             validator:function(a){
        //                 return a.length <1
        //             },
        //             message:'You must not provide more than 1 roles'
        //         },
        //         required:[true,'Role must not be empty!...'],
        //         enum : ['user','admin','superadmin'],
        //      }

        // },
        // {
        //     timestamps:true
        // })
        // const person = mongoose.model('person',personSchema)

        // const Eren = new person({

        //     name:'EREN',
        //     email :'Eren@freedom.com',
        //     role:['superadmin']
        //     // role:['superadmin','viewers'] // throw an error while saving 
        // })
        // console.log(Eren);
        // Eren.save()



        // const Publisher = mongoose.model('Publisher', new mongoose.Schema({
        //     companyName: String,
        //     firstParty: Boolean,
        //     website: String
        // }));

        // const Game = mongoose.model('Game', new mongoose.Schema({
        //     title: String,
        // }));

        // async function createPublisher(companyName, firstParty, website) {
        //     const publisher = new Publisher({
        //         companyName,
        //         firstParty,
        //         website
        //     });

        //     const result = await publisher.save();
        //     console.log(result);
        // }

        // async function createGame(title, publisher) {
        //     const game = new Game({
        //         title,
        //         publisher
        //     });

        //     const result = await game.save();
        //     console.log(result);
        // }

        // async function listGames() {
        //     const games = await Game
        //         .find()
        //         .select('title');
        //     console.log(games);
        // }

        // // createPublisher('Nintendo', true, 'https://www.nintendo.com/');
        // // createGame('SuperMario2')
        // listGames()



        // embedded documents
        const studiSchema = new mongoose.Schema({

            companyname :  String,
            website :String
        })

        const Studio = mongoose.model('Studio', studiSchema)

        const animeSchema = mongoose.Schema(
            {
                title : String,
                studio : studiSchema
            }
        )
        
         const anime = mongoose.model('anime',animeSchema)

        async function createAnime(title, studio)
         {
             const anime1 = new anime(
                 {
                     title,
                     studio
                 }
             )
             const result = await anime1.save()
             console.log(result);
             
         }

         createAnime('AttackOntitan', new Studio ({companyname : 'Mappastudio', website:'http://www.mappa.co.jp/mappa_e/works.html'}))

}