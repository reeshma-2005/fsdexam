const Mongoose=require("mongoose");
const EmailSchema=Mongoose.Schema(
    {
      email:{
        type:String,
        required:true
      },
      otp:{
        type:String,
        required:true
      }
    }
);
const EmailModel=Mongoose.model("emaildata",EmailSchema);
module.exports=EmailModel;