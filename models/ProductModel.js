const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, maxLength: 255, require: true, },
    slug: { type: String, slug: 'name', unique: true},
    description: { type: String, maxLength: 600 },
    content: { type: String},
    img: { type: String, maxLength: 255 },
    price: { type: Number},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
},
{ timestamps: true }
);

module.exports = mongoose.model('Product', Product);