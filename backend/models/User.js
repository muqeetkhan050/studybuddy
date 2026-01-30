import Mongoose from 'mongoose';

const UserSchema=new Mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default Mongoose.model('User',UserSchema)