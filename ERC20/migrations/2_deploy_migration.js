const ShitToken = artifacts.require("ShitToken");

module.exports = async function (deployer) {
    const myToken = await ShitToken.deployed();
    await console.log("Minting complete");
};
