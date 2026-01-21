import Mongoose from 'mongoose';

// const NotesSchema=new Mongoose.Schema({
//     userId: { type: Mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     title:{
//         type:String,
//         required:true

//     },
//     content:{
//         type:String,
//         required:true
//     }
// })

// export default Mongoose.model('Notes',NotesSchema)

const NotesSchema = new Mongoose.Schema({
  userId: { type: Mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true, default: '' }
});
export default Mongoose.model('Notes', NotesSchema);