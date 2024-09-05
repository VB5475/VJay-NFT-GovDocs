async function main() {
 const MyNFT = await ethers.getContractFactory("NFT20");

 // Replace this with the desired initial owner address
 const initialOwner = "0x47Fd3622841bd24721d94EA240bD70Ee431bBe80";

 // Start deployment, passing initialOwner as a constructor argument
 const myNFT = await MyNFT.deploy(initialOwner);
 console.log("Contract deployed to address:", myNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
  console.error(error);
  process.exit(1);
 });
