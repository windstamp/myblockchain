pragma solidity 0.4.19;

contract DemoTypes {
  /*uint public resultOfF;*/
  event LogUint(uint value);
  event LogInt (int value);


  function f(uint a) returns (uint b)
  {
    uint result = a * 8;
    /*resultOfF = result; //debug used only;*/
    LogUint(result);
    return result;
  }

  /*���볤�ȿ�ȣ��������*/
  function f2(int width, int height) returns (int square) {
    if (width < 0 || height < 0) throw;
    int result = width * height;
    LogInt(result);
    return result;
  }

  /*����N������N�Ľ׳ˣ�ѭ��ʵ��*/
  function f3(uint n) returns (uint jiecheng) {
    if (n == 0) throw; uint result = 1;
    for (uint i=1; i<=n; i++) {
      result *= i;
    }
    return result;
  }

  /*�����1��N�����*/
  function f4(uint n) returns (uint sum) {
    if (n == 0) throw; uint result = 0;
    for (uint i=0; i<=n; i++) {
      result +=i;
    }
    return result;
  }
}