
const mongoose = require("mongoose");


// const dateformat = require('mongoose-date-format')

mongoose.connect("mongodb://localhost:27017/coffeehousedb").then(() => {

})

// const propsSchema = new mongoose.Schema({
//   image: { type: String, default: "" },
//   title: { type: String, default: "", display: true },
//   preview: { type: String, default: "", trim: true },
//   category: { type: String, default: "", lowercase: true, trim: true },
//   text: { type: String, default: "", isHtml: true },
//   author: { type: Object, default: {}, immutable: true },
//   slug: { type: String, default: "", immutable: true },
//   type: { type: String, default: "", immutable: true },
//   numReplies: { type: Number, default: 0, immutable: true },
//   isPublic: { type: String, default: "no", immutable: true },
//   schema: { type: String, default: "post", immutable: true },
//   dateString: { type: String, default: "", immutable: true },
//   timestamp: { type: Date, default: new Date(), immutable: true },
// });


      const blogSchema = new mongoose.Schema({
          image:{type:String, default:""},
          author:{type:String, default:""},
          title:{type:String, default:""},
          write:{type:String,default:""},
          date: { type:Date,default:Date.parse()}})

      // blogSchema.plugin(dateformat)

      const categorySchema = new mongoose.Schema({
          category: { type: String, default: 'abc' },
      });

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

      const Blog = mongoose.model("blogs", blogSchema);

      const Items = mongoose.model("items", itemSchema);

      const Category = mongoose.model("categories", categorySchema);

      const Order = mongoose.model("orders", orderSchema); 

module.exports = { Category, Order,Items,Blog};
