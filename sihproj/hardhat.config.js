/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
// module.exports = {
//    solidity: “0.8.9”,
//    defaultNetwork: “mumbai”,
//    networks: {
//      hardhat: {},
//      mumbai: {
//        url: API_URL,
//        accounts: [`0x${PRIVATE_KEY}`],
//      },
//    },
// };

module.exports = {
 solidity: {
  version: "0.8.20",
  settings: {
   optimizer: {
    enabled: true,
    runs: 200,
   },
  },
 },
 networks: {
  hardhat: {},
  mumbai: {
   url: "https://rpc-amoy.polygon.technology/",

   // url: API_URL,
   accounts: [`0x${PRIVATE_KEY}`],
  },
 },
};

// module.exports = {
//   solidity: {
//     version: "0.8.9",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   paths: {
//     artifacts:'./src/artifacts'
//   },
//   networks: {
//     hardhat: {},
//     mumbai: {
//       url:"https://rpc-mumbai.maticvigil.com",

//       // url: API_URL,
//       accounts: [`0x${PRIVATE_KEY}`],
//     },
//   },
// };

// 0xdc7E32f619Ed90ebEd72Fe8d94EA4ed34C9e32Ce
// liquid else trouble tank sugar sea sleep easy profit snack duty clog

// 0x51469A96044387786C6596F8bb98faC647cd502c
