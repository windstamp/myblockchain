pragma solidity 0.4.19;
contract demo{
    mapping (bytes32 => uint) public balances;
    function demo() {
        balances["steve"] = 100;
        balances["nathan"] = 1000;
    }

    function add(bytes32 usr,uint amount) {
        balances[usr] += amount;
    }

    function update(bytes32 usr, uint amount) {
        balances[usr] = amount;
    }

    function del(bytes32 usr) {
        balances[usr] = 0;
    }
}