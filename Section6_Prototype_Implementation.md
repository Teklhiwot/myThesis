# 6. Prototype Implementation

## 6.1 Development Environment

The prototype was implemented using the following technology stack: Solidity for smart contract development, Node.js as the runtime environment, React and Next.js for the front-end application layer, Web3.js for blockchain interaction, MetaMask for transaction signing, Ganache CLI for local blockchain emulation during development, and Semantic UI for interface theming. Smart contracts were compiled using a custom compilation script and deployed to the Ethereum Rinkeby test network via the Infura public API, with transaction signing handled by the Truffle HD Wallet Provider.

The project architecture comprises five modules: Ethereum components (smart contracts, compilation, and deployment logic), React page components, Next.js routing and server-side rendering, overlay UI components, and test components.

## 6.2 Smart Contract Architecture

The prototype implements two smart contracts within a single Solidity source file. The first contract, Report, encapsulates individual surveillance report instances with parameters for the creator address and report details. The second contract, ReportFactory, implements the factory pattern—it deploys and manages all Report contract instances on the network. This separation ensures that the factory contract retains an unmodified copy of the Report source code, preventing post-deployment tampering. The factory maintains a registry of all deployed report addresses, providing a complete index of surveillance records (Figure 4.1).

Deployment follows a one-time pattern: the ReportFactory is deployed once to the Rinkeby network, and subsequently creates new Report instances on demand. A Web3 instance connected through the Infura API provider handles all deployment transactions (Figures 4.2, 4.3).

## 6.3 Functional Operations

The prototype supports seven core operations that implement the model described in Section 5:

**Case report creation.** A case reporter initiates a transaction through MetaMask to the ReportFactory contract, which deploys a new Report instance with a unique blockchain address. The factory records and indexes all deployed report addresses (Figures 4.4–4.6).

**Report listing and detail display.** The application queries the deployed ReportFactory instance via Web3 to retrieve all registered report addresses, then renders the list through the React front-end. Individual report details are retrieved through a contract function that returns the summary of each recorded report (Figures 4.7, 4.8).

**Report review and feedback.** Supervisory-level users mark reports as read, which updates the read count and unlocks rework request capabilities. When a report requires correction, supervisors submit rework requests with descriptive annotations, creating an immutable feedback record on the blockchain (Figures 4.9, 4.10).

**Surveillance data analysis.** The analysis module presents reported case data across three dimensions: temporal (weekly aggregation), spatial (location-based distribution), and demographic (age and gender attributes), implementing the epidemiological analysis framework defined in Section 5.4 (Figure 4.11).

**Laboratory result reporting.** Laboratory technicians record pathogen identification results through a dedicated form interface, with submissions deployed as blockchain transactions. All recorded laboratory reports are retrievable and displayed in list format (Figure 4.12).

## 6.4 Deployment Configuration

The prototype was deployed on the Ethereum Rinkeby test network, a proof-of-authority testnet that simulates mainnet behavior without incurring real transaction costs. This deployment configuration enables realistic performance evaluation while maintaining a controlled experimental environment. The Infura API provides node access for deployment and runtime interaction without requiring local full-node operation.
