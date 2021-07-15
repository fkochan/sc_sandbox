const DaoToken = artifacts.require("DaoToken")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function () {
        console.log("begin script")
        const accounts = await new web3.eth.getAccounts()
        const daoToken = await DaoToken.deployed()
        const farmToken = await FarmToken.deployed()

        // Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom.
        // This is zero by default.
        const allowanceBefore = await daoToken.allowance(
        accounts[0],
        farmToken.address
        )
        console.log(
        "Amount of DAO Token & FarmToken is allowed to transfer on our behalf Before: " +
            allowanceBefore.toString()
        )

        // In order to allow the Smart Contract to transfer to DAO Token (ERC-20) on the accounts[0] behalf,
        // we must explicitly allow it.
        // We allow farmToken to transfer x amount of DAO Token on our behalf
        await daoToken.approve(farmToken.address, web3.utils.toWei("100", "ether"))

        // Validate that the farmToken can now move x amount of DAO Token on our behalf
        const allowanceAfter = await daoToken.allowance(accounts[0], farmToken.address)
        console.log(
        "Amount of DAO Token & FarmToken is allowed to transfer on our behalf After: " +
            allowanceAfter.toString()
        )

        // Verify accounts[0] and farmToken balance of DAO Token before and after the transfer
        balanceDaoTokenBeforeAccounts0 = await daoToken.balanceOf(accounts[0])
        balanceDaoTokenBeforeFarmToken = await daoToken.balanceOf(farmToken.address)
        console.log("*** Dao Token ***")
        console.log(
        "Balance DAO Token Before accounts[0] " +
            web3.utils.fromWei(balanceDaoTokenBeforeAccounts0.toString())
        )
        console.log(
        "Balance DAO Token Before TokenFarm " +
            web3.utils.fromWei(balanceDaoTokenBeforeFarmToken.toString())
        )

        console.log("*** Farm Token ***")
        balanceFarmTokenBeforeAccounts0 = await farmToken.balanceOf(accounts[0])
        balanceFarmTokenBeforeFarmToken = await farmToken.balanceOf(farmToken.address)
        console.log(
        "Balance FarmToken Before accounts[0] " +
            web3.utils.fromWei(balanceFarmTokenBeforeAccounts0.toString())
        )
        console.log(
        "Balance FarmToken Before TokenFarm " +
            web3.utils.fromWei(balanceFarmTokenBeforeFarmToken.toString())
        )
        // Call Deposit function from FarmToken
        console.log("Call Deposit Function")
        await farmToken.deposit(web3.utils.toWei("100", "ether"))
        console.log("*** Dao Token ***")
        
        
        balanceDaoTokenAfterAccounts0 = await daoToken.balanceOf(accounts[0])
        balanceDaoTokenAfterFarmToken = await daoToken.balanceOf(farmToken.address)
        console.log(
        "Balance Dao Token After accounts[0] " +
            web3.utils.fromWei(balanceDaoTokenAfterAccounts0.toString())
        )
        console.log(
        "Balance Dao Token After TokenFarm " +
            web3.utils.fromWei(balanceDaoTokenAfterFarmToken.toString())
        )

        console.log("*** Farm Token ***")
        balanceFarmTokenAfterAccounts0 = await farmToken.balanceOf(accounts[0])
        balanceFarmTokenAfterFarmToken = await farmToken.balanceOf(farmToken.address)
        console.log(
        "Balance FarmToken After accounts[0] " +
            web3.utils.fromWei(balanceFarmTokenAfterAccounts0.toString())
        )
        console.log(
        "Balance FarmToken After TokenFarm " +
            web3.utils.fromWei(balanceFarmTokenAfterFarmToken.toString())
        )
        console.log("end script")
}
