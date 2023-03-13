const mongoose = require("mongoose");
const usuario = require("./users");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
  tarea: String,
  descripcion: String,
  _idUser: { type: Schema.ObjectId, ref: usuario },
});
module.exports = mongoose.model("lista-tareas", taskSchema);
