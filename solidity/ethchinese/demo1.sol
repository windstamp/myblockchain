pragma solidity 0.4.19;
contract Demo1 {
  /*计算从1到N的求和*/
  function f(uint n) returns (uint sum) {
    if (n == 0) throw; uint result = 0;
    for (uint i=0; i<=n; i++) {
      result +=i;
    }
    return result;
  }
}