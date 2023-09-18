require('dotenv').config();
let express=require('express');
let cors=require('cors');
let {connection}=require('./config/db.js')
let bcrypt=require('bcrypt');
let {Usermodel} = require('./models/user.model.js');
let jwt=require('jsonwebtoken');
let app=express();

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send({msg:'working'});
})

app.post("/signup",async(req,res)=>{

    let {name,email,password}=req.body
    let user=await Usermodel.findOne({email})
if(user){
    res.send({msg:"User Exist ! Please Login "})
}   else{
    try{
        let hash=bcrypt.hashSync(password,4);
await Usermodel.create({name,email,password:hash})
res.send({msg:"User sign up success"})        
    }catch(err){
        res.send({msg:"Error during Signup"})
    }
}
})

app.post("/login",async(req,res)=>{
let {email,password}=req.body;
let user=await Usermodel.findOne({email});
if(user){
try{
let userpass=user.password;
let match=bcrypt.compareSync(password,userpass);
if(match){
    let token=jwt.sign({userID:user._id},process.env.SECRET_KEY);
    res.send({msg:"login success",token,userName:user.name})
}else{
    res.send({msg:"Invalid Credentials"})
}
}catch(err){
    res.send({msg:"Login Failed"})
}
}else{
    res.send({msg:"Please Signup first"});
}

})


app.listen(process.env.PORT,()=>{
    connection();
    console.log(`Connected on ${process.env.PORT}`);
})