import mongoose from "mongoose";

const user = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    city:String,
    phone:Number
},{timestamps:true});


export default mongoose.model("USERS",user);