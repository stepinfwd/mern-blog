const mongoose =require("mongoose")
const { model,Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true }, // String is shorthand for {type: String}
  email: { type: String, required: true },
  password: { type: String, required: true },

},{timestamps:true});
module.exports=model("user", userSchema);
