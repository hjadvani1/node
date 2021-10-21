// const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

// const props = {

// class Post extends Model {
//   constructor () {
//     super()
//     this.schema(props)
//   }
// }

// module.exports = Post

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/coffeehousedb").then(() => {

})

const propsSchema = new mongoose.Schema({
  image: { type: String, default: "" },
  title: { type: String, default: "", display: true },
  preview: { type: String, default: "", trim: true },
  category: { type: String, default: "", lowercase: true, trim: true },
  text: { type: String, default: "", isHtml: true },
  author: { type: Object, default: {}, immutable: true },
  slug: { type: String, default: "", immutable: true },
  type: { type: String, default: "", immutable: true },
  numReplies: { type: Number, default: 0, immutable: true },
  isPublic: { type: String, default: "no", immutable: true },
  schema: { type: String, default: "post", immutable: true },
  dateString: { type: String, default: "", immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true },
});

const categorySchema = new mongoose.Schema({
    category: { type: String, default: 'abc' },
});

const Category = mongoose.model("categories", categorySchema);

const itemSchema = new mongoose.Schema({
  Iname: { type: String, default: "" },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "categories" }],
  image: { type: String, default: "" },
  ingredients: [{ type: String, default: "" }],
  price: { type: Number, default: 0 },
});

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: { type: String, default: "" },
  phone: { type: Number, default: "" },
  date: { type: String, default: "" },
  time: { type: String, default: "" },
  person: { type: String, default: "" },
});

const Props = mongoose.model("props", propsSchema);

const Items = mongoose.model("items", itemSchema);

const Order = mongoose.model("orders", orderSchema); 
// module.exports= { Props,Items,Order}

// module.exports =Order
// module.exports=Items
module.exports = { Category, Order,Items};
