const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const Users = new Schema({
  usuario: String,
  nombre: String,
  celular:Number,
  password:String,
},
{timestamps: true , versionKey:false}
);
Users.statics.encryptPassword = async (password)=>{
const salto = await bcrypt.genSalt(10);
return await bcrypt.hash(password, salto);
}
Users.statics.comparePassword = async (password, recievedPassword)=>{
return await bcrypt.compare(password, recievedPassword);
}
module.exports = mongoose.model("usuarios", Users);
