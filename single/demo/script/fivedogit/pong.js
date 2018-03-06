var _pongval = -22;
var pongContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_pongval","type":"int8"}],"name":"setPongval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPongvalConstant","outputs":[{"name":"","type":"int8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPongvalTxRetrievalAttempted","outputs":[{"name":"","type":"int8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getPongvalTransactional","outputs":[{"name":"","type":"int8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_pongval","type":"int8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var pong = pongContract.new(
   _pongval,
   {
     from: web3.eth.accounts[0], 
     data: '0x606060405260008060156101000a81548160ff021916908360000b60ff160217905550341561002d57600080fd5b60405160208061039983398101604052808051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600060146101000a81548160ff021916908360000b60ff160217905550506102e2806100b76000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806323a1c2711461007d57806338cc4831146100a357806340193d17146100f857806341c0e1b514610127578063a396541e1461013c578063fb5d57291461016b575b600080fd5b341561008857600080fd5b6100a1600480803560000b90602001909190505061019a565b005b34156100ae57600080fd5b6100b66101bb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561010357600080fd5b61010b6101c3565b604051808260000b60000b815260200191505060405180910390f35b341561013257600080fd5b61013a6101d9565b005b341561014757600080fd5b61014f61026a565b604051808260000b60000b815260200191505060405180910390f35b341561017657600080fd5b61017e610280565b604051808260000b60000b815260200191505060405180910390f35b80600060146101000a81548160ff021916908360000b60ff16021790555050565b600030905090565b60008060149054906101000a900460000b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610268576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b60008060159054906101000a900460000b905090565b60006001600060156101000a81548160ff021916908360000b60ff160217905550600060149054906101000a900460000b9050905600a165627a7a72305820f433235b9feb4c17257533afe7da46c1cc4f411169999cd48f4d9cc5b28aa69f0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })