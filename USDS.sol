// SPDX-License-Identifier: none
// "Mint Dollar","USDM",100000
pragma solidity ^0.8.12;

//import "hardhat/console.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";
//import "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract USDSimple is ERC20 {

    uint8 private _decimal = 2; // cents decimals
    uint private _minMintableStablecoin = 1000; // US$ 10.00
    address private _adminAddress;

    modifier admin {
        require(msg.sender == _adminAddress, "Only the admin can do that");
        _;
    }

    // Constructor on deploy contract: "Simple Dollar","USDS",100000
    constructor(string memory name, string memory symbol, uint _initialSupply) ERC20(name, symbol) {
        // Mint 100 tokens to msg.sender = 100 * 10**uint(decimals())
        // Mint 100.000.000 tokens to msg.sender = 100000000 * 10**uint(decimals())
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        // 100 * 10**uint(decimals()) == 100 units and 100000000000000000000 min units
        // 100000000 * 10**uint(decimals()) == 100.000.000 units and 100000000000000000000 min units
        _adminAddress = msg.sender;
        _mint(msg.sender, _initialSupply * 10**uint(decimals()));
    }

    // Override the decimals to 2 decimals to look like stable coin
    function decimals() public view virtual override returns (uint8) {
        return _decimal;
    }

    // Returns the minimum mintable
    function minMintableStablecoin() public view virtual returns(uint) {
        return _minMintableStablecoin;
    }

    // Enables external mintage
    function mint(uint amount) external payable admin {
        require(amount >= _minMintableStablecoin, "Need to mint at leat the minimum");
        _mint(adminAddress, amount * 10**uint(decimals()));
    }

}