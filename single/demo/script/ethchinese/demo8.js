var demoContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"b2","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"f","outputs":[{"name":"str","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"Left","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"Forward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"Right","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var demo = demoContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b60008060006101000a81548160ff0219169083600281111561002d57fe5b0217905550610380806100416000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630add6ef21461007257806326121ff0146100a95780634e662144146101375780638c28f4431461014c578063efd1da7f14610161575b600080fd5b341561007d57600080fd5b610085610176565b6040518082600281111561009557fe5b60ff16815260200191505060405180910390f35b34156100b457600080fd5b6100bc610188565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fc5780820151818401526020810190506100e1565b50505050905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014257600080fd5b61014a6102d1565b005b341561015757600080fd5b61015f6102f6565b005b341561016c57600080fd5b61017461031b565b005b6000809054906101000a900460ff1681565b610190610340565b6000600281111561019d57fe5b6000809054906101000a900460ff1660028111156101b757fe5b14156101fa576040805190810160405280600481526020017f4c6566740000000000000000000000000000000000000000000000000000000081525090506102ce565b6001600281111561020757fe5b6000809054906101000a900460ff16600281111561022157fe5b1415610264576040805190810160405280600581526020017f526967687400000000000000000000000000000000000000000000000000000081525090506102ce565b60028081111561027057fe5b6000809054906101000a900460ff16600281111561028a57fe5b14156102cd576040805190810160405280600781526020017f466f72776172640000000000000000000000000000000000000000000000000081525090506102ce565b5b90565b60008060006101000a81548160ff021916908360028111156102ef57fe5b0217905550565b60026000806101000a81548160ff0219169083600281111561031457fe5b0217905550565b60016000806101000a81548160ff0219169083600281111561033957fe5b0217905550565b6020604051908101604052806000815250905600a165627a7a72305820d560c47663ccd105a33fd42b306613c04b2532a3fdcae7a83ce0b53c4161ce200029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })