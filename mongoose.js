const mongoose = require('mongoose');


const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/sanju");
    const ProductSchema = new mongoose.Schema({
        name:String,
        age:Number
    });
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data= new ProductsModel({name:"mal babu singh",age:30});
    let result = await data.save();
    console.log(result);
}
main();