import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avertarUrl: String,
  facebookId: Number,
  githubId: Number
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("userModel", userSchema);

export default model;
