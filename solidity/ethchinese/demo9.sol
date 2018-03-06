pragma solidity 0.4.19;
/*演示一下结构，如何和数组类型结合，一起使用；*/
contract DemoTypes9 {
  struct Person {
    string name;
    uint sexy; //0: 男性；1:女性；
    uint age;
    string mobile;
  }


  Person[] public PersonList;
  function DemoTypes9() {
    /*数组类型添加元素方式1*/
    uint id = PersonList.length++;
    Person p  = PersonList[id];
    p.name = "阿三";
    p.sexy = 0;
    p.age = 20;
    p.mobile = "13918802350";
  }

  function AddPerson (string _name, uint _sexy, uint _age, string _mobile) {
    /*数组类型添加元素方式2*/
    Person memory tmp;
    tmp.name = _name;
    tmp.sexy = _sexy;
    tmp.age = _age;
    tmp.mobile = _mobile;

    PersonList.push(tmp);
  }

  function AddPerson2 (string _name, uint _sexy, uint _age, string _mobile) {
    /*数组类型添加元素方式3*/
    uint id = PersonList.length++;
    PersonList[id] = Person({name: _name, sexy: _sexy, age: _age, mobile: _mobile});
    }
}