pragma solidity 0.4.19;

contract Token4 {
  uint[] public balancesOf;
  function Token() {
    balancesOf.push(100);
    balancesOf.push(200);
  }

  function transfer(uint _from, uint _to, uint _amount) {
    balancesOf[_from] -= _amount;
    balancesOf[_to] += _amount;
  }

  function mint(uint value) {
    balancesOf[0] += value;
  }
}