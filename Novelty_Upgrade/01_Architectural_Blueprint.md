# 01 Architectural Blueprint

## 1. Research Vision

Design a substantially more novel public-health surveillance architecture for low- and middle-income countries (LMICs) by replacing the thesis's monolithic "all surveillance data on Ethereum" model with a hybrid, privacy-layered, hierarchical event-processing architecture based on selective anchoring.

The governing architectural shift is:

- from full on-chain storage
- to off-chain encrypted surveillance data with on-chain hashes, permissions, alerts, provenance, and audit events
- from a single heavy blockchain role for all participants
- to tiered roles across community, facility, district/regional, and national levels
- from a narrow immutability-centered security view
- to selective disclosure, revocation, privacy-preserving verification, and governance-aware control
- from unargued Proof of Authority (PoA)
- to evidence-based consensus selection for workload, trust, and infrastructure constraints

## 2. Core Scientific Novelty

The architecture must claim novelty through the integrated combination of the following critique-supported elements:

1. **Hierarchical event processing with selective anchoring**
   - Local facilities and community workers submit encrypted case data to off-chain storage.
   - District or regional layers batch and validate submissions.
   - Ethereum smart contracts retain only hashes, permissions, alerts, and audit trails.

2. **Hybrid storage instead of full ledger replication of surveillance payloads**
   - Bulk surveillance records reside off-chain.
   - Blockchain stores proofs and control artifacts rather than raw records.

3. **Layered privacy architecture instead of immutability-only protection**
   - Selective disclosure through zero-knowledge mechanisms.
   - Dynamic access grant, revocation, and expiry.
   - Encrypted off-chain files to reduce direct ledger disclosure.

4. **Resource-aware distributed processing for LMIC settings**
   - Edge or fog assistance for preprocessing, validation, or bandwidth reduction.
   - Lighter node roles for weak devices and poorly connected sites.

5. **Workload-specific consensus design**
   - Consensus must be justified comparatively, not assumed.
   - PoA, DPoS, PBFT variants, Raft-based alliance models, or hybrid/adaptive consensus must be evaluated against network hierarchy, trust concentration, latency, and node capacity.

6. **Governance-aware privacy and consensus framing**
   - Architecture must treat privacy and consensus as equity and governance choices, not only engineering parameters.

## 3. Target System Architecture

### 3.1 Architectural Style

A multi-tier permissioned surveillance architecture with Ethereum-based smart-contract coordination and off-chain encrypted data storage.

### 3.2 Required High-Level Topology

- **Tier 1: Community / Peripheral Capture Layer**
  - Community health workers and local facilities originate surveillance events.
  - These nodes should not operate as heavy full blockchain peers.

- **Tier 2: Edge / Fog Processing Layer**
  - Performs near-source preprocessing, validation assistance, filtering, or packaging.
  - Reduces bandwidth and latency for low-capacity sites.

- **Tier 3: District / Regional Coordination Layer**
  - Batches transactions.
  - Performs validation and supervisory coordination.
  - Acts as an intermediate trust and aggregation layer aligned with public-health hierarchy.

- **Tier 4: Blockchain Coordination Layer**
  - Smart contracts manage consent, permissions, provenance, hashes, alerts, and audit trails.
  - Only selective anchors and control-state artifacts are committed on-chain.

- **Tier 5: Off-Chain Data Layer**
  - Encrypted surveillance payloads and files are stored off-chain.
  - IPFS is the explicitly supported pattern in the critique.

### 3.3 Core Data Flow

1. A reporting actor creates a surveillance event.
2. The payload is encrypted before durable storage.
3. The encrypted payload is stored off-chain.
4. A hash, pointer, permission state, and relevant audit metadata are prepared for blockchain anchoring.
5. Edge/fog or district/regional layers preprocess, batch, and validate submissions.
6. Smart contracts commit only selective on-chain artifacts.
7. Authorized parties verify provenance, integrity, and access status through on-chain proofs and permission logic.
8. Alerts and audit events are preserved on-chain for traceability.

### 3.4 Scalability Extensions Required for the Revised Architecture

The blueprint must allow one or more of the following scalability extensions because the critique identifies them as current state of the art:

- IPFS-backed off-chain storage
- Layer-2 rollups for batching and lower transaction cost
- sharding and hierarchical transaction/state partitioning
- edge/fog-assisted processing

**Inference:** The final rewritten architecture may present these as composable design modules, provided the manuscript does not claim implementation of every module unless explicitly evidenced later.

## 4. Component Specifications

### 4.1 Data Capture Component

**Purpose:** Capture surveillance reports at community or facility level.

**Required properties:**
- Support for low-capacity actors and intermittent connectivity.
- No assumption that local reporters run heavy validator infrastructure.
- Must produce encryptable, off-chain-storable event payloads.

### 4.2 Edge/Fog Preprocessing Component

**Purpose:** Reduce bandwidth, latency, and processing burden near data origin.

**Required functions:**
- preliminary validation or formatting
- transaction preparation
- local buffering or batching support
- assistance to constrained nodes

### 4.3 Off-Chain Storage Component

**Purpose:** Hold bulk surveillance data outside the blockchain.

**Required properties:**
- encrypted storage of surveillance payloads
- retrievable pointer or content-address linkage
- compatibility with blockchain hash anchoring

**Supported pattern from critique:** IPFS plus encrypted off-chain files.

### 4.4 Blockchain Smart-Contract Layer

**Purpose:** Provide coordination, provenance, enforcement, and auditability.

**On-chain data limited to:**
- hashes
- pointers or references
- permissions/access-control state
- consent/provenance records
- alerts
- audit events

**Must not store:** raw surveillance payloads as the default architecture.

### 4.5 Privacy Control Component

**Purpose:** Enforce selective disclosure and dynamic access.

**Required functions:**
- smart-contract access control lists or dynamic permissions
- grant, revoke, and expire access rights
- minimize overbroad access across system tiers

### 4.6 Zero-Knowledge Verification Component

**Purpose:** Verify health-related transactions or claims without revealing underlying sensitive records.

**Required properties:**
- support selective verification
- reduce data disclosure during validation
- permit offloaded verification paths for constrained institutions where appropriate

### 4.7 Batch Settlement / Layer-2 Component

**Purpose:** Raise throughput and reduce cost by aggregating submissions before settlement.

**Required functions:**
- batch transactions off-chain
- submit aggregate proofs or commitments on-chain
- reduce main-chain transaction frequency

### 4.8 Consensus and Validator Governance Component

**Purpose:** Define who validates, under what trust model, and with what resilience assumptions.

**Required specification points:**
- validator appointment model across administrative levels
- failure and collusion assumptions
- trust concentration analysis
- rationale for chosen consensus under workload and infrastructure constraints

### 4.9 Interoperability / Standards Component

**Purpose:** Improve integration and compliance posture.

**Required property:**
- FHIR-aware privacy workflows

**Inference:** The critique supports FHIR-aware workflows as an interoperability/privacy mechanism, but does not specify a full end-to-end interoperability stack.

### 4.10 Audit and Traceability Component

**Purpose:** Preserve tamper-evident oversight without exposing full records.

**Required outputs:**
- audit trails
- provenance records
- supervisory trace events
- integrity-verifiable report lineage

## 5. Required Technology Changes

The following technology changes are mandatory relative to the criticized thesis architecture:

1. Replace full on-chain surveillance record storage with encrypted off-chain storage plus on-chain hashes/pointers.
2. Replace immutability-only privacy framing with a layered privacy architecture.
3. Add zero-knowledge verification capability for privacy-preserving validation.
4. Add dynamic smart-contract-based access control with revocation and expiry.
5. Reframe Ethereum from bulk data repository to coordination and proof layer.
6. Introduce hierarchical batching/validation at district or regional levels.
7. Add edge or fog support so rural facilities avoid heavy peer responsibilities.
8. Evaluate Layer-2 rollups for cost and throughput improvement.
9. Evaluate sharding/hierarchical partitioning for multi-tier surveillance scale.
10. Replace unsupported PoA assumption with comparative consensus justification and governance design.
11. Introduce interoperability-conscious, FHIR-aware privacy workflows.
12. Incorporate explicit governance, fairness, participation, and benefit-sharing considerations for LMIC deployment contexts.

## 6. Threat Model Improvements

The revised architecture must expand the threat model beyond tampering.

### 6.1 Threats Explicitly Raised by the Critique

- ledger-level metadata exposure
- overexposure of case-level data
- overbroad access across health-system tiers
- absence of selective disclosure
- inability to revoke or expire permissions
- direct on-chain exposure risk
- validator collusion
- validator failure
- trust concentration in authority-based consensus
- smart-contract vulnerabilities
- poor governance around authority assignment
- exclusion of rural or digitally marginal populations through high-resource assumptions

### 6.2 Required Threat-Response Mapping

- **Metadata exposure** → store sensitive payloads off-chain; keep only selective on-chain proofs and events.
- **Case-level overdisclosure** → use encrypted off-chain records and selective disclosure.
- **Unauthorized persistence of access** → implement dynamic grant/revoke/expire permissions.
- **Validation without confidentiality** → add zero-knowledge proof mechanisms.
- **Validator collusion/failure** → define governance, fault assumptions, and consensus rationale.
- **Heavy-node exclusion risk** → assign lighter roles to weak nodes and use edge/fog support.
- **Integration/compliance weakness** → use FHIR-aware privacy workflows.

**Inference:** Future manuscript rewrites should distinguish clearly between confidentiality threats, metadata/privacy threats, governance threats, and inclusion/equity threats, because the critique treats all four as architecturally relevant.

## 7. Performance Improvements

The revised architecture must be engineered to improve the following performance dimensions identified in the critique:

### 7.1 Storage Efficiency

- eliminate replicated storage of full surveillance payloads at every node
- reduce blockchain storage growth

### 7.2 Throughput

- support batching through district/regional aggregation and/or Layer-2 rollups
- avoid frequent direct Layer-1 recording of every surveillance payload

### 7.3 Latency

- reduce end-to-end delay through edge/fog preprocessing
- lower consensus or settlement delay through lightweight/adaptive consensus choices where justified

### 7.4 Cost Efficiency

- lower gas and transaction cost by selective anchoring and batch settlement

### 7.5 Compute Efficiency for Constrained Sites

- offload expensive verification or coordination tasks from weak facilities
- avoid requiring community or rural actors to behave as heavy validators

### 7.6 Performance Claims That the Rewrite Must Be Able to Motivate

The rewrite should motivate performance improvement using critique-supported directions such as:
- lower storage duplication
- lower bandwidth use
- lower blockchain load
- improved throughput
- improved latency
- improved energy efficiency where consensus alternatives justify it

## 8. LMIC Design Constraints

The architecture must explicitly fit the critique's LMIC deployment realities.

### 8.1 Environmental Constraints

- poor connectivity
- underpowered devices
- limited staff capacity
- workforce gaps
- infrastructural constraints
- uneven digital access

### 8.2 Design Obligations

- do not assume smartphone-centric participation models
- do not assume all facilities can run strong blockchain infrastructure
- minimize bandwidth and compute demand at peripheral sites
- preserve fairness and local participation
- incorporate benefit-sharing and equity-aware governance thinking

### 8.3 Role Allocation Rules

- peripheral actors perform reporting, not heavy consensus duties
- stronger intermediate tiers handle batching and validation coordination
- blockchain participation intensity should increase with institutional capacity

**Inference:** A rewrite may describe this as asymmetric node responsibility across administrative tiers, provided it remains faithful to the critique's hierarchy-centered logic.

## 9. Traceability Matrix

| Critique Recommendation / Limitation | Architectural Requirement in Blueprint |
|---|---|
| Full on-chain storage does not scale | Store surveillance payloads off-chain; anchor hashes/pointers/proofs on-chain |
| Copy of records at every node is inefficient | Prevent bulk data replication across all blockchain nodes |
| Privacy treated mainly as immutability | Add layered privacy architecture beyond tamper resistance |
| No selective disclosure | Add ZKP / zk-SNARK-enabled selective verification |
| No fine-grained revocation | Add dynamic ACL/permission grant, revoke, expire functions |
| On-chain exposure risk | Keep encrypted files off-chain and minimize on-chain disclosure |
| Weak governance and interoperability | Add FHIR-aware privacy workflows and explicit governance specification |
| PoA chosen without comparative rationale | Compare PoA against DPoS, PBFT variants, Raft-based or hybrid/adaptive approaches |
| No validator governance model | Specify validator appointment, trust boundaries, collusion/failure handling |
| Layer-1 monolithic design is outdated | Shift to hybrid architecture using off-chain storage and selective anchoring |
| LMIC facilities should not be heavy peers | Use edge/fog support and lighter peripheral node roles |
| District-to-national hierarchy is underused | Introduce district/regional batching and validation layers |
| Cost/throughput limits of direct Ethereum use | Evaluate Layer-2 rollups and hierarchical partitioning |
| Equity/governance concerns in low-resource settings | Treat privacy and consensus as governance and inclusion choices |

## 10. Mandatory Rewrite Rules

Any future manuscript rewrite governed by this blueprint must obey all of the following:

1. Do not present Ethereum as the default storage location for all surveillance data.
2. Describe blockchain primarily as a coordination, enforcement, provenance, and audit layer.
3. Keep bulk surveillance payloads in encrypted off-chain storage.
4. Include selective anchoring as a core architectural principle.
5. Include a layered privacy model, not only immutability and tamper resistance.
6. Include selective disclosure and revocable access control in the architecture narrative.
7. Provide an explicit consensus-selection rationale tied to healthcare workload and LMIC constraints.
8. Provide validator governance assumptions, including appointment and collusion/failure considerations.
9. Reflect hierarchical public-health administration in the system architecture.
10. Include resource-aware role separation so weak nodes are not treated as full heavy peers.
11. Frame privacy, consensus, and governance as linked architectural concerns.
12. Preserve interoperability direction through FHIR-aware privacy workflow discussion.
13. Ensure every novelty claim maps back to a critique-supported recommendation.
14. Mark any non-explicit architectural extension as `Inference:` rather than stating it as a direct critique finding.
15. Avoid manuscript-style rewritten prose; keep the blueprint at engineering-specification level.

## 11. Forbidden Rewrite Actions

Future prompts and rewrites must never do the following:

1. Reproduce or defend the original full on-chain storage model.
2. Store raw surveillance records on Ethereum as the main architectural design.
3. Treat immutability alone as a sufficient privacy architecture.
4. Present PoA as inherently appropriate without comparative justification.
5. Omit validator governance, collusion, or failure assumptions.
6. Ignore ledger metadata leakage and tier-based overexposure risks.
7. Assume all facilities or community actors can run full-capacity blockchain roles.
8. Remove the district/regional aggregation logic implied by the critique's hierarchical design direction.
9. Omit off-chain encryption when describing hybrid storage.
10. Describe privacy purely as access logging or tamper evidence.
11. Introduce unsupported novelty claims that are not grounded in the critique.
12. Convert this blueprint into manuscript text before the actual rewrite stage.
13. Open or rewrite manuscript files as part of the blueprinting task.

## Source Constraint Note

The requested input filename `./I_am_rewriting_the_uploaded_thesis_into_a_research-1.tex` was not present in the repository clone.

**Inference:** This blueprint was derived from `/home/runner/work/myThesis/myThesis/I_am_rewriting_the_uploaded_thesis_into_a_research-1.txt`, which has the same base name and contains the critique content used as the authoritative source.
