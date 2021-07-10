const ShitToken = artifacts.require("ShitToken");

contract("ShitToken", async accounts => {

    it("Check Name", async () => {
        let expectedName = "ShitToken"
        let shitToken = await ShitToken.deployed();
        const tokenName = await shitToken.name()
        assert.equal(tokenName, expectedName, "Name Check")
    });

    it("Check Symbol", async () => {
        let expectedSymbol = "SHIT"
        let shitToken = await ShitToken.deployed()
        let symbol = await shitToken.symbol()
        assert.equal(symbol, expectedSymbol, "Symbol Check")
    });

    it("Check Total Supply & Decimals ", async () => {
        let expectedSupply = 100
        let expectedDecimals = 18
        let shitToken = await ShitToken.deployed()
        let decimals = await shitToken.decimals()
        const totalSupply = await shitToken.totalSupply() / 10 ** decimals
        assert.equal(totalSupply, expectedSupply, "Supply Check")
        assert.equal(decimals, expectedDecimals, "Decimal Check")
    });

    it("Check Transfer Method", async () => {
        const amount = 10
        let shitToken = await ShitToken.deployed()
        let decimals = await shitToken.decimals()

        const account_one = accounts[0]
        const account_two = accounts[1]
        const account_one_starting_balance = await shitToken.balanceOf(accounts[0]) / 10 ** decimals
        const account_two_starting_balance = await shitToken.balanceOf(accounts[1]) / 10 ** decimals

        let transfer = await shitToken.transfer(account_two, amount)

        const account_one_ending_balance = await shitToken.balanceOf(accounts[0]) / 10 ** decimals
        const account_two_ending_balance = await shitToken.balanceOf(accounts[1]) / 10 ** decimals
        console.log("account_one_ending_balance", account_one_ending_balance)
        console.log("account_two_ending_balance", account_two_ending_balance)

        const account_one_truth = 90
        const account_two_truth = 10

        //assert.equal(account_one_ending_balance, account_one_truth)
        //assert.equal(account_two_ending_balance.toNumber(), account_two_truth)

    });


});
