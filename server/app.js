const express = require("express");
const cors = require("cors");
const app = express();

const auth = require("./middleware/auth");

const {
  generatefunction,
  signupfunction,
  logindunction,
} = require("./controller");
const validatefunction = require("./index");

const upload = require("./middleware/upload");

const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

router.post("/name", auth,upload.single("image"), generatefunction);
router.post("/validate", validatefunction);
router.post("/signup", signupfunction);
router.post("/login", logindunction);

module.exports = app;
