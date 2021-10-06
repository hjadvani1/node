// const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

// const props = {
  

// class Post extends Model {
//   constructor () {
//     super()
//     this.schema(props)
//   }
// }

// module.exports = Post

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/coffeehousedb')


const propsSchema = new mongoose.Schema({

  image: { type: String, default: '' },
  title: { type: String, default: '', display: true },
  preview: { type: String, default: '', trim: true },
  category: { type: String, default: '', lowercase: true, trim: true },
  text: { type: String, default: '', isHtml: true },
  author: { type: Object, default: {}, immutable: true },
  slug: { type: String, default: '', immutable: true },
  type: { type: String, default: '', immutable: true }, // original or link
  numReplies: { type: Number, default: 0, immutable: true },
  isPublic: { type: String, default: 'no', immutable: true },
  schema: { type: String, default: 'post', immutable: true },
  dateString: { type: String, default: '', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }


})

const itemSchema = new mongoose.Schema({

  image:{type:String,default:''},
  name:{type:String,default:'',display:true},
  category:{type:String,default:''},
  description:{type:String,default:''},
  price:{type:Number,default:0},
  schema :{type:String,default:'item',immutable:true},
  timestamp:{type:Date,default:new Date(),immutable:true}




})

const Props = mongoose.model('props',propsSchema)

const Item = mongoose.model('items',itemSchema)

module.exports= {Props,Item}