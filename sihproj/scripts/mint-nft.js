const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const minter = async (contractAddress, jsoncid) => {
 const API_URL = "https://rpc-mumbai.polygon.technology";

 const PUBLIC_KEY = "0x47Fd3622841bd24721d94EA240bD70Ee431bBe80";
 const PRIVATE_KEY =
  "f14be63162fd4e39549bfecdbf1507447ba90ba61de7a6734cb3f94068f346e8";
 const web3 = createAlchemyWeb3(API_URL);

 const contract = require("../artifacts/contracts/NFT2.0.sol/NFT20.json");

 console.log(JSON.stringify(contract.abi));

 const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

 try {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");

  const tx = {
   from: PUBLIC_KEY,
   to: contractAddress,
   nonce: nonce,
   gas: 500000,
   data: nftContract.methods.safeMint(PUBLIC_KEY, jsoncid).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);

  const signedTx = await signPromise;

  const transactionReceipt = await new Promise((resolve, reject) => {
   web3.eth.sendSignedTransaction(
    signedTx.rawTransaction,
    function (err, hash) {
     if (err) {
      console.log(
       "Something went wrong when submitting your transaction:",
       err
      );
      reject(err); // Reject the promise if there's an error
     } else {
      console.log(
       "The hash of your transaction is: ",
       hash,
       "\nCheck Alchemy's Mempool to view the status of your transaction!"
      );

      // Attempt to get the tokenId by calling the safeMint function
      nftContract.methods
       .safeMint(PUBLIC_KEY, jsoncid)
       .call({ from: PUBLIC_KEY }, (error, result) => {
        if (!error) {
         console.log("The tokenId of the minted NFT is: " + result);
         resolve({ result, hash }); // Resolve the promise with the values
        } else {
         console.error("Error getting tokenId: " + error.message);
         reject(error); // Reject the promise if there's an error
        }
       });
     }
    }
   );
  });

  return transactionReceipt;
 } catch (error) {
  console.error("Error:", error);
  throw error; // Throw the error if there's an error
 }
};

module.exports = minter;
