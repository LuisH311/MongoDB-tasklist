const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./controllers/controllers");
const cors = require("cors");
const dotenv = require("dotenv");
const users = require("./controllers/controllersUser");
dotenv.config();

app.use(express.json());
app.use(cors({
  origin: '*',
  credentials: true
}))
app.use("/tareas", router);
app.use("/users", users);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log(error));

app.listen(3250, () => {
  console.log("Server listening on port", 3250);
});
