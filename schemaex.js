const { throws } = require('assert')
const mongoose = require('mongoose')
const { mainModule } = require('process')

main().catch(err=> console.log(err))


async function main()
{

    await mongoose.connect('mongodb://localhost:27017/test1',{autoIndex:false})

    const schema = new mongoose.Schema({
        name:    String,
        binary:  Buffer,
        living:  Boolean,
        updated: { type: Date, default: Date.now },
        age:     { type: Number, min: 18, max: 65 },
        mixed:   mongoose.Schema.Types.Mixed,
        _someId: mongoose.Schema.Types.ObjectId,
        decimal: mongoose.Schema.Types.Decimal128,
        array: [],
        ofString: [String],
        ofNumber: [Number],
        ofDates: [Date],
        ofBuffer: [Buffer],
        ofBoolean: [Boolean],
        ofMixed: [mongoose.Schema.Types.Mixed],
        ofObjectId: [mongoose.Schema.Types.ObjectId],
        ofArrays: [[]],
        ofArrayOfNumbers: [[Number]],
        nested: {
          stuff: { type: String, lowercase: true, trim: true }
        },
        map: Map,
        mapOfString: {
          type: Map,
          of: String
        }
      })
      
      
      
      const Thing = mongoose.model('Thing', schema);
      
      const m = new Thing;
      m.name = 'Statue of Liberty';
      m.age = 125;
      m.updated = new Date;
      m.binary = Buffer.alloc(0);
      m.living = false;
      m.mixed = { any: { thing: 'i want' } };
      m.markModified('mixed');
      m._someId = new mongoose.Types.ObjectId;
      m.array.push(1);
      m.ofString.push("strings!");
      m.ofNumber.unshift(1,2,3,4);
      m.ofDates.addToSet(new Date);
      m.ofBuffer.pop();
      m.ofMixed = [1, [], 'three', { four: 5 }];
      m.nested.stuff = 'good';
      m.map = new Map([['key', 'value']]);
      console.log((m));
 
}