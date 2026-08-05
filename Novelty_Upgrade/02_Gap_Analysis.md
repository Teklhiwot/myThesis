# Gap Analysis: Thesis-to-Manuscript Transformation

## Identified Weaknesses in Original Thesis

1. **Full On-Chain Storage**: All surveillance data stored directly on Ethereum - unsustainable at scale
2. **Weak Privacy Model**: Relies solely on blockchain immutability; no selective disclosure or ZKP
3. **Under-justified Consensus**: PoA adopted without benchmarking or governance discussion
4. **Monolithic Architecture**: No edge/fog layer; rural health posts treated as full peers
5. **No Scalability Engineering**: Missing Layer-2, sharding, or off-chain patterns
6. **Thesis-style Writing**: First-person language, textbook explanations, implementation tutorials
7. **Missing Economic Model**: No tokenized incentives for sustained system participation

## Required Corrections (All Addressed in Rewrite)

- Replace monolithic on-chain with 5-tier hybrid topology
- Introduce IPFS off-chain storage with hash anchoring
- Add ZKP-based privacy layer
- Implement tiered validator governance
- Optimize consensus for LMIC constraints
- Add edge/fog preprocessing tier
- Introduce tokenized transaction economics
- Rewrite all sections in Wiley journal style
