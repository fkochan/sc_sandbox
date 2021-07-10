pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ShitToken is ERC20 {
    constructor() ERC20("ShitToken", "SHIT") {
        _mint(msg.sender, 100000000000000000000);
    }
}
