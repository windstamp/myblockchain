pragma solidity 0.4.19;
contract Token {
  mapping (address => uint) public balancesOf;
  address public owner;
  function Token() {
    owner = msg.sender;
    balancesOf[msg.sender] = 10000;
  }

  function transfer(address _to, uint _value) {
    if (balancesOf[msg.sender] < _value) throw; //����ת�Ƴ�ȥ�Ĵ��ҳ�����ǰ�Ĵ��
    if (balancesOf[_to] + _value < balancesOf[_to]) throw; //�����Լ������Լ������ߵݹ����
    balancesOf[msg.sender] -= _value;
    balancesOf[_to] += _value;
  }

  function mint(uint _amount) {
    balancesOf[owner] += _amount;
  }
}