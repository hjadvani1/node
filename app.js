const { assert } = require('console')
const mongoose = require('mongoose')
const { mainModule } = require('process')
const Schema  = mongoose.Schema
const ObjectId = Schema.objectId
const Model = mongoose.model
const {fs} = require('fs')
const { getLineInfo } = require('acorn')
const { object } = require('webidl-conversions')
const { string } = require('yargs')

main().catch(err=>console.log(err))

async function main()
{
   await mongoose.connect('mongodb://localhost:27017/24sep')
//    console.log("connecting.........");
    

    // const movieSchema = new Schema({
        
    //     type:String,
    //     fullname :String
    // })

    // movieSchema.index({type:1})
    
    // const movie = Model('movie',movieSchema)

   
    // const movie1 = new movie({
                
                
    //     type:'scifi',
    //     fullname : 'Shang-Chi',
    //     id:1

    // })

    // // await movie1.save()

    // const movies = await movie.find({type:'scifi'})
    // console.log(movies);
    


    //options
    //autoindex 
    //sometimes index builds can also create significant load on database 
    //so if we want to manage indexes we can use autoIndex and set it to false value
    // const animalSchema = new Schema({name :'string',type:'string'},{autoIndex:false})

    // const animal  = Model('animal', animalSchema)
    // animal.ensureIndexes(function(err){
    //     if(err)
    //     {
    //         console.log(err);

    //     }
    //     else{
    //         console.log('connected successfully');
    //     }
    // })
    

    // autocreate
    //before index builds it create the underlying collection in mongod if autocreate set is true
    // its helpful for development and test environments

    // const seriesSchema = new Schema({name :String,type:String},{autoCreate:true,capped:1024})
    // const series = Model('series',seriesSchema)
    // const series1 = new series({name:'FRIENDS',type:'sitcom'})
    // // await series1.save()
    // console.log(series);
    

    //discriminators 
    //are a schema inheitance mechanism.
    //enable you to have multiple models with overlapping schemas on top o the same underlying mongodb collection


    // const mainSchema = new Schema({}, { discriminatorKey: 'type' });
    // const MainModel = mongoose.model('Test', mainSchema);

    // const personSchema = new Schema({ name: String });
    // const PersonModel = MainModel.discriminator('Person', personSchema);

    // const doc = new PersonModel({ name: 'James T. Kirk' });
    // console.log('doc type is a :- '+doc.type);
    // console.log(doc.type);// 'Person'


    // _id
    // mongoose assigns each of schemas an id getter by default which returs the document 
    // _id field cast to string or in the case of ObjectIds its hexstring

     // id will undefined
    // const tempSchema = new Schema({ name: String }, { id: false });
    // const tempPage = Model('tempPage', tempSchema);
    // const t = new tempPage({ name: 'Levi Ackerman' });
    // console.log(t.id); // undefined


    // // regular o/p
    // const regSchema = new Schema({ name: String })
    // const regPage = Model('regPage', regSchema);
    // const r = new regPage({ name: 'Eren Yeager' });
    // console.log(r.id); //614d9008d72f5e707a425560 o/p is something like that

    // minimize
    // cant store the data if members fieled is empty
    // const tailSchema = new Schema({name:String,Members:{}} ,{minimize:true} )
    // const Tail = Model('Tail',tailSchema)

    // const fairy = new Tail({name:'Fairy ',Members:{male:20}})
    // await fairy.save()

    // const sabertooth = new Tail({name:'sabertooth ',Members:{}})
    // await sabertooth.save()

    // let tails = await Tail.find({name:'fairy'}).lean()

    // const raven = new Tail({name:'raven',Members:{}})
    // raven.save()
        // console.log( fairy.$isEmpty('Members'))
        // console.log(sabertooth.$isEmpty('Members'));
    // console.log(tails.Members);


    // const genders = Object.freeze({
    //     Male:'male',
    //     Female:'female',
    //     Other:'other'
    // })

    // const oneschema = new Schema({
    //     name:String,
    //     gender:{
    //         type:String,
    //         enum:Object.values(genders)
    //     }
    // })

    // Object.assign(oneschema.statics,{
    //         genders
    // })


    // const one = Model('one',oneschema)

    // const number = new one({
    //     name:'hiren',
    //     gender:{
    //         type:'Male'
    //     }
    // })

}
