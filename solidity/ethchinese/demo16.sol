pragma solidity 0.4.19;

contract Coin {
    address public minter;
    mapping (address => uint) public balances;

    event Sent(address from, address to, uint amount);

    function Coin() {
        minter = msg.sender;
    }

    function mint(address receiver, uint amount) {
        if (msg.sender != minter) throw;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }

    //¶ÔÍÚ¿óÊ¹ÓÃonlyOwner
    modifier onlyMinter {
      if (msg.sender != minter) throw;
      _;
    }

    function mint2(address receiver, uint amount) onlyMinter {
      balances[receiver] += amount;
    }

    function changeMinter(address _to) onlyMinter {
      minter = _to;
    }
}