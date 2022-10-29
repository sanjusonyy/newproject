const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: String,
    age: Number,
    job: String
});

module.exports = mongoose.model('products',ProductSchema);