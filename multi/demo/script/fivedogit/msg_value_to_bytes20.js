var msgvaluetobytes20Contract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getFinalval","outputs":[{"name":"","type":"bytes20"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitialval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"convertMsgValueToBytes20","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getUint80val","outputs":[{"name":"","type":"uint80"}],"payable":false,"stateMutability":"view","type":"function"}]);
var msgvaluetobytes20 = msgvaluetobytes20Contract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b6102688061001e6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631ff8ac8a146100675780633515519c146100ae578063988483d4146100d7578063ab98458e146100ec575b600080fd5b341561007257600080fd5b61007a61012d565b60405180826bffffffffffffffffffffffff19166bffffffffffffffffffffffff1916815260200191505060405180910390f35b34156100b957600080fd5b6100c1610150565b6040518082815260200191505060405180910390f35b34156100e257600080fd5b6100ea610159565b005b34156100f757600080fd5b6100ff61021c565b604051808269ffffffffffffffffffff1669ffffffffffffffffffff16815260200191505060405180910390f35b60006001600a9054906101000a90046c0100000000000000000000000002905090565b60008054905090565b34600081905550600034118061017957506a010000000000000000000034105b1561021a5734600160006101000a81548169ffffffffffffffffffff021916908369ffffffffffffffffffff160217905550600160009054906101000a900469ffffffffffffffffffff1669ffffffffffffffffffff166c01000000000000000000000000026001600a6101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690836c01000000000000000000000000900402179055505b565b6000600160009054906101000a900469ffffffffffffffffffff169050905600a165627a7a72305820ce752982196ef811ed497bdcb28bb7c5972157b5aee87e3029ae966f134df4570029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })