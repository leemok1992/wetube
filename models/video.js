import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "file url is required"
    // required가 충족되지 못하면 값과같은 애러가 생성//
  },
  title: {
    type: String,
    required: "title is reqired"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "commendModel"
    }
  ]
});

const model = mongoose.model("video", videoSchema);
export default model;
