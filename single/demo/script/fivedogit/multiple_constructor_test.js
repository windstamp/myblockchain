var multipleconstructortestContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getSecond","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFirst","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var multipleconstructortest = multipleconstructortestContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x606060405260008060146101000a81548160ff02191690831515021790555060008060156101000a81548160ff021916908315150217905550341561004357600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600060146101000a81548160ff0219169083151502179055506101b4806100ad6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631b03316f1461005c5780631e2231431461008957806341c0e1b5146100b6575b600080fd5b341561006757600080fd5b61006f6100cb565b604051808215151515815260200191505060405180910390f35b341561009457600080fd5b61009c6100e1565b604051808215151515815260200191505060405180910390f35b34156100c157600080fd5b6100c96100f7565b005b60008060159054906101000a900460ff16905090565b60008060149054906101000a900460ff16905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610186576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5600a165627a7a7230582022163741ee649e69a118ff1fad1c89985124371470394887c052f88608865f940029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })