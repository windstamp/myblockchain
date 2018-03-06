var demo1Contract = web3.eth.contract([{"constant":false,"inputs":[{"name":"n","type":"uint256"}],"name":"f","outputs":[{"name":"sum","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
var demo1 = demo1Contract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b60e18061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063b3de648b146044575b600080fd5b3415604e57600080fd5b606260048080359060200190919050506078565b6040518082815260200191505060405180910390f35b600080600080841415608957600080fd5b60009150600090505b838111151560ab57808201915080806001019150506092565b81925050509190505600a165627a7a72305820d6461064bc1f51ad7af48a5a7101eb9ea609dfded9b5b997b450e97869f8b5f20029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })