const jwt = require("jsonwebtoken");

const validateToken = async function (req, res, next) {
  let token;
  let authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (token === undefined) {
      return res.status(401).json({
        msg: "Token is undefined",
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      res.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({
        msg: "User is not authorized",
      });
    }
  }
};

module.exports = validateToken;
