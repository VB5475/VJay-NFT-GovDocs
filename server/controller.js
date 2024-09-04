const { signup, findemail } = require("./model/signupmodel");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const minter = require("../sihproj/scripts/mint-nft");
// Use the api keys by providing the strings directly
const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK(
  "2a087d298fb0070ecd98",
  "08dada13ff674fea9fb062eaec7677f0d9a6a43dc47e61ad252bba7b47a52237"
);

const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiOTA3NTcwYi02MjRlLTQ3MmQtOTQzOS01ODk0YWEzMDUzNTQiLCJlbWFpbCI6ImpkYmhhcmFkdmEyMDAyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0MWMzZGEyMzg2NTFlZTJiODZmYyIsInNjb3BlZEtleVNlY3JldCI6ImFlMDEzY2QxNWUzZTIyODIzYjExMzhmOGE1ZTM5ZTZhYTQ0ODc5ODlkZWNkZGE2NWE2OGUxYzZmODZmYTEwYjciLCJpYXQiOjE2OTQ5MzA3NTZ9.7WMR4MwFx-8B2MX5KKlgXqPPIxcuAnVk9M9TZyhgnjQ"; // Replace with your actual JWT token

const pinFileToIPFS = async (path) => {
  const readableStreamForFile = fs.createReadStream(path);
  const options = {
    pinataMetadata: {
      name: "file",
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };
  const res = await pinata.pinFileToIPFS(readableStreamForFile, options);
  return res;
};

async function pinJSONToIPFS(body) {
  const options = {
    pinataMetadata: {
      name: "file",
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };
  const res = await pinata.pinJSONToIPFS(body, options);
  return res;
}

async function generatefunction(req, res) {
  console.log("hello generatefunction");
  const data = req.body;
  const file = req.file;
  const path = file.path;
  console.log(path);
  const smartcontract = res.user.smartcontract;
  const resp = await pinFileToIPFS(path);
  console.log(resp);
  // Create an initial userData object with the image field
  const userData = {
    attributes: [
      {
        color: "Blue",
        value: "ABC",
      },
    ],
    description: "developer",
    image: `https://gateway.pinata.cloud/ipfs/${resp.IpfsHash}`,
    ...data, // Use the spread operator to merge the data fields
  };
  const jsonresp = await pinJSONToIPFS(userData);
  console.log(jsonresp);
  const jsonhash = jsonresp.IpfsHash;
  console.log(jsonhash);
  let tokenId;
  try {
    const transactionReceipt = await minter(smartcontract, jsonhash);
    tokenId = transactionReceipt.result;
  } catch (error) {
    console.error("Error:", error);
  }
  return res.status(200).json({
    tokenId: tokenId,
  });
}

async function signupfunction(req, res) {
  const data = req.body;
  const emailres = await findemail(data.email);
  if (emailres) {
    return res.status(400).json({
      msg: "user already exist",
    });
  }
  if (data.certificate === "pancard") {
    data.smartcontract = "0xe3C8e4bE8C704607D0C97249D984a27113F3860e";
  }
  if (data.certificate === "degree") {
    data.smartcontract = "0xb8bb7D55C941ed2F9AFa91d813C708E42B29fB4B";
  }
  if (data.certificate === "aadhar") {
    data.smartcontract = "0x713D03A733B7d0523F606851aC0480f5E33A6237";
  }
  const response = await signup(data);
  if (!response.ok) {
    return res.status(400).json({
      msg: "some error occured!! Please try again",
    });
  }
  console.log("user register successfull");
  res.status(200).json({
    msg: "user register successfull",
  });
}

async function logindunction(req, res) {
  const data = req.body;
  console.log(data);
  const response = await findemail(data.email);
  console.log(response);
  if (!response) {
    return res.status(200).json({
      msg: "User Does not exist!! Please SignUp firsr",
      ok: false,
    });
  }
  if (response && response.password == data.password) {
    const accesstoken = jwt.sign(
      {
        email: response.email,
        name: response.name,
        smartcontract: response.smartcontract,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "100m" }
    );
    return res.status(200).json({
      token: accesstoken,
      ok: true,
    });
  }
}

module.exports = { generatefunction, signupfunction, logindunction };
