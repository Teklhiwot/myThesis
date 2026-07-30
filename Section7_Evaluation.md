# 7. Evaluation

The proposed model and its prototype implementation were evaluated across three dimensions: performance, usability, and security. This multi-dimensional approach assesses operational feasibility (performance), user acceptance (usability), and resilience to adversarial threats (security).

## 7.1 Performance Evaluation

Performance was assessed through block generation time measurement on the Ethereum Rinkeby test network. Ten consecutive experiments were conducted, each measuring the time to generate 12 sequential blocks. The measurement procedure operates as follows: (1) the user node queries the current block number $N$ and records the timestamp $t_N$; (2) the node repeatedly queries the current block number $n$ until 12 increments are observed; (3) at each increment, the time span between consecutive blocks is calculated as $t_n - t_N$; and (4) the block number and timestamp are updated for the next measurement cycle.

Table 5.1 presents the complete results across all 10 experiments and 12 blocks per experiment. Block generation times ranged from 12 to 14 seconds per block, with one outlier of 114 seconds observed in Experiment 5, Block 1 (attributable to network congestion on the shared test network). Excluding this outlier, the total time to produce 12 blocks was consistently approximately 180 seconds. Figure 5.1 presents the corresponding bar plot visualization.

The narrow range of 12–14 seconds per block demonstrates stable and predictable transaction confirmation times under the Proof of Authority (PoA) consensus algorithm employed by the Rinkeby network. PoA eliminates the computational resource expenditure associated with Proof of Work, yielding consistent block generation without the variability inherent in mining-based consensus.

## 7.2 Usability Evaluation

Usability was assessed using the Software Usability Measurement Inventory (SUMI), an internationally standardized psychometric instrument validated for software usability measurement. An academic license was obtained for this study. SUMI evaluates six scales: efficiency, affect, helpfulness, control, learnability, and global usability. The instrument's reliability and discriminant validity have been established through extensive factor analysis across diverse software systems.$^{14}$

**Participants.** Twenty-six evaluators were recruited from the Amhara Public Health Institute: 13 field epidemiologists, 7 public health workers, and 6 laboratory technicians. Participants received a brief introduction to the research topic and a general description of the prototype, then interacted with the system for 15–20 minutes before completing the SUMI questionnaire.

**Results.** SUMI scales are standardized to a population mean of 50 with a standard deviation of 10 (50/10 distribution), on a scale ranging from 10 to 73. Figure 5.2 presents the statistical summary. The prototype achieved scores above the population mean on all six scales, with a maximum score of 68.96 and a minimum score of 60.46. Figure 5.3 presents the mean scores with 95% confidence intervals (CIs), demonstrating that all scale CIs fall entirely above the 50-point population mean—indicating statistically significant above-average usability at the 95% confidence level. Figure 5.4 presents median boxplots with quartile distributions and whisker ranges.

These results indicate that domain experts—epidemiologists, public health workers, and laboratory technicians—rated the prototype favorably across all usability dimensions, supporting the practical viability of blockchain-based surveillance interfaces for the target user population.

## 7.3 Security Evaluation

Security was assessed through threat modeling and risk scenario analysis. The threat model defines the following components:

**Assets.** The primary asset is infectious disease surveillance data—high-volume, multi-source data collected and analyzed across the public health hierarchy.

**Threats.** Threats encompass scenarios in which surveillance data is exposed to unauthorized parties, altered without authorization, or prevented from reaching designated recipients.

**Attack scenarios and mitigations.** Three attack types were analyzed:

*Man-in-the-Middle (MITM) Attack.* An adversary intercepts communication between model users to modify or corrupt surveillance data in transit. The proposed model mitigates MITM attacks through decentralized identity management and cryptographic hashing of all transmitted data. Each user relationship employs multi-factor authentication combining blockchain addresses and cryptographic keys distributed across participating nodes. If a user address is compromised, any fraudulent transaction will fail hash verification against the blockchain record, and the distributed architecture eliminates single-point-of-failure exploitation.

*Denial of Service (DoS) Attack.* An adversary overwhelms the system with false requests to disrupt surveillance operations. The model mitigates DoS attacks through two mechanisms: (1) the Ethereum network's tokenized transaction costs impose economic barriers on flood attacks, as each transaction requires expenditure of limited-supply tokens, making sustained flooding economically infeasible against the total consortium computing capacity; and (2) a data volume agreement protocol detects anomalous transmission volumes and triggers address replacement and stream reset upon agreement violation.

*Traffic Analysis Attack.* An adversary on a remote node sniffs surveillance data traffic to gain unauthorized access to report contents. The model mitigates this attack through public-key encryption of all surveillance data stored in smart contracts—data encrypted with the public key $k_{rp}$ can only be decrypted with the corresponding private key $k_{rs}$, rendering intercepted traffic unintelligible to unauthorized nodes.

**Summary.** The threat model analysis demonstrates that the proposed blockchain-based architecture provides defense-in-depth against the three primary attack vectors relevant to disease surveillance systems, with mitigation mechanisms derived directly from blockchain's inherent properties of decentralization, immutability, and cryptographic security.
