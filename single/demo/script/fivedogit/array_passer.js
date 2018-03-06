var incmap = [11,12,13,14,15,16,17,18,19];
var arraypasserContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getElevations","outputs":[{"name":"","type":"uint8[3][3]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"incmap","type":"uint8[9]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var arraypasser = arraypasserContract.new(
   incmap,
   {
     from: web3.eth.accounts[0], 
     data: '0x60606040526003600060146101000a81548160ff021916908360ff160217905550341561002b57600080fd5b60405161012080610380833981016040528090506000806000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060009250600091505b600060149054906101000a900460ff1660ff168260ff16101561014457600090505b600060149054906101000a900460ff1660ff168160ff16101561013757838360ff166009811015156100dd57fe5b602002015160018260ff166003811015156100f457fe5b600302018360ff1660038110151561010857fe5b0160000160006101000a81548160ff021916908360ff16021790555060018301925080806001019150506100af565b818060010192505061008d565b50505050610229806101576000396000f300606060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063049b785214610046575b600080fd5b341561005157600080fd5b6100596100ba565b604051808260036000925b818410156100aa5782846020020151600360200280838360005b8381101561009957808201518184015260208101905061007e565b505050509050019260010192610064565b9250505091505060405180910390f35b6100c26101a3565b6100ca6101a3565b600080600091505b600060149054906101000a900460ff1660ff168260ff16101561019a57600090505b600060149054906101000a900460ff1660ff168160ff16101561018d5760018160ff1660038110151561012357fe5b600302018260ff1660038110151561013757fe5b0160000160009054906101000a900460ff16838260ff1660038110151561015a57fe5b60200201518360ff1660038110151561016f57fe5b602002019060ff16908160ff168152505080806001019150506100f4565b81806001019250506100d2565b82935050505090565b610120604051908101604052806003905b6101bc6101d2565b8152602001906001900390816101b45790505090565b6060604051908101604052806003905b600060ff168152602001906001900390816101e257905050905600a165627a7a72305820d2857aef7a1450d1faae8e5350c151065da2079f5e05fefed80b14db12254fb70029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })