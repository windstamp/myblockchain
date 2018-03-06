var tokenContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
var token = tokenContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b60b38061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063a9059cbb146044575b600080fd5b3415604e57600080fd5b6081600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506083565b005b50505600a165627a7a72305820ff4564141608021631c923f1217b24adede7fc6be8f509f1ca94dc344b27a4a60029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })