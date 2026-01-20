import Mongoose from 'mongoose';

const NotesSchema=new Mongoose.Schema({
    userId: { type: Mongoose.Schema.Types.ObjectId, ref: "User", required: true },
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

const TimerSchema = new Mongoose.Schema({
  userId: { type: Mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  pomodoroMinutes: { type: Number, default: 25 },
  breakMinutes: { type: Number, default: 5 },
  sessionsCompleted: { type: Number, default: 0 }
});
export default Mongoose.model("Timer", TimerSchema);