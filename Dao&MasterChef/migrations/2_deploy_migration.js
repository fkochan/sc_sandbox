const DaoToken = artifacts.require("DaoToken.sol")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function (deployer, network, accounts) {
    //Deploy Dao Token
    await deployer.deploy(DaoToken)
    const daoToken = await DaoToken.deployed()

    // Deploy Farm Token
    await deployer.deploy(FarmToken, daoToken.address)
    const farmToken = await FarmToken.deployed()

}