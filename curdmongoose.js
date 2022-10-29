const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/sanju");
const ProductSchema = new mongoose.Schema({
    name: String,
    age: Number,
    job: String
});

// const saveInDB = async () => {
//     const ProductsModel = mongoose.model('products', ProductSchema);
//     let data = new ProductsModel({ name: "niraj", age: 30, job: "engineer" });
//     let result = await data.save();
//     console.log(result);
// }
// saveInDB();
const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        { name: "Rinki" },
        {
            $set: { age: 41 }
        }
    )
    console.log(data);

}
updateInDB()
// const deleteInDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.deleteOne({ name: "rupa" });
//     console.log(data);
// }
// deleteInDB();
// const findInDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.find();
//     console.log(data);
// }
// deleteInDB();
// findInDB();