npx create-react-app appname

npm install --save-dev hardhat @openzeppelin/contracts dotenv --save --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0' @alch/alchemy-web3

or

npm install --save-dev hardhat 

npx hardhat 

npm install @openzeppelin/contracts

npm install dotenv --save

npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0'





now go to .config file and make this 
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    artifacts:'./src/artifacts'
  },
  networks: {
    hardhat: {},
    mumbai: {
      url:"https://rpc-mumbai.maticvigil.com",
    
      // url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

npx hardhat compile 

npx hardhat run scripts/deploy.js --network mumbai

npm install @alch/alchemy-web3
 node mint-nft.js
