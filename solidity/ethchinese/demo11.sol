pragma solidity 0.4.19;
contract demo {
    uint public balance;
    function demo() {
        balance = 1 ether;
    }

    function addFinney() {
        balance += 1 finney;
    }

    function addSzabo() {
        balance += 1 szabo;
    }

    function addWei() {
        balance += 1 wei;
    }
}