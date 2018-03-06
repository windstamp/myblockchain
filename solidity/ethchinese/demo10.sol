pragma solidity 0.4.19;

contract Coin {
    address public abc;
    function Coin() {
        abc = msg.sender;
    }

    function pay() returns (address n) {
        address result;
        result = msg.sender;
        return result;
    }
}