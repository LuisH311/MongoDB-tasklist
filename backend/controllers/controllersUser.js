const express = require("express");
const users = express.Router();
const Users = require("../models/users");
const jwt = require("jsonwebtoken");
users.post("/agregar", async (req, res) => {
  const { usuario, nombre, celular, password } = req.body;
  if (!usuario)
    return res
      .status(404)
      .json({ msg: "se requiere usuario para esta peticion" });
  try {
    const alreadyUser = await Users.findOne({
      usuario: usuario,
    });
    if (alreadyUser)
      return res
        .status(404)
        .json({ msg: "ya existe un usuario con ese usuario" });
    const users = Users({
      usuario,
      nombre,
      celular,
      password: await Users.encryptPassword(password),
    });
    await users.save();
    res.json({ msg: "Usuario creado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
});
users.patch("/", async (req, res) => {
  const { body } = req;
  const { usuario, password } = body;
  if (!usuario || !password)
    return res
      .status(404)
      .json({ msg: "se requiere usuario y contraseña para esta peticion" });
  try {
    const usuaries = await Users.findOne({
      usuario: usuario,
    });
    if (!usuaries)
      return res
        .status(404)
        .json({ msg: "Usuario no registrado", usuaries: null });
    const comparePassword = await Users.comparePassword(
      req.body.password,
      usuaries.password
    );
    if (!comparePassword)
      return res
        .status(401)
        .json({ msg: "contraseña erronea", usuaries: null });
    const token = jwt.sign({ usuaries }, "Mamaguevo", { expiresIn: 60 * 60 });
    res.json({ usuaries, msg: "sign in", token });
  } catch (error) {
    res.status(500).json({ msg: "hable con el admin" });
  }
});
module.exports = users;
