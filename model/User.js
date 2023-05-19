import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minimumlength: 6
    }
});

export default mongoose.model("User",userSchema);
//users