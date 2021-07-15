const DaoToken = artifacts.require("DaoToken")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function () {
  daoToken = await DaoToken.deployed()
  farmToken = await FarmToken.deployed()
  balance = await daoToken.balanceOf(farmToken.address)
  console.log(web3.utils.fromWei(balance.toString()))
}