const Mongoose=require("mongoose");
const OtpSchema=Mongoose.Schema(
    {
      
      otp:{
        type:String,
        required:true
      }
    }
);
const OtpModel=Mongoose.model("otpdata",OtpSchema);
module.exports=OtpModel;