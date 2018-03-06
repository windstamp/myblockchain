pragma solidity 0.4.19;
/*数组类型Demo*/
contract DemoTypes303 {
  /*String数组例子*/
  string[] strArr;
  function add(string str){
    strArr.push(str);
  }

  function getStrAt(uint n) constant returns (string s){
    string tmp = strArr[n];
    return tmp;
  }

  function updateStrAt(uint n, string str) {
    strArr[n] = str;
  }

  function deleteStrAt(uint index) {
    uint len = strArr.length;
    if (index >= len) return;
    for (uint i = index; i<len-1; i++) {
      strArr[i] = strArr[i+1];
    }

    delete strArr[len-1];
    strArr.length--;
  }
}