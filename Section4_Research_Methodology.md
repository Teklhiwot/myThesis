# 4. Research Methodology

## 4.1 Research Design

This study adopts the Systems Development Research Methodology (SDRM) proposed by Nunamaker et al.$^{12}$ SDRM provides a structured, iterative framework for constructing and evaluating information systems artifacts through five stages: (1) concept design, (2) system architecture development, (3) system analysis and design, (4) prototype development, and (5) observation and evaluation. This methodology is appropriate for the present work because the research objective—designing a blockchain-based model and demonstrating its feasibility through a functional prototype—aligns with SDRM's theory-testing orientation and proof-by-demonstration approach. Figure 1 illustrates the SDRM process.

The five stages were instantiated as follows. In the concept design stage, a structured literature review identified the limitations of existing DEWS systems and established blockchain technology as a candidate solution. The architecture development stage produced the four-component blockchain-based model (Section 5). The analysis and design stage specified smart contract structures, access control logic, and interaction flows. The prototype development stage implemented the model on the Ethereum platform. The observation and evaluation stage subjected the prototype to performance, usability, and security assessment.

## 4.2 Blockchain Suitability Assessment

Prior to model development, a formal assessment determined whether blockchain technology constitutes an appropriate solution for the DEWS domain. From eight published blockchain decision frameworks (Figure 2), the IEEE Spectrum blockchain decision tree$^{13}$ was selected for its standardization, parsimony, and accessibility to domain stakeholders. The framework poses structured questions addressing satisfaction with traditional databases, the number of active data participants, trust levels among participants, and privacy and control requirements.

A survey was administered to 10 purposively sampled epidemiologists and decision-making staff at the Amhara Public Health Institute between February 14 and March 2, 2021. Semi-structured interviews were conducted individually, with each respondent briefed on blockchain fundamentals before completing the IEEE decision tree questionnaire. Table 3 presents the responses.

Across the seven decision criteria, an average of 82.85% of respondents provided affirmative answers—exceeding the majority threshold required by the framework to classify a use case as blockchain-suitable. Notable results include: 90% confirmed that traditional paper-based methods cannot meet operational needs; 100% affirmed that multiple participants require data update capabilities; and 90% indicated low mutual trust among current system actors. These results validate the adoption of blockchain technology for the DEWS workflow and informed the subsequent model design.

## 4.3 Scope and Limitations

The methodology scope encompasses design, prototyping, and evaluation of blockchain-based surveillance operations. The study is limited to the Ethiopian DEWS context, employs the Ethereum Rinkeby test network rather than mainnet deployment, and draws survey participants from a single regional public health institute. These constraints are acknowledged as limitations affecting generalizability; however, the architectural model itself is designed to be platform-agnostic and transferable to other national surveillance contexts.
