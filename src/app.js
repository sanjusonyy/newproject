const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../templates/views");
const template_path = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', static_path);
hbs.registerPartials(template_path);

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/register", (req, res) => {
    res.render("register");
})
//create a new user in database
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){
const registerEmployee = new Register({
    firstname : req.body.firstname,
    email : req.body.email,
    lastname : req.body.lastname,
    phone : req.body.phone,
    password : password,
    age : req.body.age, 
    confirmpassword : cpassword,
    gender : req.body.gender,

});

const registered = await registerEmployee.save();
res.status(201).render("index");

        }else{
            res.send("password are not matching")
        }
    

        // console.log(req.body.firstname)
        // res.send(req.body.firstname)


    } catch (error) {
        res.status(400).send(error);
    }


})
app.get("/login", (req, res) => {
    res.render("login");
});


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
