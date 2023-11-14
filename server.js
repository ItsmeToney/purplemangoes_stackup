// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');



//firebase

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });



let serviceAccount = require("./ecomm-23248-firebase-adminsdk-qcqpg-0fc019f184.json");
const { error } = require('console');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


let db = admin.firestore();


// declare static path
let staticPath = path.join(__dirname, "public");


//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());


//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath , "index.html"));
})




//signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})


app.post('/signup', (req, res) => {
    let { name, email, password, number, tac, notification } = req.body;

    // form validations
    if(name.length < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    } else if(!email.length){
        return res.json({'alert': 'enter your email'});
    } else if(password.length < 8){
        return res.json({'alert': 'password should be 8 letters long'});
    } else if(!number.length){
        return res.json({'alert': 'enter your phone number'});
    } else if(!Number(number) || number.length < 10){
        return res.json({'alert': 'invalid number, please enter valid one'});
    } else if(!tac){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    } 

    // store user in db
db.collection('users').doc(email).get()
.then(user => {
    if(user.exists){
        return res.json({'alert': 'email already exists'});
    } else{
        // encrypt the password before storing it.
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                req.body.password = hash;
                db.collection('users').doc(email).set(req.body)
                .then(data => {
                    res.json({
                        name: req.body.name,
                        email: req.body.email,
                        seller: req.body.seller,
                    })
                })
            })
        })
    }
})
         


          
})


//login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(staticPath, "login.html"));
})

app.post('/login',(req,res)=>{
let {email,password} = req.body;

if(!email.length || !password.length) {

    return res.json({'alert':'Fill all the  inputs'})
}

db.collection('users').doc(email).get()
.then(user=>{
    if(!user.exists) {
        return res.json({'alert':'Log in email does not exist'})
    }
    else{

        bcrypt.compare(password,user.data().password,(err,result)=>{
            if(result){
                let data=user.data();
                return res.json({
                    name:data.name,
                    email:data.email,
                    seller:data.seller,

                })
            }else{
                return res.json({
                    'alert':'password is Incorrect'
                });
            }
        })
    }
})




})
//seller route
app.get('/seller',(req,res)=>{
    res.sendFile(path.join(staticPath,"seller.html"));
})

app.post('/seller',(req,res)=>{
    let {name, about , address, number, tac, legitInfo, email} = req.body;
    if(!name || !about || !address || !number || !Number(number)){
        return res.json({'alert': 'some information(s) is/are invalid '});
    
    }else if(!tac || !legitInfo){
               return res.json({'alert':'you must agree to our terms and conditions'})
    }else{
        //update users seller status here
        db.collection('sellers').doc(email).set(req.body).then(data =>{
            db.collection('users').doc(email).update({
                seller: true
            }).then(data =>{
                res.json(true);
            })
        })
    }

})

// add product
app.get('/add-product', (req, res) => {
    res.sendFile(path.join(staticPath, "addProduct.html"));
})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect(path.join(staticPath,'/404'));
})


app.listen(3000, () => {
    console.log('listening on port 3000.......');
})












