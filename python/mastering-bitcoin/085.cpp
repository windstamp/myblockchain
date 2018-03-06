int64_t GetBlockValue(int nHeight, int64_t nFees)
{
	int64_t nSubsidy = 50 * COIN;
	int halvings = nHeight / Params().SubsidyHalvingInterval();
	
	// 如果右移的次数未定义，区块奖励强制为零
	if (halvings >= 64)
		return nFees;
	
	// Subsidy每210,000个区块减半一次，大概每4年发生一次
	nSubsidy >>= halvings;
	
	return nSubsidy + nFees;
}
