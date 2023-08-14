// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor() ERC20("MyToken", "MTK") {}

    function mint(uint256 amount) public payable {
        _mint(msg.sender, amount);
    }

    struct asset {
        string name;
        string description;
        uint price;
        uint borrowingPrice;
        address owner;
        bool buyed;
        bool borrowed;
        string image;
        address Borrowed;
    }

    mapping(uint256 => asset) public allAsset;
    mapping(address => asset) public addressAsset;

    function createAsset(
        uint id,
        string memory _name,
        string memory _description,
        uint _price,
        uint _borrowingPrice,
        string memory _image
    ) public {
        require(balanceOf(msg.sender) > 0, "Don't have sufficient token");
        allAsset[id].name = _name;
        allAsset[id].description = _description;
        allAsset[id].price = _price;
        allAsset[id].borrowingPrice = _borrowingPrice;
        allAsset[id].owner = msg.sender;
        allAsset[id].image = _image;

        addressAsset[msg.sender].name = _name;
        addressAsset[msg.sender].description = _description;
        addressAsset[msg.sender].price = _price;
        addressAsset[msg.sender].borrowingPrice = _borrowingPrice;
        addressAsset[msg.sender].owner = msg.sender;
        addressAsset[msg.sender].image = _image;
    }

    function BuyAsset(uint id) public {
        require(
            balanceOf(msg.sender) >= allAsset[id].price,
            "Don't have sufficient token"
        );
        transfer(allAsset[id].owner, allAsset[id].price);
        allAsset[id].owner = msg.sender;
        allAsset[id].buyed = true;
        addressAsset[msg.sender].buyed = true;
    }

    function BorrowAsset(uint id) public {
        require(
            balanceOf(msg.sender) >= allAsset[id].borrowingPrice,
            "Don't have sufficient token"
        );
        allAsset[id].borrowed = true;
        addressAsset[msg.sender].Borrowed = msg.sender;
        allAsset[id].Borrowed = msg.sender;
    }

    function returnAsset(uint id, uint amount) public {
        transfer(allAsset[id].owner, amount);
        allAsset[id].borrowed = false;
    }
}
