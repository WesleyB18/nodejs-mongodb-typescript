import mongoose, { Schema } from "mongoose";

const UserModel = new Schema({
  nome: String,
  idade: Number
}, {
  timestamps: true
})

export default mongoose.model('User', UserModel)
