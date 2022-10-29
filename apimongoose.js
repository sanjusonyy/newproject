const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result)
    resp.send(result);
})

app.get("/list",async (req,resp)=>{    //Get Method
    let data = await Product.find();
    resp.send(data);
})
app.delete("/delete/:_id",async (req,resp)=>{    //delete method
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})
app.put("/update/:_id",async (req,resp)=>{    //Update method
    console.log(req.params);
    let data = await Product.updateOne(
       req.params,             //condition
        {$set:req.body }        //$set update data
        
        );
    resp.send(data);
})





app.listen(5000);

