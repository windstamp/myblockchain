var initialSupply = 5000;
var tokenContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var token = tokenContract.new(
   initialSupply,
   {
     from: web3.eth.accounts[0], 
     data: '0x60606040526040805190810160405280601081526020017f68747470733a2f2f6d73686b2e746f70000000000000000000000000000000008152506000908051906020019061004f9291906100c3565b50341561005b57600080fd5b60405160208061068d833981016040528080519060200190919050505b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b50610168565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010457805160ff1916838001178555610132565b82800160010185558215610132579182015b82811115610131578251825591602001919060010190610116565b5b50905061013f9190610143565b5090565b61016591905b80821115610161576000816000905550600101610149565b5090565b90565b610516806101776000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680635a3b7e421461005457806370a08231146100e3578063a9059cbb14610130575b600080fd5b341561005f57600080fd5b610067610172565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a85780820151818401525b60208101905061008c565b50505050905090810190601f1680156100d55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100ee57600080fd5b61011a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610210565b6040518082815260200191505060405180910390f35b341561013b57600080fd5b610170600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610228565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102085780601f106101dd57610100808354040283529160200191610208565b820191906000526020600020905b8154815290600101906020018083116101eb57829003601f168201915b505050505081565b60016020528060005260406000206000915090505481565b610233338383610238565b5b5050565b6000808373ffffffffffffffffffffffffffffffffffffffff161415151561025f57600080fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156102ad57600080fd5b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540111151561033b57600080fd5b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401905081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054011415156104e357fe5b5b505050505600a165627a7a72305820f15424904f6b5f70c95b3f6a97c29f166f6c2d7892f1ab56b64a74f35a2f63690029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })