const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
Moralis.start({
  apiKey: process.env.MORALIS_START_APIKEY,
});
// address and tokenID change
async function validatefunction(req, res) {
  const data = req.body;
  if (data.certificate === "pancard") {
    data.smartcontract = "0xe3C8e4bE8C704607D0C97249D984a27113F3860e";
  }
  if (data.certificate === "degree") {
    data.smartcontract = "0xb8bb7D55C941ed2F9AFa91d813C708E42B29fB4B";
  }
  if (data.certificate === "aadhar") {
    data.smartcontract = "0x713D03A733B7d0523F606851aC0480f5E33A6237";
  }
  const address = data.smartcontract;
  const chain = EvmChain.MUMBAI;
  const tokenId = data.tokenId;

  const response = await Moralis.EvmApi.nft.getNFTMetadata({
    address,
    chain,
    tokenId,
  });
  console.log(response);
  if (!response) {
    console.log("respose not found");
    return res.status(404).json({
      msg: "certificate not found",
      ok: false,
    });
  }
  const metadata = response.jsonResponse.token_uri;
  const jsonlink = `https://gateway.pinata.cloud/ipfs/${metadata}`;
  const jsondata = await fetch(jsonlink);
  const resp = await jsondata.json();
  const imagelink = resp.image;
  return res.status(200).json({
    imagelink: imagelink,
    ok: true,
  });
}

module.exports = validatefunction;
