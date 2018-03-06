# coding = UTF-8

import hashlib
print( hashlib.sha256( "I am Satoshi Nakamoto".encode() ).hexdigest() )

str = hashlib.sha256( "I am Satoshi Nakamoto".encode() ).hexdigest()
print( len(str) )