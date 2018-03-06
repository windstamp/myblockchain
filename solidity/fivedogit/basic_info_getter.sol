pragma solidity 0.4.19;

/*
	This is a demonstration of the various global variables available to contracts.
	This list is probably not exhaustive, especially weeks and months from now. (9/2015)
*/

contract basicInfoGetter {

    address creator;

    function basicInfoGetter() public 
    {
        creator = msg.sender; 								    
    }
	
	function getCurrentMinerAddress() constant returns (address) // get CURRENT block miner's address, 
	{														     // not necessarily the address of the miner when this block was born
		return block.coinbase;
	}
	
	function getCurrentDifficulty() constant returns (uint)
	{
		return block.difficulty;
	}
	
	function getCurrentGaslimit() constant returns (uint)  // the most gas that can be spent on any given transaction right now
	{													  
		return block.gaslimit;
	}
	
	function getCurrentBlockNumber() constant returns (uint)
	{
		return block.number;
	}
    
    function getBlockTimestamp() constant returns (uint) // returns current block timestamp in SECONDS (not ms) from epoch
    {													
    	return block.timestamp; 						 // also "now" == "block.timestamp", as in "return now;"
    }
    
    function getMsgData() constant returns (bytes) 		// The data of a call to this function. Always returns "0xc8e7ca2e" for me.
    {										            // adding an input parameter would probably change it with each diff call?
    	return msg.data;
    }
    
    function getMsgSender() constant returns (address)  // Returns the address of whomever made this call
    {													// (i.e. not necessarily the creator of the contract)
    	return msg.sender;
    }
    
    function getMsgValue() constant returns (uint)		// returns amt of wei sent with this call
    {
    	return msg.value;
    }
    
    /***  A note about gas and gasprice:
     
     Every transaction must specify a quantity of "gas" that it is willing to consume (called startgas), 
     and the fee that it is willing to pay per unit gas (gasprice). At the start of execution, 
     startgas * gasprice ether are removed from the transaction sender's account. 
     Whatever is not used is immediately refunded.
     
     */
    
    function getMsgGas() constant returns (uint)        
    {													
    	return msg.gas;
    }
    
	function getTxGasprice() constant returns (uint) 	// "gasprice" is the amount of gas the sender was *willing* to pay. 50000000 for me. (geth default)
    {											     	
    	return tx.gasprice;
    }
    
    function getTxOrigin() constant returns (address) 	// returns sender of the transaction
    {											   		// What if there is a chain of calls? I think it returns the first sender, whoever provided the gas.
    	return tx.origin;
    }
    
	function getContractAddress() constant returns (address) 
	{
		return this;
	}
    
    function getContractBalance() constant returns (uint) 
    {
    	return this.balance;
    }
    
    /**********
     Standard kill() function to recover funds 
     **********/
    
    function kill()
    { 
        if (msg.sender == creator)
            suicide(creator);  // kills this contract and sends remaining funds back to creator
    }
        
}