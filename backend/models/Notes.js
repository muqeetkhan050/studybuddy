import Mongoose from 'mongoose';

const NotesSchema=new Mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true

    },
    content:{
        type:String,
        required:true
    }
})

export default Mongoose.model('Notes',NotesSchema)