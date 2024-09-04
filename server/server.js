const http = require('http');
require('dotenv').config();
const PORT = process.env.SERVER_PORT;
const mongoose = require("mongoose");
const app = require('./app');

const mongo_url =
  "mongodb+srv://jayesh:jayesh@hmsdb.lm6yh9l.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connection.once("open", () => {
    console.log("connection made successfully");
  });
  
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
  

const server = http.createServer(app);

async function startserver() {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    server.listen(PORT, () => {
      console.log(`server is running on port ${PORT}...`);
    });
  }
  startserver();