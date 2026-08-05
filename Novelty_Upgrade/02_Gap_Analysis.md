# 02 Gap Analysis

## 1. Executive Summary

- **Publication readiness score:** 38/100
- **Scientific novelty score:** 24/100
- **Architectural maturity score:** 28/100
- **Engineering quality assessment:** The manuscript is organized, prototype-backed, and domain-grounded, but its central architecture still conflicts with the authoritative blueprint because it remains a monolithic Ethereum-first design built around full ledger replication, narrow privacy assumptions, and unargued PoA-centered reasoning.
- **Rewrite complexity:** High

### Overall judgment

`manuscript.tex` is **not yet publication-ready** as a high-impact journal article under the blueprint. Its strongest assets are: a clear DEWS problem framing, a recognizable hierarchical public-health workflow, a built prototype, and structured evaluation sections. Its main blocking weaknesses are architectural rather than editorial:

1. it still stores the system conceptually on Ethereum rather than using selective anchoring with encrypted off-chain storage;
2. it does not implement the blueprint's layered privacy model;
3. it does not justify consensus comparatively or define validator governance;
4. it lacks LMIC-aware resource asymmetry, edge/fog logic, Layer-2 strategy, and interoperability architecture;
5. its evaluation is tied to an obsolete Rinkeby PoA testnet and does not test the blueprint's target claims.

### Publication blockers

- Blueprint-violating statement that every node keeps a full blockchain copy and that surveillance transactions are directly recorded on Ethereum.
- No off-chain encrypted data layer, IPFS strategy, or selective on-chain artifact model.
- No zero-knowledge, revocable permissions, expiry logic, or metadata-leakage analysis.
- No comparative consensus section across PoA, DPoS, PBFT variants, Raft-based alliance designs, or adaptive consensus.
- No explicit validator appointment, collusion, failure, or trust concentration model.
- No edge/fog or batching architecture for constrained facilities.
- No FHIR-aware interoperability workflow.
- No 2024--2026 literature base to support the new novelty position.

## 2. Architecture Coverage Matrix

| Blueprint Component | Fully Implemented | Partially Implemented | Missing | Comments | Priority |
|---|---|---|---|---|---|
| Hierarchical event processing with selective anchoring |  | Yes |  | Hierarchical workflow is present, but selective anchoring is absent; reporting is still modeled as direct Ethereum transaction recording. | Critical |
| Hybrid storage |  |  | Yes | Manuscript describes ledger-wide storage and smart-contract-stored surveillance data; no encrypted off-chain payload layer. | Critical |
| Edge/fog preprocessing layer |  |  | Yes | No near-source preprocessing, buffering, or constrained-node relief architecture. | High |
| District/regional batching and validation layer |  | Yes |  | Administrative tiers exist, but not as explicit batching/settlement or workload-reduction layers. | High |
| Blockchain coordination layer limited to hashes/pointers/permissions/audit |  |  | Yes | Smart contracts currently act as primary data-bearing application objects. | Critical |
| Privacy control with grant/revoke/expire access |  | Yes |  | Hierarchical access restrictions are mentioned, but no dynamic permission lifecycle or revocation model exists. | Critical |
| Zero-knowledge verification |  |  | Yes | No ZKP/zk-SNARK/verification-without-disclosure capability. | Critical |
| Layer-2 / batch settlement |  |  | Yes | No rollup, sidechain, batching, or aggregate settlement design. | High |
| Consensus and validator governance |  | Yes |  | PoA performance is discussed, but consensus choice is not comparatively justified and validator governance is undefined. | Critical |
| FHIR-aware interoperability workflow |  |  | Yes | Interoperability is a motivation only; there is no standards-aware architecture. | High |
| Expanded threat model |  | Yes |  | Basic MITM/DoS/traffic analysis appears, but metadata leakage, overbroad tier exposure, validator collusion, and equity threats are missing. | Critical |
| LMIC resource-aware node asymmetry |  | Yes |  | Ethiopian hierarchy is explained, but weak-node role reduction, intermittent connectivity strategy, and compute asymmetry are not engineered. | High |
| Performance model beyond basic block timing |  | Yes |  | Single-metric block timing exists, but no storage, throughput, cost, bandwidth, or scalability evaluation for the target architecture. | High |
| Governance/equity framing |  |  | Yes | No fairness, participation, rural exclusion, or benefit-sharing argument. | High |

## 3. Section-by-Section Analysis

### Abstract
- **Current objective:** Summarize the current Ethereum-based DEWS architecture, prototype, and three-part evaluation.
- **Scientific strengths:** Clear problem framing; reports concrete prototype and evaluation outputs; names four surveillance functions.
- **Scientific weaknesses:** Novelty claim is too weak for a high-impact journal; overstates blockchain viability from a narrow prototype; no modern literature positioning.
- **Architectural weaknesses:** Describes an Ethereum smart-contract architecture rather than the blueprint's hybrid selective-anchoring architecture; no off-chain storage, privacy layer, ZKP, or LMIC optimization.
- **Missing arguments:** Why hybrid architecture is scientifically superior; why the architecture fits LMIC constraints; why privacy requires more than immutability.
- **Required additions:** Hybrid architecture summary; selective anchoring; privacy-preserving verification; comparative consensus rationale; LMIC resource-aware claims.
- **Required deletions:** Rinkeby/PoA-centered framing as if sufficient evidence of production suitability; generalized claim that blockchain alone is a viable paradigm.
- **Required restructuring:** Recast around research novelty and architecture, not prototype demonstration alone.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** High

### Introduction
- **Current objective:** Establish DEWS challenges and motivate blockchain as a solution.
- **Scientific strengths:** Clear hierarchy-aware public-health framing; identifies centralization, security, traceability, completeness, and interoperability issues.
- **Scientific weaknesses:** Motivation is built against AI/ML rather than against current blockchain-health architecture gaps; literature positioning is dated; contribution claims are below current novelty threshold.
- **Architectural weaknesses:** Presents blockchain's native properties as directly sufficient; no blueprint-driven move to hybrid storage or layered privacy.
- **Missing arguments:** Why full on-chain storage fails; why metadata privacy matters; why LMIC infrastructure punishes heavy peers; why consensus is a governance choice.
- **Required additions:** Explicit critique-derived problem statement covering scalability, privacy, consensus governance, and LMIC inclusion.
- **Required deletions:** Overbroad implication that decentralization/immutability alone solve surveillance architecture problems.
- **Required restructuring:** Split motivation into system problem, prior architectural shortcomings, and blueprint-driven contribution claims.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** High

### Background and Related Work
- **Current objective:** Explain blockchain basics, justify Ethereum, describe Ethiopian DEWS, and review related studies.
- **Scientific strengths:** Gives domain context; includes a concise related-work table; identifies the hierarchical Ethiopian reporting chain.
- **Scientific weaknesses:** Heavily dated literature base; platform comparison is tutorial-like and narrow; related work omits 2024--2026 hybrid/privacy-layered blockchain architectures.
- **Architectural weaknesses:** Ethereum is justified as the platform before the manuscript proves architecture fit; no comparison of monolithic Layer-1 vs hybrid architectures.
- **Missing arguments:** Hybrid storage, IPFS, rollups, sharding, ZKP privacy, edge/fog, adaptive consensus, FHIR-aware interoperability, LMIC governance.
- **Required additions:** A modern architecture-oriented literature synthesis structured around scalability, privacy, consensus, interoperability, and LMIC deployment.
- **Required deletions:** Excessive textbook blockchain explanation and the Bitcoin/XRPL comparison as the central platform rationale.
- **Required restructuring:** Reframe this section from "what is blockchain/Ethereum" to "what current high-quality architectures do and why the manuscript must change".
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** Very high

#### Blockchain Technology subsection
- **Current objective:** Define blockchain basics.
- **Scientific strengths:** Accurate baseline terminology.
- **Scientific weaknesses:** Reads like textbook exposition rather than journal-specific architectural synthesis.
- **Architectural weaknesses:** Encourages immutability-centric reasoning that the blueprint rejects as sufficient.
- **Missing arguments:** Privacy, selective disclosure, governance, workload specificity.
- **Required additions:** Only minimal retained concepts needed to support the revised architecture.
- **Required deletions:** Most generic explanatory material.
- **Required restructuring:** Compress substantially.
- **Rewrite priority:** Medium
- **Scientific risk:** Medium
- **Estimated rewrite effort:** Medium

#### Platform Selection subsection
- **Current objective:** Justify Ethereum over Bitcoin and XRPL.
- **Scientific strengths:** Shows some attempt at systematic choice.
- **Scientific weaknesses:** Comparison set is too narrow and outdated; the real blueprint question is architectural pattern, not whether Ethereum beats Bitcoin.
- **Architectural weaknesses:** Reinforces direct-Ethereum dependence; ignores permissioned/consortium alternatives and Layer-2 composition.
- **Missing arguments:** PoA vs DPoS vs PBFT vs adaptive consensus; why Ethereum should be a coordination layer rather than a data layer.
- **Required additions:** Comparative consensus and deployment-layer rationale.
- **Required deletions:** Most of the eleven-criteria platform table if it remains tutorial rather than research-critical.
- **Required restructuring:** Convert into "deployment and consensus design rationale" within the revised architecture.
- **Rewrite priority:** High
- **Scientific risk:** High
- **Estimated rewrite effort:** High

#### Disease Early Warning and Surveillance in Ethiopia subsection
- **Current objective:** Describe the national surveillance context.
- **Scientific strengths:** Gives a strong domain-specific operational context; identifies reporting tiers and disease categories.
- **Scientific weaknesses:** Underuses this context for engineering constraints and LMIC argumentation.
- **Architectural weaknesses:** Does not convert hierarchy into node-role asymmetry, bandwidth-aware design, or selective data movement.
- **Missing arguments:** Intermittent connectivity, workforce limitations, non-smartphone participation, and the need for lighter peripheral roles.
- **Required additions:** Explicit mapping from surveillance hierarchy to the blueprint's multi-tier computing architecture.
- **Required deletions:** None substantial.
- **Required restructuring:** Keep and repurpose as the grounding for LMIC architecture constraints.
- **Rewrite priority:** High
- **Scientific risk:** Medium
- **Estimated rewrite effort:** Medium

#### Related Work subsection
- **Current objective:** Compare prior blockchain and ML surveillance work.
- **Scientific strengths:** Recognizes that prior work addressed adjacent domains.
- **Scientific weaknesses:** The corpus is too old; novelty is claimed against weak comparators; no high-impact literature synthesis.
- **Architectural weaknesses:** No comparison against hybrid privacy-preserving blockchain designs; no evidence-based identification of monolithic Layer-1 weaknesses.
- **Missing arguments:** 2024--2026 evidence on IPFS, rollups, ZKPs, edge/fog, lightweight consensus, public-health governance.
- **Required additions:** A new state-of-the-art comparison matrix aligned directly to blueprint components.
- **Required deletions:** The claim that no prior work addresses the intersection is too broad and should be replaced with a narrower, evidence-backed novelty statement.
- **Required restructuring:** Divide into healthcare blockchain architectures, surveillance-specific digital architectures, and blueprint gap positioning.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** Very high

### Research Methodology
- **Current objective:** Describe SDRM and blockchain suitability assessment.
- **Scientific strengths:** Clear artifact-oriented methodology; includes stakeholder suitability assessment.
- **Scientific weaknesses:** Methodology validates the old architecture, not the blueprint target architecture; survey is small and locally bounded.
- **Architectural weaknesses:** Blockchain suitability is treated as sufficient without architecture suitability or component-level design justification.
- **Missing arguments:** Why hybrid architecture was selected; how literature-driven architectural decisions were made; how threat/performance dimensions map to design choices.
- **Required additions:** Architecture derivation logic from the blueprint, including rationale for storage, privacy, consensus, and LMIC constraints.
- **Required deletions:** Overreliance on a 10-person blockchain decision tree as architectural justification.
- **Required restructuring:** Separate problem suitability from architecture-selection methodology.
- **Rewrite priority:** High
- **Scientific risk:** High
- **Estimated rewrite effort:** High

#### Research Design subsection
- **Current objective:** Map study activities to SDRM.
- **Scientific strengths:** Gives a coherent process narrative.
- **Scientific weaknesses:** Does not show a rigorous architectural design science loop around alternative component choices.
- **Architectural weaknesses:** Assumes a four-component Ethereum model rather than a hybrid architecture.
- **Missing arguments:** Comparative design evaluation criteria.
- **Required additions:** Explicit design objectives tied to the blueprint matrix.
- **Required deletions:** None mandatory.
- **Required restructuring:** Update stage descriptions to reflect blueprint-derived redesign rather than thesis-era artifact build.
- **Rewrite priority:** Medium
- **Scientific risk:** Medium
- **Estimated rewrite effort:** Medium

#### Blockchain Suitability Assessment subsection
- **Current objective:** Justify blockchain use through an IEEE decision tree and survey.
- **Scientific strengths:** Shows stakeholder consultation.
- **Scientific weaknesses:** Not enough for publication-grade architectural justification; outdated decision framework emphasis.
- **Architectural weaknesses:** Confuses blockchain suitability with full on-chain Ethereum suitability.
- **Missing arguments:** Why blockchain plus off-chain privacy layer is appropriate; why not database-plus-signature, consortium middleware, or other alternatives.
- **Required additions:** Component-level architecture selection criteria.
- **Required deletions:** Any implication that majority survey support validates the specific architecture.
- **Required restructuring:** Demote to supplementary justification or condense sharply.
- **Rewrite priority:** Medium
- **Scientific risk:** Medium
- **Estimated rewrite effort:** Medium

#### Scope and Limitations subsection
- **Current objective:** Bound the study.
- **Scientific strengths:** Acknowledges narrow deployment and sampling.
- **Scientific weaknesses:** Omits the most serious architectural limitations highlighted by the blueprint.
- **Architectural weaknesses:** Does not admit full on-chain storage, privacy under-modeling, consensus governance absence, and obsolete deployment assumptions.
- **Missing arguments:** Architectural limitations as current blockers.
- **Required additions:** Explicit blueprint misalignment limitations.
- **Required deletions:** "platform-agnostic" claim unless redesigned architecture actually supports that statement.
- **Required restructuring:** Expand into a more honest pre-rewrite limitation frame.
- **Rewrite priority:** High
- **Scientific risk:** High
- **Estimated rewrite effort:** Medium

### Proposed Blockchain-Based Model for Disease Early Warning and Surveillance
- **Current objective:** Present the manuscript's architecture and functional workflows.
- **Scientific strengths:** Strong domain workflow decomposition; clearly names disease reporting, laboratory integration, completeness verification, and analysis.
- **Scientific weaknesses:** The architecture is still thesis-era and not state of the art; novelty is functional rather than architectural.
- **Architectural weaknesses:** Full-replication Ethereum model; smart contracts are primary data containers; no hybrid storage, selective anchoring, edge/fog, Layer-2, ZKP, or validator governance.
- **Missing arguments:** Why data should be partitioned by sensitivity and workload; why only proofs belong on-chain; how weak nodes participate; how permissions evolve over time.
- **Required additions:** Complete blueprint-conformant target architecture.
- **Required deletions:** Direct claims that all participating nodes maintain full ledger copies of surveillance records as the core design merit.
- **Required restructuring:** Rewrite from a workflow-driven Ethereum app description into a multi-tier architecture specification.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** Very high

#### Hierarchical Disease Reporting subsection
- **Current objective:** Model case-report flow across five administrative tiers.
- **Scientific strengths:** Good mapping to the Ethiopian reporting chain; bidirectional feedback logic is useful.
- **Scientific weaknesses:** Functionally useful but architecturally naive.
- **Architectural weaknesses:** Every level becomes a blockchain writer under the old model; no selective data disclosure or light-client strategy.
- **Missing arguments:** Peripheral capture vs intermediate validation roles; encrypted payload submission; district/regional batching.
- **Required additions:** Role asymmetry and selective anchoring workflow.
- **Required deletions:** Assumption that each level directly writes the primary report payload on-chain.
- **Required restructuring:** Split into capture, aggregation, coordination, and audit phases.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** High

#### Laboratory Network Integration subsection
- **Current objective:** Describe hierarchical lab reporting and bidirectional result flow.
- **Scientific strengths:** Aligns well with actual surveillance operations; preserves useful bidirectional logic.
- **Scientific weaknesses:** Lacks specimen-level privacy and off-chain exchange rationale.
- **Architectural weaknesses:** Again assumes blockchain transaction carriage of laboratory content rather than anchored references and permissions.
- **Missing arguments:** Encrypted specimen metadata exchange, selective access, reference-lab confirmation workflow.
- **Required additions:** Off-chain storage + on-chain provenance for lab results.
- **Required deletions:** Direct storage/transaction treatment of full laboratory payloads.
- **Required restructuring:** Preserve functional flow but re-engineer storage/control separation.
- **Rewrite priority:** High
- **Scientific risk:** High
- **Estimated rewrite effort:** High

#### Report Completeness Verification subsection
- **Current objective:** Automate completeness checking.
- **Scientific strengths:** Strong fit to the domain; one of the manuscript's most defensible contributions.
- **Scientific weaknesses:** The function is useful but not enough to support high novelty alone.
- **Architectural weaknesses:** Completeness logic is tied to full ledger querying rather than anchored reporting events.
- **Missing arguments:** Completeness from hashes/events/batches rather than full replicated payloads.
- **Required additions:** Event-driven completeness logic in the hybrid architecture.
- **Required deletions:** Ledger-wide storage dependence.
- **Required restructuring:** Keep concept, redesign data dependencies.
- **Rewrite priority:** Medium
- **Scientific risk:** Medium
- **Estimated rewrite effort:** Medium

#### Surveillance Data Analysis subsection
- **Current objective:** Describe temporal, spatial, and person-based analytics.
- **Scientific strengths:** Good public-health relevance; rooted in epidemiological practice.
- **Scientific weaknesses:** Analytics remain descriptive; no privacy-preserving analytics framing.
- **Architectural weaknesses:** Implies analysis over blockchain-held report data, conflicting with the blueprint.
- **Missing arguments:** Privacy-preserving analytics over off-chain encrypted data with selective verification; whether analysis should occur at edge/regional layers.
- **Required additions:** Privacy-preserving analytics rationale and compute placement.
- **Required deletions:** Implicit assumption that analytics should be smart-contract centric.
- **Required restructuring:** Separate analytic functions from ledger settlement functions.
- **Rewrite priority:** High
- **Scientific risk:** High
- **Estimated rewrite effort:** High

### Prototype Implementation
- **Current objective:** Describe the built Ethereum prototype, UI operations, and deployment.
- **Scientific strengths:** Demonstrates tangible implementation effort; useful for feasibility narrative.
- **Scientific weaknesses:** Implementation is tightly coupled to obsolete infrastructure and journal-inappropriate UI walkthrough detail.
- **Architectural weaknesses:** ReportFactory/Report smart-contract pattern encodes the old design; implementation centers on Rinkeby, MetaMask, and direct report objects on-chain.
- **Missing arguments:** How a revised prototype would instantiate hybrid storage, permissions, verification, and tiered roles.
- **Required additions:** A new implementation strategy aligned to selective anchoring and off-chain encrypted storage.
- **Required deletions:** Tutorial-like screenshots and deployment script exposition that do not advance the scientific argument.
- **Required restructuring:** Move from interface demonstration to architecture realization evidence.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** Very high

#### Development Environment subsection
- **Current objective:** List the software stack.
- **Scientific strengths:** Clear and reproducible.
- **Scientific weaknesses:** Stack description is too implementation-specific for its current prominence.
- **Architectural weaknesses:** Anchored to Rinkeby/Infura/MetaMask-era tooling with no modern hybrid data stack.
- **Missing arguments:** Off-chain storage technology, encryption service boundary, lightweight client model.
- **Required additions:** Revised stack aligned to the blueprint.
- **Required deletions:** Deprecated infrastructure emphasis.
- **Required restructuring:** Compress and align to research architecture.
- **Rewrite priority:** High
- **Scientific risk:** High
- **Estimated rewrite effort:** Medium

#### Smart Contract Architecture subsection
- **Current objective:** Explain Report and ReportFactory contracts.
- **Scientific strengths:** Internally coherent for the current prototype.
- **Scientific weaknesses:** Scientifically weak because the contract model embodies the outdated architecture.
- **Architectural weaknesses:** Report contracts function as primary data containers rather than proof/permission coordinators.
- **Missing arguments:** Hash pointers, audit events, consent, ACL lifecycle, reference integrity, and batch commitments.
- **Required additions:** Contract roles for anchoring, permissioning, auditing, and verification only.
- **Required deletions:** Full-record contract storage logic as the main design premise.
- **Required restructuring:** Fundamental redesign.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** Very high

#### Functional Operations subsection
- **Current objective:** Walk through user actions and interfaces.
- **Scientific strengths:** Shows end-to-end operational thought.
- **Scientific weaknesses:** Reads like a prototype demo script rather than a journal implementation analysis.
- **Architectural weaknesses:** All operations are transaction-heavy and direct-on-chain.
- **Missing arguments:** Which operations become off-chain, which become batched, which become anchored, and which require selective verification.
- **Required additions:** Operation mapping to the hybrid architecture.
- **Required deletions:** Excessive UI-level exposition and MetaMask transaction emphasis.
- **Required restructuring:** Reduce screenshots; emphasize architectural control points.
- **Rewrite priority:** High
- **Scientific risk:** High
- **Estimated rewrite effort:** High

#### Deployment Configuration subsection
- **Current objective:** Explain Rinkeby deployment.
- **Scientific strengths:** Documents experimental setup.
- **Scientific weaknesses:** Rinkeby is obsolete and no longer publication-strength evidence.
- **Architectural weaknesses:** Uses a PoA testnet as an implicit consensus validation proxy.
- **Missing arguments:** Why any deployment environment approximates the blueprint target architecture.
- **Required additions:** Revised deployment assumptions suitable for consortium/hybrid evaluation.
- **Required deletions:** Rinkeby-centered justification.
- **Required restructuring:** Replace with environment rationale aligned to the new architecture.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** High

### Evaluation
- **Current objective:** Evaluate performance, usability, and security.
- **Scientific strengths:** Multi-dimensional evaluation structure is good; usability study gives real stakeholder input.
- **Scientific weaknesses:** Metrics are not aligned to blueprint claims; performance and security evidence are too narrow.
- **Architectural weaknesses:** Evaluation validates the old architecture only.
- **Missing arguments:** Storage efficiency, throughput, cost, latency under batching, privacy overhead, weak-node impact, validator governance, interoperability.
- **Required additions:** Blueprint-aligned evaluation framework.
- **Required deletions:** Any claim that block time alone demonstrates architectural suitability.
- **Required restructuring:** Tie evaluation dimensions directly to architecture claims.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** Very high

#### Performance Evaluation subsection
- **Current objective:** Measure block generation time.
- **Scientific strengths:** Provides at least one empirical metric.
- **Scientific weaknesses:** Single metric, tiny experiment, and wrong target; measures network block time rather than application architecture performance.
- **Architectural weaknesses:** Evaluates monolithic Layer-1 behavior only.
- **Missing arguments:** Throughput, cost, storage growth, bandwidth, rollup/batching effect, edge/fog latency, scalability under concurrent reporting.
- **Required additions:** Multi-metric performance framework.
- **Required deletions:** Overinterpretation of 12--14 second blocks as near-real-time architectural validation.
- **Required restructuring:** Reframe or replace substantially.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** Very high

#### Usability Evaluation subsection
- **Current objective:** Report SUMI results.
- **Scientific strengths:** Stronger than the performance subsection as evidence of user-facing feasibility.
- **Scientific weaknesses:** Usability of a wallet-based UI is not enough to validate the research architecture.
- **Architectural weaknesses:** Tests interaction with the old direct-on-chain design.
- **Missing arguments:** Usability under constrained connectivity and simplified peripheral roles.
- **Required additions:** LMIC-fit usability implications if the revised design changes user interaction burden.
- **Required deletions:** None mandatory, but claims should be narrowed.
- **Required restructuring:** Retain as secondary evidence, not core novelty proof.
- **Rewrite priority:** Medium
- **Scientific risk:** Medium
- **Estimated rewrite effort:** Medium

#### Security Evaluation subsection
- **Current objective:** Present threat-model-based security analysis.
- **Scientific strengths:** At least attempts structured security discussion.
- **Scientific weaknesses:** Threat model is too narrow and relies on blockchain-native assumptions.
- **Architectural weaknesses:** Claims encryption of surveillance data stored in smart contracts; omits metadata leakage, overbroad tier access, key management complexity, validator threats, and smart-contract vulnerability classes.
- **Missing arguments:** Layered privacy, ZKP, permission revocation, off-chain confidentiality, governance threats, inclusion risks.
- **Required additions:** Blueprint-aligned multi-category threat model.
- **Required deletions:** Claims that inherent blockchain properties sufficiently mitigate the security problem.
- **Required restructuring:** Expand from three attacks to a full architecture threat model.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** High

### Discussion
- **Current objective:** Interpret evaluation results and position the work.
- **Scientific strengths:** Provides a standard discussion scaffold.
- **Scientific weaknesses:** Draws strong conclusions from weak architectural and experimental evidence.
- **Architectural weaknesses:** Defends PoA performance and blockchain-native security without blueprint-aligned caveats.
- **Missing arguments:** Why the manuscript must move beyond its first prototype; what the new novelty actually is relative to state of the art.
- **Required additions:** Honest discussion of blueprint misalignment and redesigned contribution space.
- **Required deletions:** First-to-combine claim in its current broad form.
- **Required restructuring:** Recast as critical interpretation rather than validation of the old design.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** High

### Conclusion and Future Work
- **Current objective:** Summarize contributions and list future directions.
- **Scientific strengths:** Concise recap; identifies extensibility.
- **Scientific weaknesses:** Concludes too confidently on viability; relegates major architectural repairs to future work.
- **Architectural weaknesses:** Treats the old model as established rather than superseded.
- **Missing arguments:** The real future path is the blueprint architecture, not incremental extension of the current one.
- **Required additions:** Revised concluding claims consistent with hybrid/privacy-layered architecture.
- **Required deletions:** Strong claims that the current architecture already solves interoperability and security at publication level.
- **Required restructuring:** Replace future-work list with blueprint-driven redesign agenda.
- **Rewrite priority:** Critical
- **Scientific risk:** Very high
- **Estimated rewrite effort:** High

### Back Matter
- **Current objective:** Provide author, acknowledgment, disclosure, availability, and ethics statements.
- **Scientific strengths:** Structurally complete.
- **Scientific weaknesses:** Data/code availability may become inaccurate once the architecture changes; corresponding email is placeholder-like.
- **Architectural weaknesses:** None major, but the data availability statement is tied to prototype code rather than architectural assets.
- **Missing arguments:** None essential to blueprint fit.
- **Required additions:** Update only if manuscript evidence base changes.
- **Required deletions:** None mandatory.
- **Required restructuring:** Minimal.
- **Rewrite priority:** Low
- **Scientific risk:** Low
- **Estimated rewrite effort:** Low

## 4. Missing Scientific Arguments

### Edge Computing
Missing entirely. The manuscript does not explain near-source preprocessing, local buffering, or edge-assisted reduction of bandwidth and latency for peripheral reporting sites.

### Fog Computing
Missing entirely. No intermediate coordination compute layer exists between peripheral health facilities and blockchain settlement.

### Hybrid Storage
Missing entirely. The manuscript still treats blockchain as the primary storage substrate rather than a coordination/audit layer.

### IPFS
Missing entirely. No content-addressed off-chain storage mechanism is proposed or justified.

### Zero-Knowledge Proofs
Missing entirely. The manuscript offers no verification-without-disclosure mechanism and therefore cannot support the blueprint's selective-disclosure requirement.

### Lightweight Consensus
Partially present but underdeveloped. PoA is observed in a testnet context, but there is no comparative consensus justification for healthcare/LMIC workloads.

### Privacy-preserving analytics
Missing entirely. Analytics are described functionally, but not under privacy constraints or selective-verification requirements.

### LMIC optimisation
Partially present only as geography/context. The manuscript names Ethiopia and hierarchy but does not engineer for poor connectivity, weak devices, limited staff capacity, or asymmetric node roles.

### Threat model
Partially present but inadequate. It covers MITM, DoS, and traffic analysis only, while omitting metadata leakage, validator collusion, overbroad tier access, smart-contract risks, access revocation, and governance threats.

### Scalability
Missing as a serious architectural argument. The manuscript neither models storage growth nor addresses multi-region reporting load, batching, sharding, or concurrent throughput.

### Performance
Partially present but weak. One block-generation metric is reported; there is no multi-metric evaluation tied to storage, cost, throughput, bandwidth, or latency across tiers.

## 5. Outdated Content

### Material relying on fully on-chain storage
- Proposed model statement that each participating node maintains a complete blockchain ledger copy.
- Smart contract architecture centered on Report/ReportFactory as record-bearing contracts.
- Security section claim that surveillance data are stored in smart contracts with public-key encryption.
- Repeated implication that immutable record placement on Ethereum is itself a sufficient design objective.

### Ethereum implementation tutorial material
- Platform-selection comparison against Bitcoin and XRPL as a largely pedagogical exercise.
- Web3.js application-layer figure.
- Deployment configuration through Infura and Rinkeby.
- MetaMask transaction confirmation narrative.
- Deployment script and UI walkthrough screenshots.

### Obsolete blockchain assumptions
- Rinkeby PoA performance treated as strong current evidence.
- Full-node replication implicitly treated as acceptable for health surveillance scale.
- Blockchain-native immutability/decentralization treated as adequate security design.
- Direct transaction cost as the main DoS defense argument.

### Excessive textbook explanation
- Generic blockchain definition and taxonomy subsection.
- Introductory explanation of smart contracts and EVM-style behavior where not tied to novelty.
- Basic epidemiology descriptions could be reduced if they do not support architectural claims.

### Weak research motivation
- Motivation frames blockchain mainly as an alternative to AI/ML instead of addressing modern blockchain-health architecture gaps.
- Insufficient articulation of why high-impact readers should care about hybrid surveillance architecture in LMIC settings now.

### Weak novelty statements
- "First to combine" claim is too broad and weakly evidenced.
- Novelty is framed as digitizing four workflows on blockchain rather than as introducing a more advanced research architecture.

## 6. Figure Impact

| Figure | Action | Reason | Scientific impact |
|---|---|---|---|
| Fig. `fig:sdrm` | Keep (modify) | Methodology figure is valid but should be tightened to support the redesign process rather than generic SDRM explanation. | Moderate |
| Fig. `fig:frameworks` | Keep (modify) | Can support architecture-selection rationale if repositioned; otherwise too methodological. | Low to moderate |
| Fig. `fig:architecture` | Replace | Current architecture is blueprint-incompatible because it implies direct Ethereum-centric reporting/storage. | Critical |
| Fig. `fig:smartcontract` | Replace | Must become a coordination/permission/anchoring architecture, not a raw smart-contract mechanism figure. | Critical |
| Fig. `fig:web3` | Delete or replace | Web3.js communication is implementation detail, not journal-level architectural evidence. | Low |
| Fig. `fig:reporting` | Keep (modify) | Workflow is valuable but must show capture, batching, selective anchoring, and role asymmetry. | High |
| Fig. `fig:laboratory` | Keep (modify) | Lab hierarchy is useful, but storage/control/privacy layers must be redesigned. | High |
| Fig. `fig:completeness` | Keep (modify) | The function is scientifically useful; needs event-driven anchored logic rather than full-ledger dependence. | Moderate |
| Fig. `fig:temporal` | Keep (modify) | Analytical dimension remains relevant if reframed for off-chain analytics and selective verification. | Moderate |
| Fig. `fig:spatial` | Keep (modify) | Same as above. | Moderate |
| Fig. `fig:person` | Keep (modify) | Same as above. | Moderate |
| Fig. `fig:incidence` | Keep (modify) | Useful if tied to verified/off-chain analytics pipeline. | Low to moderate |
| Fig. `fig:prevalence` | Keep (modify) | Useful if tied to verified/off-chain analytics pipeline. | Low to moderate |
| Fig. `fig:contracts` | Replace | Current Report/ReportFactory view encodes the obsolete architecture. | Critical |
| Fig. `fig:deploy1` | Delete | Deployment configuration screenshot is not a strong scientific figure. | Low |
| Fig. `fig:deploy2` | Delete | Script execution screenshot is not a strong scientific figure. | Low |
| Fig. `fig:create1` | Delete | UI screenshot does not advance the research contribution enough for a high-impact article. | Low |
| Fig. `fig:create2` | Delete | MetaMask screenshot is tutorial-level. | Low |
| Fig. `fig:create3` | Delete | Deployment confirmation screenshot is tutorial-level. | Low |
| Fig. `fig:list` | Delete or move to supplement | Low architectural value. | Low |
| Fig. `fig:detail` | Delete or move to supplement | Low architectural value. | Low |
| Fig. `fig:review` | Delete or move to supplement | Low architectural value. | Low |
| Fig. `fig:feedback` | Delete or move to supplement | Low architectural value. | Low |
| Fig. `fig:analysis` | Delete or move to supplement | Dashboard screenshot is secondary and should not dominate the paper. | Low |
| Fig. `fig:lab` | Delete or move to supplement | Interface screenshot is secondary. | Low |
| Fig. `fig:performance` | Keep (modify) | If performance remains, the figure must reflect blueprint-relevant metrics, not only block timing. | Moderate |
| Fig. `fig:sumi_summary` | Keep | Usability evidence is still acceptable as supporting feasibility evidence. | Moderate |
| Fig. `fig:sumi_ci` | Keep | Stronger than many other visuals because it conveys statistical usability evidence. | Moderate |
| Fig. `fig:sumi_box` | Keep | Retain if usability remains in scope. | Moderate |

## 7. Table Impact

| Table | Action | Reason | Scientific impact |
|---|---|---|---|
| Tab. `tab:platform` | Replace | The current platform table is too narrow and supports the wrong decision problem. Replace with a consensus/deployment/storage design rationale matrix. | High |
| Tab. `tab:related` | Replace | Needs a 2024--2026 architecture gap matrix aligned to blueprint components. | Critical |
| Tab. `tab:survey` | Keep (modify) | Can remain as a limited stakeholder suitability artifact, but should not be the main architecture justification. | Low to moderate |
| Tab. `tab:performance` | Replace | A block-time sample table is insufficient; new tables should include storage, latency, throughput, cost, or architecture-comparison metrics. | High |

## 8. Citation Impact

### Citations that remain valid as foundational support
- `nunamaker1990systems` -- still usable as a historical methodology citation.
- `bevan1995measuring` -- still usable for SUMI background.
- `cdc2012principles` -- still usable for epidemiological definitions.
- `yaga2018blockchain` -- may remain only as a basic taxonomy citation if sharply minimized.

### Citations that require strengthening rather than removal
- `omar2019privacy`
- `griggs2018healthcare`
- `quaini2018model`
- `zhang2018fhirchain`
- `bollig2020machine`
- `harvey2021predicting`
- `rubiosolis2019zika`
- `kelly2019key`
- `finlayson2019adversarial`

These may remain as historical comparators, but they are insufficient for the manuscript's central novelty and architecture claims without a substantial 2024--2026 update.

### Citations or evidence bases that require replacement / major updating
- `peck2017blockchain` as the main blockchain-suitability authority.
- All platform-selection logic anchored to Bitcoin/XRPL/Ethereum-era generic feature comparisons.
- All claims about blockchain suitability, privacy adequacy, and performance that lack recent healthcare blockchain evidence.
- Any inference that Rinkeby-era PoA behavior still represents a publishable current benchmark.

### Newer references are required for the following topics
- off-chain storage with IPFS in healthcare/blockchain systems
- Layer-2 rollups and batch settlement
- sharding / hierarchical scalability
- edge and fog computing for healthcare/LMIC or IoT health systems
- zero-knowledge proofs / zk-SNARK privacy layers in healthcare blockchain
- lightweight / adaptive / PBFT / DPoS / Raft-like consensus for constrained consortiums
- FHIR-aware interoperability and privacy workflows
- governance, fairness, digital exclusion, and benefit sharing in LMIC digital health surveillance

## 9. Thesis Recovery Opportunities

Use the thesis only as a source of scientific material worth recovering, not as writing style or structure.

1. **Event-based surveillance detail**
   - The thesis explicitly notes that event-based surveillance complements indicator-based surveillance and identifies non-routine sources such as media, health workers, and community members.
   - Recovery value: helps the revised manuscript justify why peripheral/community capture and weak-node participation matter architecturally.
   - Thesis support: event-based surveillance material around lines 985--1005.

2. **Laboratory workflow detail**
   - The thesis provides more explicit discussion of laboratory-network communication, regional vs national confirmation roles, and specimen information exchange.
   - Recovery value: can enrich the revised laboratory subsystem and its provenance/permission requirements.
   - Thesis support: laboratory-network material around lines 940--958.

3. **Completeness definition and operational formula**
   - The thesis states clearly that completeness is computed weekly by woredas and higher levels and gives an explicit operational definition and example.
   - Recovery value: strengthens the manuscript's most credible domain-specific function once translated into event-driven architecture terms.
   - Thesis support: lines 1017--1029.

4. **Richer DEWS domain context**
   - The thesis appears to contain fuller lists of reportable diseases/conditions and reporting process detail than the manuscript now carries.
   - Recovery value: can strengthen public-health grounding selectively, especially if used to justify immediacy classes, data sensitivity, or reporting burden.

5. **Original surveillance feedback/process rationale**
   - The thesis contains more explicit descriptions of upward reporting and downward feedback across tiers.
   - Recovery value: useful for redesigning supervisory audit/provenance and permission flows without restoring thesis prose.

6. **Analysis workflow detail**
   - The thesis contains operational epidemiological analysis logic that may help distinguish which computations belong off-chain and which events should be anchored.
   - Recovery value: useful if the revised manuscript adds privacy-preserving analytics and workload partitioning.

## 10. Rewrite Roadmap

| Section | Priority | Difficulty | Dependencies | Scientific importance | Expected novelty gain | Estimated reduction |
|---|---|---|---|---|---|---|
| Proposed Architecture | 1 | Very high | Blueprint, updated literature synthesis, threat/performance model | Central | Very high | Moderate reduction of obsolete Ethereum-centric text |
| Related Work / Background | 2 | Very high | Blueprint, modern literature set | Central | Very high | High reduction of textbook/platform-comparison material |
| Introduction | 3 | High | Related-work reframing, architecture thesis | Very high | High | Moderate |
| Methodology | 4 | High | Revised architecture choices | High | Moderate | Moderate |
| Prototype Implementation | 5 | Very high | Revised architecture specification | High | High | High reduction of screenshots/tutorial detail |
| Evaluation | 6 | Very high | Revised implementation assumptions and metric framework | Very high | High | Moderate |
| Discussion | 7 | High | Revised evaluation and positioning | High | High | Low |
| Conclusion | 8 | High | Revised contribution set | High | Moderate | Low |
| Abstract | 9 | High | Final stabilized manuscript narrative | Very high | Moderate | Low |
| Back Matter | 10 | Low | Final evidence availability and authorship details | Low | Low | Minimal |

### Recommended sequence
1. Replace the architecture first.
2. Rewrite the literature and novelty framing around that architecture.
3. Then update introduction and methodology so they justify the new design.
4. Only after that should implementation/evaluation sections be revised, because their current evidence targets the wrong system.
5. Finish with discussion, conclusion, abstract, and back matter.

### Key dependency logic
- The manuscript cannot be credibly rewritten section-by-section while the architecture remains monolithic Ethereum-first.
- Performance, security, and novelty arguments depend on the architecture being redefined first.
- Figure and table redesign should follow the architecture rewrite, not precede it.
