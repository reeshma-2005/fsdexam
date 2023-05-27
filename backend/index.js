const Express=require("express");
const Mongoose=require("mongoose");
const BodyParser=require("body-parser");
const Cors=require("cors")
const app=new Express();
const EmailModel=require("./models/email");
const OtpModel=require('./models/otpmodel')
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(Cors());
Mongoose.connect("mongodb+srv://reeshmasreenath81:reeshmasreenath81@cluster0.j6gueyg.mongodb.net/EmailDb?retryWrites=true&w=majority",{useNewUrlParser:true});
app.post("/addemail",async(req,res)=>{

    let data1={
      email:req.body.email,
      otp:req.body.otp
      
  
    }
    console.log(data1);
    const newEmail=new EmailModel(data1);
    const saveEmail=await newEmail.save();
    res.json(saveEmail);
    console.log(saveEmail);
    
      
  
  
  
  })
  app.post("/otpsearch/:id",async(req,res)=>{
    try {
      console.log(req.params.otp);
      const otp1=await OtpModel.find(req.params.otp);
      console.log(otp1)
      if(!otp1){
          return res.send("not found");
          //  res.send(data);
      }
     else{
      res.send(otp1);
     }
    } catch (error) {
      res.status(500).send(error);
      // console.log(error)
    }
  })

  app.listen(3002,()=>{
    console.log("server started");
})

