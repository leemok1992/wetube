import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text : {
        type : String,
        required : "text is required"
    },
    createAt : {
        type : Date,
        default : Date.now
    }
});

const model = mongoose.model("commendModel",commentSchema);
export default model;