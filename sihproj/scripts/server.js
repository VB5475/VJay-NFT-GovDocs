const express = require('express');
const app = express();
const { pinFileToIPFS } = require("./upload");

// API call to thai gai jo, pan khota data pass thaya che
// are you there??
//yes
// kya data khota 6e 

app.get('/upload', (req, res) => {
    pinFileToIPFS();
})

app.listen(3500, () => {
    console.log("Server is running on port 3500 !");
})