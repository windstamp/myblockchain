var basiciteratorContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getSum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var basiciterator = basiciteratorContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b6000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600090505b600a8160ff1610156100a2578060018260ff16600a8110151561007557fe5b602091828204019190066101000a81548160ff021916908360ff1602179055508080600101915050610056565b506101a9806100b26000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806341c0e1b514610051578063569c5f6d14610066575b600080fd5b341561005c57600080fd5b61006461008f565b005b341561007157600080fd5b610079610120565b6040518082815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561011e576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b6000806000809150600090505b600a8160ff1610156101725760018160ff16600a8110151561014b57fe5b602091828204019190069054906101000a900460ff1682019150808060010191505061012d565b8160ff1692505050905600a165627a7a72305820a61e17e2d7aeb9b31707623778fa9937168c406fcb815c3d9d729eb14c5424520029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })