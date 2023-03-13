const jwt = require("jsonwebtoken");
const verify = (req, res, next) => {
  const { token } = req.headers;
  const decoded = jwt.verify(token, "Mamaguevo");
  req.headers._id = decoded.usuaries._id;
  next();
};
module.exports = verify;
