# 6. Prototype Implementation

A functional prototype was developed to validate the blockchain-based disease early warning and surveillance model described in Section 5. This section documents the technology stack, smart contract architecture, implemented operations, and deployment configuration.

## 6.1 Development Environment and Project Structure

The prototype was implemented using the following technology stack: Solidity for smart contract development, Node.js as the server-side runtime environment, React and Next.js for the front-end application layer, Web3.js for Ethereum blockchain interaction, MetaMask for client-side transaction signing, Ganache CLI for local blockchain emulation during development, Mocha for automated contract testing, and Semantic UI for interface theming. Smart contracts were compiled using a custom compilation script that invokes the Solidity compiler and outputs bytecode and ABI to a build directory. Compiled contracts were deployed to the Ethereum Rinkeby test network via the Infura public API, with transaction signing handled by the Truffle HD Wallet Provider using a twelve-word mnemonic for account authentication.

The project architecture comprises five modules: (1) Ethereum components encompassing smart contract source code, compilation scripts, and deployment logic; (2) React page components implementing the user-facing views; (3) Next.js routing, server-side rendering, and hot module reloading; (4) overlay UI components providing modal and notification interfaces; and (5) test components for automated contract verification.

## 6.2 Smart Contract Architecture

The prototype implements two interdependent smart contracts within a single Solidity source file (Figure 14). The first contract, Report, encapsulates individual surveillance report instances with parameters for the creator address and report details. The second contract, ReportFactory, implements the factory design pattern—it instantiates, deploys, and manages all Report contract instances on the network. This architectural separation ensures that the factory contract retains an unmodified copy of the Report source code, preventing post-deployment tampering. The factory maintains a registry mapping of all deployed report addresses, providing a complete and tamper-proof index of surveillance records.

Deployment follows a one-time pattern: the ReportFactory contract is deployed once to the Rinkeby network and subsequently creates new Report instances on demand through user-initiated transactions. A dedicated deployment script configures a Web3 instance connected through the Infura API provider to handle all deployment transactions, specifying the target account and network endpoint as constructor arguments (Figures 15, 16).

## 6.3 Functional Operations

The prototype supports seven core operations that implement the surveillance model described in Section 5:

**Case report creation.** A case reporter initiates a transaction through MetaMask to the ReportFactory contract, which deploys a new Report instance with a unique blockchain address. The factory records and indexes all deployed report addresses, maintaining a persistent registry of all surveillance submissions (Figures 17–19).

**Report listing and detail retrieval.** The application queries the deployed ReportFactory instance via Web3 to retrieve all registered report addresses, then renders the list through the React front-end. Individual report details are retrieved through a contract function that returns the summary fields of each recorded report, including creator address, timestamp, and case data (Figures 20, 21).

**Supervisory review and feedback.** Supervisory-level users mark reports as read, which increments a read counter and unlocks rework request capabilities. When a report requires correction, supervisors submit rework requests with descriptive annotations, creating an immutable feedback record on the blockchain. The rework history is fully auditable through the contract interface (Figures 22, 23).

**Surveillance data analysis.** The analysis module presents reported case data across three epidemiological dimensions: temporal (weekly case aggregation), spatial (location-based geographic distribution), and demographic (age and gender attributes), implementing the analysis framework defined in Section 5.4 (Figure 24).

**Laboratory result reporting.** Laboratory technicians record pathogen identification results through a dedicated form interface, with each submission deployed as a blockchain transaction. All recorded laboratory reports are retrievable and displayed in list format, supporting the bidirectional laboratory network communication described in Section 5.2 (Figure 25).

## 6.4 Deployment Configuration

The prototype was deployed on the Ethereum Rinkeby test network, a proof-of-authority (PoA) testnet that simulates mainnet consensus behavior without incurring real transaction costs. This deployment configuration enables realistic performance evaluation while maintaining a controlled experimental environment. The Infura API provides remote node access for both deployment and runtime interaction, eliminating the requirement for local full-node operation. The PoA consensus mechanism on Rinkeby produces blocks at predictable intervals, providing the stable transaction confirmation times evaluated in Section 7.
