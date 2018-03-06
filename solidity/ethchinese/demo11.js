var demoContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"addSzabo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addFinney","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addWei","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var demo = demoContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b670de0b6b3a76400006000819055506101418061002d6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063067b928c146100675780635b7b82801461007c578063b69ef8a814610091578063f45debf4146100ba575b600080fd5b341561007257600080fd5b61007a6100cf565b005b341561008757600080fd5b61008f6100e5565b005b341561009c57600080fd5b6100a46100fd565b6040518082815260200191505060405180910390f35b34156100c557600080fd5b6100cd610103565b005b64e8d4a510006000808282540192505081905550565b66038d7ea4c680006000808282540192505081905550565b60005481565b600160008082825401925050819055505600a165627a7a72305820ca448fc3c956e57d17b8268c41b372e45589ee1ce74f49b2e2e32dfeec473ba80029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })