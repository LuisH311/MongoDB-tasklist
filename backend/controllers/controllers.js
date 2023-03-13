const express = require("express");
const verify = require("../middleware/verifyToken");
const router = express.Router();
const taskSchema = require("../models/models");
router.get("/", verify, (req, res) => {
  const { _id } = req.headers;
  taskSchema
    .find({ _idUser: `${_id}` })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.post("/", verify, async (req, res) => {
  const task = taskSchema(req.body);
  task._idUser = req.headers._id;
  try {
    await task.save();
    res.json({ msg: "La tarea se creo exitosamente" });
  } catch (error) {
    res.json(error);
  }
});
router.put("/:id", verify, async (req, res) => {
  const { id } = req.params;
  const { tarea, descripcion } = req.body;
  try {
    await taskSchema.updateOne({ _id: id }, { $set: { tarea, descripcion } });
    res.json({ msg: "La tarea se actualizo exitosamente" });
  } catch (err){
     res.json(err);
  }
});

router.delete("/:id", verify, async (req, res) => {
  const { id } = req.params;
  try {
    await taskSchema.remove({ _id: id });
    res.json({ msg: "La tarea se elimino exitosamente" });
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
