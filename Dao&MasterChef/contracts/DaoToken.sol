pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DaoToken is ERC20 {
    constructor() public ERC20("DaoToken", "DTKN"){
        _mint(msg.sender, 1000000000000000000000000);
    }
}

