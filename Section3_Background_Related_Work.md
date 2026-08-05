# 3. Background and Related Work

## 3.1 Blockchain Technology

A blockchain is a decentralized, distributed ledger that records transactions in cryptographically linked blocks, each containing a hash of the previous block, a timestamp, and transaction data. This chaining mechanism renders the ledger tamper-evident: altering any historical record necessitates recomputation of all subsequent block hashes and consensus agreement from a majority of network nodes. The properties most relevant to health information systems are immutability (committed records cannot be retroactively modified), decentralization (no single point of failure or control), consensus-driven validation (Byzantine fault tolerance without trusted intermediaries), and transaction traceability (complete audit trails across distributed participants).

Blockchain platforms are categorized along two dimensions: access control (public vs. private) and participation governance (permissioned vs. permissionless). Public permissionless blockchains (e.g., Ethereum) permit unrestricted participation and are suited to applications requiring transparency and open verifiability, whereas private permissioned variants restrict network membership to authorized entities. For a comprehensive taxonomy, the reader is referred to Yaga et al.$^{4}$

## 3.2 Platform Selection

The Ethereum platform was selected for this work based on a structured comparison against Bitcoin and XRPL (Ripple) across eleven criteria (Table 1). Ethereum uniquely satisfies the requirements of the proposed model: native support for smart contracts and decentralized applications (dApps), a Turing-complete programming language (Solidity) enabling arbitrary business logic implementation, cross-industry applicability, digital identity management, distributed cloud computing capabilities, and a 14-second block time suitable for near-real-time surveillance reporting. Bitcoin lacks smart contract and dApp support, while XRPL does not support smart contracts, dApps, human-readable addresses, or data oracles—all of which are required by the hierarchical surveillance workflow.

## 3.3 Disease Early Warning and Surveillance in Ethiopia

Ethiopia's disease early warning and surveillance (DEWS) system operates through a hierarchical reporting structure encompassing community health posts, woreda health offices, zone health offices, regional health offices, and the national Ethiopian Public Health Institute (EPHI)/Public Health Emergency Management (PHEM) center. The system conducts both indicator-based surveillance (structured data from scheduled reporting) and event-based surveillance (rapid capture of informal signals indicating potential public health risks).

Twenty priority diseases and conditions are designated for national surveillance, classified into 13 immediately reportable conditions (requiring notification within 30 minutes of identification) and 7 weekly reportable conditions. All levels calculate report completeness on a weekly basis—defined as the proportion of reporting units that submitted data on time within a catchment area. Laboratory-based surveillance operates through a tiered network (woreda, zone, regional, national) responsible for pathogen identification and specimen confirmation.

The current system relies on paper-based reporting with hierarchical compilation at each level. Data flows upward from health posts through woreda and zone to regional and national levels, while feedback and information sharing flow downward. This architecture suffers from the five deficiencies identified in Section 2: centralization, security vulnerabilities, traceability gaps, manual completeness verification, and interoperability barriers between organizational levels.

## 3.4 Related Work

Several studies have applied blockchain technology to healthcare data management. Omar et al.$^{5}$ proposed a patient-centric blockchain system utilizing decentralization to mitigate cloud data security risks and cryptographic functions to ensure data immutability; however, the system lacks interoperability between actors (patients, physicians, hospitals). Griggs et al.$^{6}$ developed blockchain-based smart contracts for securing medical IoT sensor data with HIPAA-compliant automated notifications, though their system exhibits transaction delays that limit real-time effectiveness. Quaini et al.$^{7}$ presented UniRec, a blockchain-based distributed electronic health record architecture evaluated through test scenarios, which suffers from prohibitive disk space requirements at scale. Zhang et al.$^{8}$ proposed FHIRChain, a blockchain architecture meeting ONC interoperability requirements for collaborative cancer care, but reported semantic interoperability challenges and legacy system compatibility limitations.

In the domain of disease surveillance specifically, machine learning approaches have been explored. Bollig et al.$^{9}$ applied deep learning (LSTM networks) to syndromic surveillance using veterinary necropsy reports, demonstrating temporal and spatial disease pattern detection over 33,000 reports across 14 years. Harvey et al.$^{10}$ developed a Gaussian Process and Random Forest-based malaria early warning system for Burkina Faso, predicting 13-week case rates from routine health facility data. Rubio-Solis et al.$^{11}$ proposed neural network-based predictive surveillance for dengue at district level in Brazil. While these ML-based approaches demonstrate predictive utility, they inherit the fundamental limitations identified in Section 2: data centralization requirements, adversarial vulnerability, and limited generalizability.

Table 2 summarizes the comparative analysis.

| Study | Domain | Technology | Key Limitation |
|-------|--------|-----------|----------------|
| Omar et al.$^{5}$ | Patient data management | Blockchain | No interoperability between actors |
| Griggs et al.$^{6}$ | Medical IoT security | Blockchain + Smart contracts | Transaction delay |
| Quaini et al.$^{7}$ | Electronic health records | Blockchain | Disk space scalability |
| Zhang et al.$^{8}$ | Clinical data sharing | Blockchain (FHIRChain) | Semantic interoperability; legacy compatibility |
| Bollig et al.$^{9}$ | Syndromic surveillance | Deep learning (LSTM) | Data availability; centralization |
| Harvey et al.$^{10}$ | Malaria early warning | Gaussian Process + Random Forest | Limited statistical rigor |
| Rubio-Solis et al.$^{11}$ | Dengue prediction | Neural network + ELM | Domain-specific; centralized |

**Research gap.** No prior work addresses the specific intersection of blockchain technology and infectious disease early warning and surveillance. Existing blockchain-in-healthcare studies focus on patient records, medical IoT, or clinical data sharing—none targets the hierarchical multi-tier reporting workflow characteristic of national DEWS systems. Conversely, surveillance-focused studies employ centralized ML approaches that cannot provide the immutability, decentralization, and traceability guarantees required for trustworthy public health reporting. The present work addresses this gap by proposing and evaluating a blockchain-based model purpose-built for the DEWS domain.
