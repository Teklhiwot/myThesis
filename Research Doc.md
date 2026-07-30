 PDF To Markdown Converter

    Debug View
    Result View

BAHIR DAR UNIVERSITY
BAHIR DAR INSTITUTE OF TECHNOLOGY
SCHOOL OF RESEARCH AND GRADUATE STUDIES
FACULTY OF COMPUTING
BLOCKCHAIN BASED MODEL AND PROTOTYPE
FOR DISEASE EARLY WARNING AND
SURVEILLANCE
BY:
TEKLHIWOT MEKONEN
FEBRUARY 2022
ETHIOPIA
BAHIR DAR UNIVERSITY
BAHIR DAR INSTITUTE OF TECHNOLOGY
SCHOOL OF RESEARCH AND GRADUATE STUDIES
FACULTY OF COMPUTING
BLOCKCHAIN BASED MODEL AND PROTOTYPE
FOR DISEASE EARLY WARNING AND SURVEILLANCE
BY:
TEKLHIWOT MEKONEN

A Thesis Submitted to the School of Research and Graduate Studies of Bahir Dar
Institute of Technology, BDU in Partial Fulfillment for the Degree of Master of
Science in Software Engineering in the Faculty of Computing

Advisor: Esubalew Alemneh (PhD)
February 2022
Bahir Dar,Ethiopia
DECLARATION

This is to certify that the thesis entitled “Blockchain based model and prototype for
disease early warning and surveillance ” submitted in partial fulfillment of the
requirements for the degree of Master of Science in Software engineering under
computing faculty,Bahir Dar Institute of Technology , is a record of original work
carried out by me and has never been submitted to this or any other institution to get
any other degree or certificates. The assistance and help I received during the course of
this investigation have been duly acknowledged.

1 Name of the Student 2. signature 3. Date

i

©
Teklhiwot Mekonen
ALL RIGHTS RESERVED

ii

ACKNOWLEDGMENT

Throughout my master’s study I have received lots of support and encouragement from
many people. I would first like to thank almighty god for giving me strength and
unwavering believe in myself. Also, I would like to thank my family for the
encouragement as well as support and for believing in me. Next I would like to thank
my advisor Dr. Esubalew Alemneh for the support and direction he has given me from
my under graduate study all the way to my masters program. Furthermore, I would like
to thank my academic advisor Dr Mekonen Wagaw for all cooperation and support he
has given whenever I sat with him for advice. I also would like to thank Dr Gebeyehu
Belay for his direction and support.in addition I also would like to thank Dr Tesefa for
his strong lessons in research design and methodology.My sincere gratitude also goes
to Mr. Asegahge for his cooperation and support by writing a support letter for my
thesis work.At last but not list I would like to thank my friends and class meet for every
bit of encouragement and support.

iii

ABSTRACT

Diseases early warning and surveillance is a very important sector in healthcare. It is
concerned with controlling infectious diseases, a task which will lead to a timely
prevention and mitigation work. The current diseases early warning and surveillance
systems has short comings such as manual carpet reporting, data and process
centralization, tractability problems and data security issues. In this paper we proposed
blockchain based model for disease early warning and surveillance tasks. Our model
utilizes the desirable features of the blockchain technology which are decentralization,
immutability, security and tractability. We designed our model using the ethereum
blockchain platform this model includes the tasks involved in diseases early warning
and surveillance namely checking surveillance report completeness, surveillance data
reporting, laboratory result reporting and analysis of reported surveillance data.
Furthermore, based on our model we developed a prototype using the ethereum
platform and used this prototype for evaluation of our model. Our evaluation assesses
how valuable the features, functionality, content and transactions of our model are to
the domain area and also how easily and efficiently users can complete their tasks
using the prototype. Taking this assessment criteria in to consideration we have
conducted performance, usability and security evaluation.The performance evaluation
has demonstrated that the block generation time for 12 blocks in 10 experiments was
12 to 14 seconds which is a fast and stable block generation time. We conducted our
usability evaluation using SUMI(Software Usability Measurement Inventory),a
standardized usability evaluation tool, and the evaluation results achieved a maximum
score of 68.96 and minimum score of 60.46 for the SUMI evaluation scales where the
possible maximum score is 73.Furthermore we conducted security evaluation by
defining a thereat model and conducted assessment for security risk scenarios.The
result for this assessment implies that our model is safe and secure solution.Summing
up, our evaluation verifies that our model is a distributed, secure, immutable and
traceable solution to the research problem that we have studied.

iv

TABLE OF CONTENTS

DECLARATION.................................. i

ACKNOWLEDGMENT.............................. ii

ABSTRACT.................................... iii

LIST OF FIGURES................................ viii

LIST OF TABLES................................. x

LIST OF ABBREVIATIONS........................... x

1 Introduction.................................. 1
1.1 Background................................ 1
1.2 Problem statement............................ 3
1.3 Objective of the study.......................... 5
1.4 Scope................................... 5
1.5 Significance of the study......................... 5

2 Literature review............................... 7
2.1 Introduction................................ 7
2.2 Blockchain technology concepts..................... 7
2.3 Types of Blockchain............................ 8
2.3.1 Private and Public Blockchain.................. 8
2.3.2 Permissioned and Permissionless Blockchain.......... 8
2.3.3 Consortium Blockchain...................... 9
2.4 Characteristics of blockchain Technology................ 9
2.4.1 Immutable............................. 9
2.4.2 Consensus Driven........................ 9
2.4.3 Distributed............................ 10
2.4.4 Enhanced security......................... 10
2.4.5 Faster Transaction........................ 10

v

2.6.4 Identifying Priority Diseases and Conditions for

    2.5 Platform Selection and Performance Analysis
        2.5.1 Ethereum
    2.6 Disease Early Warning and Surveillance in Ethiopia
        2.6.1 Components of Early Warning System
        2.6.2 Indictor Based Surveillance
        2.6.3 Integrated Disease Surveillance
            Surveillance
        2.6.5 Standard Case Definitions
        2.6.6 Reporting diseases and conditions under surveillance
        2.6.7 Laboratory-based Surveillance
        2.6.8 Event-based Surveillance
        2.6.9 Data Analysis and Interpretation
        2.6.10 Communicating the information
    2.7 Related works
    3 Research Methodology
        3.1 Research Design
        3.2 The Stages of Systems Development Research
        3.3 Developing Blockchain Model
        3.4 Survey Study
            Surveillance 3.5 Blockchain Based Model Design for Disease Early Warning and
            3.5.1 Design for disease reporting process
            3.5.2 Design for Laboratory networks
            3.5.3 Design for checking the completeness of a report
            3.5.4 Design for Data analysis
    4 Experiment
        4.1 Introduction
        4.2 Prototype
            4.2.1 Creating a case-based report
            4.2.2 Displaying list of reported cases
            4.2.3 Displaying the details of each report
            4.2.4 Marking a report as read
            4.2.5 Requesting rework of a report
            4.2.6 Analysis of the recorded reports
            4.2.7 Reporting Laboratory Results
    5 Evaluation
        5.1 Introduction
        5.2 Performance evaluation
            5.2.1 Evaluation based on block generation time
        5.3 Usability Evaluation
            5.3.1 Summary
        5.4 Security Evaluation
            5.4.1 Threat model
            5.4.2 Summary
    6 Conclusion and Future work
        6.1 Conclusion
        6.2 Future work
    7 References
    8 Appendices
    1.1 Blockchain System LIST OF FIGURES
    2.1 A Blockchain Diagram
    2.2 Ethereum state transition
        throughout a health system 2.3 Formal and informal flow of surveillance data and information
    3.1 System Development Research methodology (Nunamaker et al., 1990)
    3.2 Blockchain decision frameworks
    3.3 IEEE Blockchain Decision Tree
        Surveillance 3.4 Ethereum Smart Contract Mechanism for Disease Early waning and
    3.5 How developers and end users interact with Ethereum network.
        surveillance. 3.6 The proposed blockchain based model for diseases early warning and
    3.7 Design for disease reporting process.
    3.8 Design for laboratory result report.
    3.9 Design for completeness of a report task.
    3.11 Data analysis by place.
    3.10 Data analysis by time
    3.12 Data analysis by person.
    3.13 Incidence analysis.
    3.14 Prevalence analysis.
    4.1 The compilation process.
    4.2 Deployment process.
    4.3 Code for deployment.
    4.4 Code for creating the contracts.
    4.5 Deploying a report.
    4.6 Report creating scenario.
    4.7 Figure illustrating the display of the list of reports.
    4.8 Figure illustrating the display of each of the reports.
    4.9 Marking the of a report as read
    4.10 Scenario for a rework request.
    4.11 Surveillance data analysis scenarios.
    4.12 Scenario for Laboratory result report.
    5.1 Bar plot of the Block generation experiment.
    5.2 Summary Statistics for the SUMI.
        of the SUMI evaluation. 5.3 Graphical summary showing Mean with 95% CIs(Confidence Interval)
    5.4 Graphical summary showing Median Boxplots of the SUMI evaluation.

LIST OF TABLES

2.1 Comparison of blockchain platforms.................... 12
2.2 List of reportable diseases / conditions in Ethiopia............ 19

3.1 Questionnaires Answers for IEEE Blockchain Decision Tree....... 35

5.1 Time of generating 12 blocks,E: Experiment ; B: Block.......... 66

x

LIST OF ABBREVIATIONS

AI: - Artificial Intelligence.
BFT: - Byzantine Fault Tolerant.
DLT: - Distributed Ledger Technology.
DApp: - Distributed Application.
EVM: - Ethereum Virtual Machine.
FHIR: - Fast Healthcare Interoperability.
HIPAA: - Health Insurance Portability and Accountability Act.
HEWs: - Health Extension Workers.
IOT: - Internet of things.
IEEE: - Institute of Electrical and Electronics Engineers
IDS: - Integrated Disease Surveillance.
ONC: - Office of The National Coordinator for Health Information Technology.
PBFT: - Practical Byzantine Fault Tolerance.
POET: - Proof of Elapsed Time.
PHEM: - Public Health Emergency Management.
RLP: - Recursive Length Prefix.
SDRM: - Design Research Methodology.
SARS: - Severe Acute Respiratory Syndrome.
SD: - System Development.
SUMI: - Software Usability Measurement Inventory.
VHF: - Viral Hemorrhagic fevers.

xi

Chapter 1
Introduction
1.1 Background

Blockchain is a distributed system which performs the dual function of recording and
storing the records of the transaction. In this blockchain, the data is located in a
network of personal computers called ‘nodes’ without any central control (Vijay
Kumar Chattu, 8 May 2019).It have features like immutability, decentralization, peer to
peer network frame of work (removing requirement of third-party authorization),
security, interoperability and faster transaction settlement. These features make it
suitable for application areas like supply chain and logistics monitoring, voting
mechanisms, secure medical data sharing, personal identity security and cross border
payments (Perera et al., 2019). Blockchain is one of the fast-rising foundational
technology in the world today. Even though the origins of its popularity are in crypto
currencies, it brings significant changes in many IT environments. Blockchain
technology provides some advantages that are not offered in conventional databases, IT
systems or applications. Blockchain can avoid a central authority, eliminates
intermediaries, provides real-time settlement, reduces operational costs, and has high
levels of transparency. These are a few potential advantages that this new technology
can give to IT environments.

In addition blockchain is distributed ledger that maintains a continuously growing
list of ordered records, called blocks. These blocks are cryptographically linked
together to form a chain. Each block contains a cryptographic hash of the previous
block, a timestamp, and transaction data. A blockchain is a decentralized, distributed
and digital ledger that is used to record transactions across many computers so that the
record cannot be altered retroactively without the alteration of all subsequent blocks
and the consensus of the network (Manav Gupta, 2017). It contains transaction data in
blocks that links together to form a chain. Each block contains a hash, time stamped

batches of recent valid transactions, and the hash of the previous block. The previous
block hash links the blocks together and prevents any block from being altered or a
block being inserted between two existing blocks. This method enables blockchain to
be tamper proof. Today blockchain technology is a hot research issue all over the
world; as stated by (Seitz, 2017), blockchain is the most discussed concept behind
bitcoin and the most advanced blockchain application technology in the academia.
Block of data are structured and organized in sequential order to make batch entries
that is why blockchain is named as blockchain (Manav Gupta, 2017). Blocks of
transactions are hashed using cryptographic hash function with its intermediate prior
record of each block to form immutable and irreversible record of transaction on the
blockchain (Patel, 2019).Here in this study this technology will be utilized for public
health management.

Figure 1.1: Blockchain System

Public health is the science and art of preventing disease, prolonging life and
promoting physical health and efficiency through organized community efforts for the
sanitation of the environment, the control of community infections, the education of the
individual in principles of personal hygiene, the organization of medical and nursing
service for the early diagnosis , preventive treatment of disease, and the development
of social machinery which will ensure to every individual in the community a standard
of living adequate for the maintenance of health (Winslow, 1920). Furthermore public
health is a discipline concerned with ways to preventing and mitigating health threats
in addition it is science of safe guarding people and their community from potential
and recurring disease (Binns & Low, 2015). It is continuously challenged by recurrent
and unexpected diseases outbreak and is facing the challenge of managing health
consequences of natural and human made disasters, emergencies, crisis and conflicts.
And to address this issue diseases surveillance and outbreak control measures are
employed. And the existing system and work ways and practices used in public health
emergency management office have problems which are data and process
centralization, security issues, usage of different generic software or manual
procedures for different tasks, interoperability problems between different involved
parties and inefficient flow of information. To that end this research proposes to design
a Blockchain model and to develop prototype using Ethereum platform for disease
early warning and surveillance with the objective of alleviating the problems observed
in the current systems. This proposed research aims to integrate blockchain technology
in the major processes of disease early warning and surveillance which will in turn
help in the adoption of the desirable properties of the blockchain in to those process.
1.2 Problem statement

Disease early warning and surveillance is a very crucial activity that relies heavily on
efficient and accurate information flow with the aim of preventing and managing
diseases and public health emergencies. This surveillance and outbreak control work
has major process which are infectious disease report and laboratory result reporting
(Institute, 2012). These tasks require timely and accurate flow of information and
efficient management of logistics and the current systems fall behind this intended
quality of work. The existing system and workways and practices used in public health
emergency management offices particularly in Ethiopia public health institute have five
major problems which are data and process centralization, security issues, usage of
different generic software for different tasks, manual procedures, interoperability
problems between different involved parties and data traceability problems. Studies
have been conducted for disease surveillance based up on artificial intelligence(AI) and

machine learning techniques and this techniques exhibit limitations which are:

    Security issues : -Adversarial actions in machine learning can be inputs to a
    machine learning model that are intentionally created to force it to make a
    mistake. Adversarial operations are created by taking real data and making
    intentional alterations to the data in order to fool the data processing algorithm.
    Attacks on the model can be in forms of very slight small perturbations to the
    input data i.e making a human invisible changes to every pixel in an image
    (Finlayson et al., 2019).
    Problem on trust of AI decisions : - This means that understanding and
    trusting decisions made by the AI is difficult for users and customers, making the
    decision dysfunctional.Even if we understand underlying mathematical
    principles of AI models, it is difficult and often impossible to interrogate the
    inner operational procedures of this models to understand how and why they
    make a certain decision (Core et al., 2012).
    Data centralization problem : - AI uses data centralization. It helps
    concentrate power in the hands of few organizations who are able to source and
    process large amounts of data. This data centralization causes problems of
    inefficient workflow,lower level of location based adaptability, reducing number
    of legitimate input , risk of data loss and security vulnerability (Kelly et al.,
    2019).
    AI and machine learning algorithms have problem of in-applicability
    outside of the training domain : - Majority of AI systems are far from
    achieving generalize-ability let alone to achieve good usability in diseases
    surveillance because of it dynamic and quickly evolving nature. This type of lack
    of generalize-ability will result in a model that can easily break and a model
    having blind spots that can produce bad decisions (Kelly et al., 2019).
    Health care data in general is not promptly at the disposal for machine
    learning : -Many of the problem facing the translation of AI algorithms are
    caused because of the fact that most of the health care data are not readily
    available for machine learning. Clinical data is usually siloed in many sectors of
    the health care system which is pretty difficult for AI algorithms to deal with
    (Kelly et al., 2019).

To that end, we proposed designing of blockchain based model and developed
prototype for disease early warning and surveillance control tasks which utilizes the
highly advantageous properties of the blockchain technology which are

decentralization, immutability, interoperability and security. This research is expected
to answer the following questions: -

    How to design a blockchain based model for diseases early warning and
    surveillance system?
    How to develop a prototype for the proposed model?
    How to test and evaluate the proposed model?

1.3 Objective of the study

General objective
The general objective of this research is to design blockchain model for diseases
early warning and surveillance tasks and to develop a prototype using the ethereum
platform.

Specific objectives

    To perform a deep and structured review on background of the study and literature
    concerned with the study for better and clear understanding of the domain area
    and blockchain technology.
    To design blockchain based model for disease surveillance and outbreak control
    tasks.
    To develop a prototype using Ethereum platform.
    To conduct performance, usability and security evaluation.

1.4 Scope

This research is prepared to adopt blockchain technology to domain area of the study
which is diseases surveillance and outbreak control, it designs blockchain based model
for task of disease surveillance and outbreak control and also develops a prototype as
well.
1.5 Significance of the study

Now a day’s blockchain technology has become one of the go to choice of technology
for different application areas because of its desired characteristics like decentralization,

immutability and security. This study brings new research findings that could help as a
source of data for upcoming researchers, programmers and academicians. The purpose
of this study is to design blockchain based model and to develop a prototype for disease
early warning surveillance tasks and this research has the following Significance: -

    Alleviates data centralization problem observed in diseases early warning and
    surveillance system by integrating the decentralization feature of the the
    blockchain technology.
    We designed a model that is more secure by utilizing the immutability feature of
    the blockchain technology which will fill up the security holes observed in the
    current working procedures of the research domain.
    We designed a model that utilizes decentralization, traceability and faster
    transaction settlement features of blockchain to bring integration of work in
    diseases surveillance with efficient flow of information.
    We designed a model that reduce the problems of subjectivity and inaccuracy
    observed in disease early warning and surveillance work.
    Outlines the importance of blockchain technology application in disease early
    warning and surveillance work.

Chapter 2
Literature review
2.1 Introduction

In this chapter, thorough review of literatures and analysis of related works is
presented. Literatures on the concept of blockchain technology and disease early
warning and surveillance are discussed. We begin with a brief introduction of
blockchain technology after that types of blockchain technology, characteristics of
blockchain technology, ethereum platform and disease early warning and surveillance
workflow are presented. Finally, set of related works are discussed.
2.2 Blockchain technology concepts

Blockchain is one of the fast-rising technology in the world today. Even though the
origins of its popularity are in crypto currencies, it brings significant changes in any of
software development environments. It provides some advantages that are not offered
in conventional databases, software systems or applications. Blockchain is able to
avoid a central authority, eliminates intermediaries, provides real-time settlement,
reduces operational costs, and has high levels of transparency. These are a few
potential advantages that this new technology can give to software systems.
A blockchain is a dispersed database that keeps up a ceaselessly developing list of
requested records, called blocks. These blocks are cryptographically linked together to
form a chain. Each block contains a cryptographic hash of the previous block, a
timestamp, and transaction data. Further more a blockchain is a decentralized,
conveyed, and computerized record that’s utilized to record exchanges over numerous
computers so that the record cannot be modified subsequently without the change of all
consequent pieces and the network agreement (Manav Gupta, 2017).
Blockchain contains transaction data in blocks that link together to form a chain.
Each block contains a cryptographic hash, time-stamped clusters of the latest substantial

transactions and the hash of the past block. The past block hash joins the blocks together
and avoids any block from being changed or a block being inserted between two existing
blocks. This strategy empowers blockchain renders the blockchain tamper verification.

Figure 2.1: A Blockchain Diagram

This days blockchain technology is a hot research area branching out in to all types of
domain area (Seitz, 2017). Blockchain is the most discussed concept behind bitcoin
and the most advanced blockchain application technology in the academia. Block of
data are structured and organized in sequential order to make batch entries that is why
blockchain is named as it is (Manav Gupta, 2017). and block of transaction are hashed
using cryptographic hash function with its intermediate prior record of each block to
form immutable and irreversible record of transaction on the blockchain (Patel, 2019).
2.3 Types of Blockchain
2.3.1 Private and Public Blockchain

A public blockchain is open for joining into the network, read and write access. Public
blockchain’s often work with Proof of Work consensus mechanisms to incentivize
participation. A private blockchain often is the opposite of a public blockchain and
only authorized users have read access and can write and join the network. Often this
requires an invitation to join, subsequently either the network starter or a set of rules
put in place, determine if someone is fit to join (Sargsyan et al., 2019).
2.3.2 Permissioned and Permissionless Blockchain

In permissionless networks, any user can freely join and start interacting with the
network, such as submitting transactions, adding entries to the ledger, running nodes
on the system, and verifying transactions where as in a permissioned blockchain, the

network administrator or the owner decides who can join the network and only a few
members are allowed to verify blocks. In case of permissionless blockchain a user
privileges (read and write) is not limited but in permissioned blockchain; write and
read or user can be limited (Yaga et al., 2018).
2.3.3 Consortium Blockchain

Consortium blockchain, also called federated blockchain is a type of blockchain which
is the hybrid of the public and private blockchains. The primary objective of this type
of blockchain is to increase organizations effect t meet the challenges of a particular
industry. Corporations with similar objectives can utilize consortium blockchain to
improve and enhance transparency, workflow and accountability. Deloitte research
(Pawczuk et al., 2020) shows that about 74 % of corporations are choosing consortium
blockchain in the block chain spectrum. Consortium blockchain presents the new kid
on the block to join the already organized structure and serve the structured
information instead of starting form scratch. This blockchain type enable corporations
to fond solutions and work around together and proposes efficient time and
development spending management.
2.4 Characteristics of blockchain Technology
2.4.1 Immutable

After transaction is added to a blockchain ledger, it cannot be changed or altered. This
immutability is one of the principal aspects that contribute to the trustworthiness of
blockchain transactions. A blockchain’s immutability is secured through its use of
cryptography. In a traditional, centralized database, an authorized user can connect to
the server to add or modify the data without the approval or detection of other users.
Because all the data is held in one place, if the security of the server or the authority
that runs the server is compromised, data can be modified or permanently deleted. This
may sometimes be irreversible and occur without anyone else realizing it. (Manav
Gupta, 2017).
2.4.2 Consensus Driven

Blockchain can be both decentralized and secure because they rely on the users in the
network themselves to verify the transactions. This happens through the “consensus”
of the participants to mitigate what is known as the Byzantine General’s problem. This
is a situation where some nodes in the system are malicious and try to insert false

entries into the ledger and have to be prevented from doing so. Different consensus
mechanisms are used to, in effect make blockchain Byzantine Fault Tolerant (BFT).
For public blockchain, these include Proof of Work (used by Bitcoin and Ethereum)
and Proof of Stake (the mechanism Ethereum is trying to move to).For private
blockchain on the other hand, popular techniques are Practical Byzantine Fault
Tolerance (PBFT) and its variations and other newer consensus mechanisms like Proof
of Elapsed Time (POET)(S. Zhang & Lee, 2020).
2.4.3 Distributed

One of the core features of a blockchain is that it is a distributed ledger, which means
the database is maintained and held by all nodes in its own individual network. No
central authority holds or updates the ledger, rather each node independently constructs
its own record by processing every block (group of transactions), deciding if it is valid,
then voting via the consensus mechanism on their conclusions. Once a change in the
record is agreed, each node updates its own ledger. In contrast, traditional databases are
stored and maintained centrally, which can make them high-value targets for hackers
and criminals (Jiang et al., 2019).
2.4.4 Enhanced security

Because of its decentralization property which gets rid of the need for a central
authority no one can simply alter any characteristics of the blockchain network in
addition to its decentralization nature usage of encryption give the network another
layer of security. What makes the blockchain more secure than other already existing
technologies is it use of a special disguise which is cryptography, a fire wall for attacks
that is formulated by complex mathematical algorithms. Cryptographical hash is used
for every information on the blockchain. In the encryption process the input data
passes through a mathematical algorithm that generates a different kind of value with
fixed length. The ledger contains blocks that have a unique hash of their own and also
contains previous block’s hash. Altering or trying to tamper with the block chain data
means changing the ID of all the hashes which is impossible (Iredale, n.d.).
2.4.5 Faster Transaction

In traditional banking systems it can takes many days to process finalized settlements.
The process is quite slow and can be corrupt easily. For alleviating this problems block
chain technology provides a way faster settlement speed compared to the traditional
banking systems. This enhancement enables faster transaction rates which saves time

and resources. Moreover a smart contract system can be used to make faster settlements
for any kind of smart contract (Iredale, n.d.).
2.5 Platform Selection and Performance Analysis

We had conducted literature review in order to select the appropriate platform that best
fits our model needs. There are many types of blockchain platforms among them
Ethereum, XRPL (Ripple) and Bitcoin are the latest, matured and stable ones
(Rankhambe & Kaur Khanuja, 2019). From these platforms the best one that would be
used to developed our prototype is selected. What we looked for in a particular
platform was highly dependent on the properties and needs of our prototype. Our
prototype is expected to have a decentralizing application feature which can achieve
process and data decentralization. In addition, the prototype is expected to have
interaction with a large secured public blockchain network furthermore the platform
that will be selected is expected to have a property of future proofing which implies
that it should be unlikely to become obsolete. Here the table on the next page compares
the top 3 platforms we selected using different comparison matrices. Table 2.1
illustrates a comparison implying that the Ethereum platform is the most suitable
platform that can be used to develop our prototype.
2.5.1 Ethereum

The expectation of Ethereum is to form an elective convention for building
decentralized applications, giving a diverse set of tradeoffs that will be exceptionally
valuable for expansive class of decentralized applications with specific emphasis on
circumstances with fast advancement time, security, interoperability and immutability.
Ethereum does this by building what is basically the ultimate unique foundational
layer: a blockchain with a built-in Turing-complete programming language, permitting
anybody to type in smart contracts and decentralized applications where they can make
their own subjective rules for proprietorship, transaction groups and state transition
capacities. Smart contracts, cryptographic ”boxes” that contain value and only open it
on the chance that certain conditions are met, can be built on top of the platform, with
immensely more power than that offered by Bitcoin scripting since because of the
included powers of Turing-completeness, value-awareness, blockchain-awareness and
state awareness (Buterin, 2020).

Metric Bitcoin Ethereum XRPL(Ripple)
Block 1st generation 2nd generation 3rd generation
Smart contract Yes Yes No
Decentralized
apps(dApps)

No Yes No

Decentralized
exchange (DEX)

No Yes Yes

Deposit times 40 minutes 5 minutes Near instant
Consensuses
algorithm

Proof of work Proof of work Pluggable
Framework
Human readable
address

No Yes No

Digital identity
management

No Yes No

Data oracle No Yes No
Distributed cloud
storage

No Yes No

Distributed cloud
computing

No Yes No

Block time 600s 14s 4s
Industry focus Financial
services

Cross-Industry Financial
services
Table 2.1: Comparison of blockchain platforms.

2.5.1.1 Philosophy

The design behind Ethereum is intended to follow the following principles (Buterin,
2020):

    Simplicity:The Ethereum convention ought to be as straightforward as possible,
    indeed at the cost of a few information capacity or time inefficiency. In a perfect
    world an average programmer should be able to take after and actualize the
    whole detail, so as to fully realize the exceptional democratizing potential that
    cryptocurrency brings and further the vision of Ethereum as a convention that’s
    open to all. Any optimization which includes complexity ought to not be
    included unless that optimization gives very substantial benefit.
    Universality: a principal portion of ethereum’s design reasoning is that
    Ethereum does not have ”features”. does not have ”features”. Instep, Ethereum
    gives an internal Turing-complete scripting language, which a software engineer
    can utilize to develop any smart contract or transaction sort that can be

mathematically characterized. In case we need to design our own financial
subsidiary? With Ethereum, we are able to. Need to form our own currency?we
are able to set it up as an Ethereum contract. Need to set up a full-scale Daemon
or Skynet? We may got to have some thousand interlocking contracts, and be
beyond any doubt to nourish them liberally, in order to accomplish that, nothing
is halting us with Ethereum at our disposal.

    Modularity:the parts of the Ethereum convention ought to be outlined to be as
    secluded and divisible as possible. Over the course of improvement, our
    objective is to form a ptextbfrogram where on the off chance that one was to
    create a little protocol modification in one place, the application stack would
    proceed to operate without any further alteration. Advancements such as Ethash,
    modified Patricia trees and RLP ought to be, and are, executed as isolated,
    feature-complete libraries. Typically so that even in spite of the fact that they are
    utilized in Ethereum, indeed in case Ethereum does not require certain features,
    such features are still usable in other conventions as well. Ethereum
    advancement ought to be maximally done so as to benefit the complete
    cryptocurrency environment, not only just Ethereum.
    Agility: subtle elements of the Ethereum protocol are not decided and done.
    Computational evaluation afterward on the development process can lead us to
    find that certain adjustments, e.g., to the convention design or to the Ethereum
    Virtual Machine (EVM), will considerably enhance scalability or security. On
    the off chance that any such opportunities are found, we are able to and will use
    them in a great deal.
    Non-discrimination and non-censorship:The protocol ought to not endeavor to
    actively confine or anticipate particular categories of utilization. All
    administrative instruments within the protocol ought to be outlined to directly
    control the harm and not endeavor to restrict particular undesirable applications.
    A software engineer can even program an infinite loop script on top of Ethereum
    for as far as they are willing to keep paying the per-computational-step exchange
    charge.

2.5.1.2 Ethereum Accounts

In Ethereum, the state is made up of objects called ”accounts”, with each account having
a 20-byte address and state transitions being direct transfers of value and information
between accounts. An Ethereum account contains four fields:

    The nonce, a counter used to make sure each transaction can only be processed
    once

    The account’s current ether balance
    The account’s contract code, if present
    The account’s storage (empty by default)

”Ether” is the crypto-fuel of Ethereum, and is utilized to pay transaction costs.There
are two sorts of accounts: remotely claimed accounts, regulated by private keys, and
contract accounts, regulated by their contract code (Vujicic et al., 2018). A remotely
possessed account has no code, and one can send messages from an externally claimed
account by making and signing a transaction; in a contract account, Whenever the
contract account gets a message its code actuates, permitting it to read and write to an
internal storage and send other messages or make contracts in turn.

Note that ”contracts” in Ethereum ought to not be seen as something that ought to be
”fulfilled” or ”complied with”; instead, they resemble ”autonomous agents” that exist
in the Ethereum execution environment, continuously running a particular set of code
when ”poked” by a message or exchange, and having main control over their own ether
balance and their own key/value store to hold track of determined variables (Vujicic et
al., 2018).

2.5.1.3 Messages and Transactions

The term ”transaction” is used in Ethereum to refer to the signed data package that
stores a message to be sent from an externally owned account (Tikhomirov, 2018).
Transactions contain:

    The recipient of the message.
    A signature identifying the sender.
    The amount of ether to transfer from the sender to the recipient
    An optional data field.
    A STARTGAS value, representing the maximum number of computational steps
    the transaction execution is allowed to take.
    A GASPRICE value, representing the fee the sender pays per computational step.

The first three on the list are standard areas anticipated in any cryptocurrency. The
information field has no function by default, but the virtual machine has an opcode
which a contract can utilize to get the information; as example use case, in the event

that a contract is working as an on-blockchain domain enrollment service, at that point
it may wish to translate the information being passed to it as containing two ”fields”,
the primary field being a domain to enlist and the second field being the IP address to
enlist it to. The contract would read these values from the message data and fittingly
put them in storage.

The STARTGAS and GASPRICE fields are crucial for Ethereum’s anti-denial of
service model. In order to prevent accidental or hostile infinite loops or other
computational wastage in code, each transaction is required to set a limit to how many
computational steps of code execution it can use. The fundamental unit of computation
is ”gas”; usually, a computational step costs 1 gas, but some operations cost higher
amounts of gas because they are more computationally expensive, or increase the
amount of data that must be stored as part of the state. There is also a fee of 5 gas for
every byte in the transaction data. The intent of the fee system is to require an attacker
to pay proportionately for every resource that they consume, including computation,
bandwidth and storage; hence, any transaction that leads to the network consuming a
greater amount of any of these resources must have a gas fee roughly proportional to
the increment.
Messages: Contracts have the ability to send ”messages” to other contracts.
Messages are virtual objects that are never serialized and exist only in the Ethereum
execution environment. A message contains (Buterin, 2020):

    The sender of the message (implicit) and recipient of the message.
    The amount of ether to transfer alongside the message.
    An optional data fields and a STARTGAS value..

Essentially, a message is like a transaction, except it is produced by a contract and
not an external actor. A message is produced when a contract currently executing code
executes the CALL opcode, which produces and executes a message. Like a transaction,
a message leads to the recipient account running its code. Thus, contracts can have
relationships with other contracts in exactly the same way that external actors can.

Figure 2.2: Ethereum state transition

The community established consensus protocols of the Ethereum platform are
obeyed by anyone who runs an Ethereum enabled software system (S. Zhang & Lee,
2020). The Ethereum’s state of consensus is accomplished by a system known as proof
of work. Proof work involves contemplating for a specific value and when this value is
hashed using SHA256 in which the hash begins with certain number of zero bits. The
function used for hashing makes sure that the input data cannot be reverse engineered
given a specific output of the data thus SHA256 input produces a unique and
indistinguishable output (Rosic, 2020).
2.6 Disease Early Warning and Surveillance in Ethiopia

Early warning is a process the recognizing a public wellbeing risk by closely and
periodically observing recognized indicators and also by foreseeing the risk it postures
on the wellbeing of the public and the health framework. The reason for having early
warning is to empower the arrangement of timely and successful data to the public and
to responders, through identified institutions that permit planning for successful
response or taking action to maintain a strategic distance from or to decrease risk.
Public health early warning indicators are conditions which, when they occur or
change, signal an increase in the risk of occurrence of a particular threat to public
health. These indicators are regularly monitored to identify situations for which a
public health action may be needed (EPHI, 2016). Major indicators of early warning
include:

    An increment within the number of cases past anticipated occurrence of
    outbreaks,

    Unexplained medical problems caused by a treatment and mortality,
    Malnutrition,
    Evidence of an increase in zoonotic disease and/or related vectors,
    Natural changes such as discuss contamination, water quality changes,
    defilement,
    Drought, flood, severe weather (metrological information),
    Farm work occasions such as diminished collect, event of pests,
    Migrants, internally displaced people, disruption of health services and
    infrastructure,
    Industrial accidents; chemical spills etc.

2.6.1 Components of Early Warning System

The occurrence of outbreaks is the most common public health emergency of concern.
Therefore, to ensure identification of risks and timely detection of an outbreak a
system with an early warning mechanism agreed by all operational agencies is
essential. Reporting forms, case definitions and reporting mechanisms are developed to
facilitate this. Health workers at the primary and secondary care levels are the key
component of this early warning system. They must be trained to report any event of
public health concern and suspected case of a disease with epidemic potential
immediately to the public health emergency management (PHEM) coordinator, using
direct communication and/or the outbreak alert form.
The analysis of these reports by the PHEM coordinator will allow for the
identification of risks and clusters. It is vital that all events of public health concern
and suspected cases are followed up and verified. The Integrated Disease Surveillance
(IDS) system will ideally detect an outbreak in the early stages. When an outbreak
occurs, the investigation will be needed to:

    Confirm the outbreak,
    Identify all cases and contacts,
    Detect patterns of epidemic spread,
    Estimate potential for further spread,
    Determine whether control measures are working effectively.

2.6.2 Indictor Based Surveillance

Indicator-based surveillance alludes to organized information collected through
scheduled integrated disease reconnaissance, dietary, and research facility observation.
2.6.3 Integrated Disease Surveillance

In integrated disease surveillance, the different observation activities ended up
coordinated into one framework inside the broader national health framework. It
moreover emphasizes all capacities of surveillance exercises to be carried out utilizing
comparable structures, processes, and workforce. Surveillance is the method of
gathering, analyzing, and dispersal of data for the reason of proper planning,
implementation, and assessment of health services/interventions. It is additionally
characterized as “Information for Action”.
A useful disease surveillance framework is basic for characterizing issues and
taking action. Proper understanding and utilization of this fundamental
epidemiological apparatus (public well being reconnaissance) helps health specialists
at the woreda and health units to set needs, arrange interventions, mobilize and
designate assets, distinguish epidemics early, start prompt reaction to epidemics, and
assess and screen health interventions. It too plays its part to evaluate long term disease
patterns (EPHI, 2016).
Objectives of surveillance:

    To identify epidemics/outbreaks so that they can be controlled in an opportune
    way,
    To foresee epidemics so that health administrations can arrange to reply, prevent
    where conceivable, treat and control lethal illnesses,
    To screen patterns of priority infections in order that changing patterns advise
    policy choice,
    To assess an intervention so that successful and efficient responses/policies are
    identified and supported.

2.6.4 Identifying Priority Diseases and Conditions for
Surveillance

It is obvious that surveillance could not be carried out for all infections and conditions.
Hence, a need ought to be given to those illnesses that are of interest at national and
worldwide levels.As shown in table 2.2, in Ethiopia 20 infections (13 are quickly
reportable though 7 are week after week reportable) are chosen to be included into the

schedule surveillance(Ethiopian Public Health Institute, 2017; WHO Regional Office
for Africa, 2020).

Immediately reportable diseases Weekly Reportable Diseases

    Acute Flaccid Paralysis / Polio 14. Dysentery
    Anthrax 15. Malaria
    Avian Human Influenza 16. Meningococcal Meningitis
    Cholera 17. Relapsing fever
    Dracunculiasis / Guinea worm 18. Severe Malnutrition
    Measles 19. Typhoid fever
    NNT 20. Typhus
    Rabies
    Smallpox
    SARS
    Pandemic Influenza A
    VHF
    Yellow fever
    Table 2.2: List of reportable diseases / conditions in Ethiopia.

2.6.5 Standard Case Definitions

A case definition :-a set of criteria used to decide on the off chance that a individual
contains a specific disease, or if the case can be considered for reporting and
examination.
Standard case definition :-is a case definition that’s agreed upon to be utilized by
everyone within the nation. Standard case definition can be classified as confirmed,
plausible, and conceivable or suspected.
Simplified Case Definitions for Community Level :-is a case definition of disease
and Conditions adapted to suit to health extension workers (HEWs) and community
members Including community health workers, traditional healers, birth attendants,
kebele administration, agricultural workers, teachers, drug outlets, etc. The community
case definitions were modified for simplicity and ease understanding by HEWs and the
community members.
2.6.6 Reporting diseases and conditions under surveillance

Guaranteeing solid reporting of surveillance information all through the nation is
imperative so that program directors, observation officers and other health care staff
can utilize the data for action. The community and health offices particularly health
posts are the main source of data. The data collected from this site is compiled in
standard forms, analyzed and after that sent, to the woreda health office. Woreda level
uses standard formats to compile the over all total, and send the information to
zone/region, from which the national level gets. Input and data sharing will take after
the same course.woredas are expected to communicate their reports with the
paper-based reporting system (Ethiopian Health and Nutrition Research Institute,
2011).

2.6.6.1 Reporting Periodicity

The recognized 20 infections and conditions are classified into two reporting periods
depending on their epidemic potential, illnesses focused on for elimination and
eradication: promptly reportable and week after week reportable (EPHI, 2016).
Immediate reporting
Right now, 13 illnesses are recognized to be reported quickly to another reporting
level. For the immediately reportable illnesses, a single suspected case is considered as
a suspected episode. Hence, suspected outbreak of these illnesses ought to be notified
from level to level within 30 minutes of identification.
Weekly detailing
As of now 7 illnesses and conditions are recognized to be reported week after week to
the next reporting level. Reporting of the entire number of cases and deaths seen within
a week (Monday to Sunday) and ought to be reported to the next level.
2.6.7 Laboratory-based Surveillance

Laboratory-based reconnaissance is the key portion of the in general surveillance as the
discovery and control of outbreaks requires quick recognizable proof of the pathogens
and their source of contamination. Beginning from the national level to the health post
level, suspected outbreaks ought to be affirmed by research facility examination. In
Ethiopia, networking of regional laboratories with the National Laboratory and
association of the diverse levels within the examination of the recognized infections is
emphasized. The reason for the public health laboratory network is to progress the
execution of laboratories in bolster of disease observation and reaction. The
laboratories will set up communication channels for schedule communication, trade of

Figure 2.3: Formal and informal flow of surveillance data and information throughout a
health system

data, and interaction in indicated ways with each other and with PHEM at each level.
The laboratory affirmation for most of the infections under surveillance can be
performed at regional levels. However, samples of a couple of illnesses ought to come
to the national laboratory to be tested at this level. For successful specimen data
storage and exchange, we ought to make sure that all the tests are labeled suitably
(EPHI, 2016) (Clinical & Laboratories, 2008). The label should contain: -

    The patient’s name,
    A special identification number,
    The specimen type and date and location of collection,
    The name of the specimen collector.

2.6.8 Event-based Surveillance

An event suggests an appearance of disease or an occurrence that produces a potential
for sickness. Event-based surveillance is an organized and fast capture of information
about occasions that are potential risk to public health. This data can be rumors and

other adhoc reports transmitted through typical channels (i.e., established schedule
reporting frameworks) and informal channels (i.e., media, health workers and
nongovernmental organizations reports, etc.) Event-based reconnaissance encompasses
the following two ranges (Ethiopian Health and Nutrition Reaserch Institute, 2011)
(EPHI, 2016):

    Events related to the event of infection in people, such as a cluster of cases of a
    sickness or disorders, unusual disease patterns, or unanticipated deaths as
    recognized by health specialists and other key witnesses inside the nation,
    Events related to potential risks for humans health, such as events related to
    diseases and deaths in animals, contaminated food items or water, natural threats
    including chemical and radio-nuclear events, uncommon climate estimates
    including flood and drought.

Event-based surveillance complements indicator-based surveillance. Both frameworks
ought to be seen as fundamental components of the national surveillance framework..
Event-based surveillance frameworks depend on the quick announcing of events and
offer assistance to detect :-

    Rare and new occasions not especially included in indicator-based surveillance.
    Events that happen in populations which don’t access health care through typical
    direct channels.

Sources of information for event-based surveillance include:

    Media, in most developed and developing nations the media are the foremost
    vital informal source of data on public health occasions. Subsequently, media are
    exceptionally imperative sources in event-based surveillance.
    Health care workers can be included in event-based surveillance as essential
    reporting sources, such as during patient consultations, or as auxiliary sources
    passing on rumors picked up through patient consultations.
    Community members can be too utilized as sources of data for event-based
    surveillance.
    Scientific discoveries related to new life forms, medicate resistance, etc., may
    trigger public health activity.
    Agriculture, environment, meteorology etc. may collect data on health-related
    dangers and exposures.
    International observe; through report and websites etc. as a nation can be affected
    secondarily by a health event rising abroad.

2.6.9 Data Analysis and Interpretation

Surveillance information analysis and interpretation is a vital portion that guides
responses to public health crises. The analysis gives key data for taking prompt public
health actions. Information analysis and translation ought to be done every day and
week by week at each level where information is collected (beginning from health
facility level to national level) (EPHI, 2016).
The major steps in data analysis are: creating database or filed paper data, data
cleaning and data analyzing and interpretation (information generation).
Data cleaning: Before beginning analysis check in case the information is total. If
reports are lost or portion of the information is incomplete attempt to get the
information before beginning analysis. For schedule week by week surveillance
information calculate the completeness of the reports. All woredas and levels above
ought to to calculate the completeness of the reports received on week-by-week basis.
A report is said to be complete if all the reporting units inside its catchments range has
submitted the reports on time. E.g., if 70 out of 100 health facilities have submitted,
then the report is said to be incomplete (or 70 % complete).

Completeness=Totalnumbero f health f acilitiesexpectedtoreportthatweekT henumbero f health f acilitiesreportedthatweek x 100

2.6.9.1 Performing Data Analysis

Simple data analysis is done to find information related to person, place, and time.
Analyze data by time:Time incorporates the variables such as day, week, month, and
year. The reason of “time” analysis is to identify changes within the number of cases
and deaths over time. It moreover helps to compare the current infection trend with
past patterns. It enables you to see if thresholds are come to or not.
Analyze data by place:Analyzing information with respect to place gives information
about where a disease is happening such as woreda, kebele, town, etc. setting up and
regularly updating a spot map of cases for selected infections can give ideas as to
where, how, and why the infection is spreading.
Analyze data by person:Analysis by person incorporates the variables such as age, sex,
ethnicity and other occupational risk attributes such health workers, food handlers,
miners, etc. A simple count of cases does not provide all of the data needed to
understand the effect of a infection on the community, health facility, or woreda, but
simple percentages and rates are useful for comparing the data reported.
Interpret the Analyzed Data

2.6.9.2 Interpret the Analyzed Data

Compare the current situation with previous week/months/quarter, seasons and years:

    Observe patterns and watch for whether the number of cases and deaths for the
    given infection is stable, increasing or decreasing.
    Monitor and decide if thresholds for action have been reached or crossed.

Thresholds are markers that demonstrate when something ought to happen or change.
They offer assistance to surveillance and program directors address the question, “When
will you take activity, and what will that activity be?”
Thresholds are based on data from two different sources:

    A local situation analysis for the particular infection or condition depicting who is
    at risk for the infection, what are the risks, when is action required to anticipate a
    wider epidemic, and where do the infections usually occur (example – a particular
    kebele level intestinal sickness epidemic threshold ought to be decided based on
    the 5 years average data).
    International suggestions from technical and infection control program experts.

These guidelines suggest two types of thresholds: an alert threshold and an action
threshold for the infections under surveillance.

An alert threshold recommends to health staff that further study and observation is
needed and readiness tasks should be initiated.An action threshold triggers a definite
response. It marks that the discoveries from either the schedule surveillance or special
examinations flag the requirement for action beyond affirming or clarifying the
problem. Possible actions incorporate communicating laboratory confirmation results
to concerned health centers, executing an emergency reaction such as immunization,
community awareness campaign, or improved disease control practices within the
health care setting etc.
2.6.10 Communicating the information

The main objective of outbreak communication is to communicate with the public in
ways that construct, keep up or re-establish trust, and empower take part within the
early warning activities. Mechanisms of accountability, association, and transparency
are vital to set up and keep up trust. Components of communication incorporate risk
communication, alert/ caution, and provision of feedback (Ethiopian Health and
Nutrition Reaserch Institute, 2011).

Risk communication:refers to activities for sharing data and concepts about risks and
actions to bargain with genuine and potential threats that could lead to an aimless
demand that’s impossible to meet. Effective communication and warnings need to be
brief, concise, justifiable, and significant, answering the questions of ”what?”,
”where?”, ”when?”, ”why?”, and ”how to respond?”. The utilization of plain language
in straightforward, brief sentences or expressions upgrades the user’s understanding of
the warning. Successful warnings ought to also incorporate nitty gritty data about the
risk with recognizable or localized geological references. Therefore, appropriate
communications keep the public educated to calm fear and to encourage cooperation
with the plague response. Create community education messages to supply the
community with data around recognizing the illness, how to avoid transmission. and
when to look for treatment. Start communication activities with the community as soon
as an epidemic or public health issue is recognized.
Provide feed-back:Frequently, health offices or woredas/zones health offices reliably
report surveillance information to the following level as required. If the facility does
not get data back about how the information was utilized or what the information
implied, health staff may think that their reporting isn’t important. As a result, future
reporting may not be as dependable since health staff will not know if the data, they
sent to other levels was valuable or necessary. They will have a great understanding of
the health situation at their own level, but they will not know the circumstance at a
woreda/zone/regional, or national level. When the woreda gets information, they ought
to respond to the health facilities that reported the information. And all the levels ought
to give feedback to the level that sends those reports. The reason of the feedback is to
reinforce efforts of the health staff to take part in the surveillance framework. Another
reason is to raise awareness about certain infections and any accomplishments of
infection control and avoidance activities within the area. Feedback may be written,
such as a week after week or month to month pamphlet, or it may be given orally, for
example, during a month to month staff assembly, reaching them electronically or
composed reports.
2.7 Related works

(Omar et al., 2019) proposed patient centric data management systems which utilize
blockchain technology which aims to solve security problems regarding health care
data in the cloud and for alleviating this problem one of the famous characteristics of
blockchain technology, decentralization is required. The article states that the impact
of attacks on the cloud data can be significantly reduced by decentralizing the cloud
data using peer to peer networks. And cryptographic functions are used to encrypt

patient data and also the functions are used to ensure continuity and immutability of
the chain. But the proposed system lacks interoperability between actors of the domain
area (patient, doctor and hospital).
(Griggs et al., 2018) proposed blockchain based smart contract to have secure
operational environment for medical sensors. Their research is motivated by security
concerns in the data that is used in IOT devices in healthcare and these concerns are
growing along side with the growing popularity of IOT applications in healthcare. The
system presented enables real-time patient monitoring and medical intervention by
enabling automated delivery of notifications in HIPAA compliant manner. But their
system has limitation of transaction delay which hinder the effectiveness of their
system.
Another application of blockchain technology in health care is observed in the
work of (Quaini et al., 2018). The study proposed an application architecture for
distributed electronic records which is called UniRec (unified medical records) which
is developed using blockchain technology, they proposed this application architecture
to alleviate the problem of unified view of medical records which has the problem of
lack of integration of patient and physician. The authors used case study methodology
to analyze the applicability, effectiveness and performance of their model.
Furthermore, the study presents a prototype which is evaluated using test scenarios.
But the model presented has limitation of large disk space requirement, the model
requires a huge amount of disk space when applied to more advanced health care
facilities which is a big issue affecting the performance and the scalability of the
model.
Furthermore (Zhang et al., 2018) proposed applying blockchain to securely and
scalable share clinical data. The study analyzed the ONC (Office of The National
Coordinator for Health Information Technology) requirements and their uses for
blockchain systems in addition the paper presents FHIR (Fast Healthcare
Interoperability) chain which is a blockchain-based architecture designed to meet ONC
requirements and also the authors present FHIR Chain-based decentralized app using
digital health identities to authenticate participants in a case study of collaborative
decision making for remote cancer care. The paper has presented a valuable study but
have limitations like interoperability which are data exchange challenges in sematic
interoperability also the research has problem of compatibility with legacy systems.
(Bollig et al., 2020) evaluates machine learning methods for conducting syndromic
surveillance using free-text veterinary necropsy reports. The authors train a system to
detect if a necropsy report from the Wisconsin Veterinary Diagnostic Laboratory
contains evidence of gastrointestinal, respiratory, or urinary pathology. The study also
evaluates the performance of several machine learning algorithms including deep
learning with a long short-term memory network. Their model was applied to over

33,000 necropsy reports and was used to describe temporal and spatial features of
diseases within a 14-year period, exposing epidemiological trends and detecting a
potential focus of gastrointestinal disease. But the authors have not made all data
underlying the findings in their manuscript fully available and also exact counts for
each of the classes is not specified, they only specified just the percentage in the
data-set.
(Harvey et al., 2021) present the first data-driven malaria epidemic early warning
system that can predict the 13-week case rate in a primary health facility in Burkina
Faso. Their system uses high-fidelity data of infant consultations taken from the
Integrated e-Diagnostic Approach (IeDA) system that has been rolled out throughout
Burkina Faso. The authors train a combination of Gaussian Processes and Random
Forest Regressors to estimate the weekly number of malaria cases over a 13-week
period. But the studies have no statistical analysis been performed appropriately and
rigorously.
(Rubio-Solis et al., 2019) proposed a study to use data from routine surveillance to
demonstrate their predictive framework which is based on neural network as well as
online extreme learning machine can predict a city in Brazil (Recife) at health district
level. Their goal of their study is to implement their model to real-time surveillance data
to create early warning system to spot out mosquito swarm on the fly. The study aims to
guide policy makers for directing appropriate resources for controlling mosquito larvae.
The above mentioned studies have demonstrated how a blockchain can be utilized
in the health sector making it more efficient and secure.As opposed to these studies our
research presents a blockchain model that is specifically designed for diseases early
warning. Furthermore, a mode based prototype was developed and a detailed and
standardized evaluation was conducted.
Chapter 3
Research Methodology

In this this chapter we presented the detailed description of our model for disease early
warning and surveillance work. In order to design our blockchain based model System
Development Research Methodology (SDRM) is used. As (Peck, 2017) and (Deloitte,

    suggested on how to develop and adopt a blockchain system ,we use IEEE
    blockchain decision tree questions and Deloitte fit assessment framework questions to
    evaluate whether our research area processes or use cases are the right fit for a
    blockchain based solution. Next our block chain based model is presented followed by
    detailed description of each of the process that are included the model.

3.1 Research Design

This study analyses the current working principles of disease early warning and
surveillance system and propose the blockchain technology as a solution. It properly
studies the existing problems and designs an blockchain based model. further a
prototype for the model is developed using the Ethereum platform. We used System
Development Research Methodology (SDRM) as a research methodology to help us
meet our general and specific objectives as well as to answer our research question.

This study analyses the current working principles of disease early warning and
surveillance system and propose the blockchain technology as a solution. It properly
studies the existing problems and designs an blockchain based model. further a
prototype for the model is developed using the Ethereum platform. We used System
Development Research Methodology (SDRM) as a research methodology (Nunamaker
et al., 1990) to help us meet our general and specific objectives as well as to answer our
research question.

Figure 3.1 shows the systems development research methodology used by this
study. It comprises five steps: 1) construct a conceptual framework; 2) develop a
system architecture; 3) analyze and design the system; 4) develop a prototype; and 5)
observe and evaluate the system (Nunamaker et al., 1990). Meeting the goal of
building an model for diseases early warning and surveillance depends on developing a
conceptual framework to understand the characteristics of a blockchain system and its
functionalities. The system architecture is important because it serves as a top-level
structure that guides the development of the system. By examining relevant
technologies, software system researchers can adopt new approaches to analyze and
design a more effective system. In addition, throughout the development process
researchers can gain insights into the system’s issues and complexities. Experiences
acquired from observing and evaluating the system can be consolidated to help better
understand the system and improve future system building efforts, and implementation
of a system is used to demonstrate the feasibility of the design and the usability of the
functionalities of a system.

Research methods generally address an existing problem from which a hypothesis
is formed and analyzed. Analysis may involve prototypical system(s) development to
provide proof-of-concept. For fundamental research, this evidence or artifact is
important as it becomes the focus for expanding or continuing research (Nunamaker et
al., 1990). The SD(system development) approach denotes a way to perform research
through exploration and integration of available technologies to produce an artifact,
system or system prototype. Systems development focuses on the theory-testing, more
than theory-building aspects of research, allowing a smooth progression from
development to evaluation. It could be thought of as proof-by-demonstration
(Nunamaker et al., 1990). On the other hand, it can be useful to consider as part of the
exploratory stage of the study, when the aim is to observe and evaluate the implications
or any other effects of introducing a particular new technology into the organization.
SD research process is of an iterative nature, as illustrated in figure 3.1 below. These
are found in the five stages of systems development research proposed by Nunamaker
et al (1990) namely, concept design, constructing the architecture of the system,
analyzing and designing the system, prototyping and evaluation. Our research starts
with the identification and description of a problem of practical relevance. We analyze
the current state of a disease early warning and surveillance work flow. Next, we derive
objectives and construct the architecture of the system that a solution has to fulfill to
resolve the identified issues and based on the model a prototype is developed using the
ethereum platform.

Figure 3.1: System Development Research methodology (Nunamaker et al., 1990)

3.2 The Stages of Systems Development Research

SDM research incorporates many of the concepts mentioned above, design,
construction, dynamic tool mediation and developmental aspects. These are found in
the five stages of systems development research proposed by Nunamaker et al (1990)
namely, concept design, constructing the architecture of the system, analyzing and
designing the system, prototyping and evaluation. These stages will be adopted in this
paper, although in contrast to Nunamaker et al, it is proposed here that the stages do
not follow a linear progression but rather one that is interactive and dynamic as
determined by the concept of tool mediation mentioned above. This suggests that what
is being done, the research activity, is continually influencing, and being influenced by,

the tools used in these five stages. Therefore the distinction between the stages is
blurred. They may be continually revisited or, sometimes, one or more may be left out
of the process. The four stages are as follows:

Concept design: - In this first stage there needs to be an adaptation and
amalgamation of current technical and theoretical advances in the area of interest. At
this stage we found, synthesized, used, applied the existing knowledge to identify gaps
or limitations of existing systems and develop a meaningful research objective. This
stage involves a substantial literature review although the time taken to get research
published probably means that the current state of the art is better gleaned from direct
communication with practitioners and other researchers in the field.

Developing a system architecture:- A good system architecture provides a road
map for the systems building process. It puts the system components into the correct
perspective, specifies the system functionalities, and defines the structure relationships
and dynamic interactions among system components. We identify the constraints given
by Disease control environments , we state the objectives of the development efforts,
and define the functionalities of the resulting system to achieve the stated objectives.
We state the problems in the problem statement parts we develop an architecture that is
able to solve the constraints mentioned in the statement of the problems. We engaged
in the creative and innovative design activity of architecture development also in model
and component definition.

Developing prototype: -Implementation of a prototype is used to demonstrate the
feasibility of the design and the usability of the functionalities of a system.Therefor for
this phase we have developed a prototype based on our model.The process of
implementing our prototype can provide us insights into the advantages and
disadvantages of our concept, model, and the chosen design alternatives. The
accumulated experiences and knowledge will be helpful in re-designing the our model
in improved manner.Empirical studies of the functionalities and the usability can only
performed after the system has been built, at least it major parts.

Observe and evaluate the prototype: -Once the prototype is built, we can test its
performance, usability and security as stated in the requirement definition phase, as
well as observe its impacts on individuals, groups, or organization that are engaged with
our domain area. Our evaluation results are to be interpreted based on the conceptual
framework and the requirements of our model defined at the earlier stages.
3.3 Developing Blockchain Model

Before developing a blockchain based model we have to make sure that if blockchain
technology solves the existing problem or not and we have to choose which blockchain
framework is the right solution to address the problems.We have reviewed eight
blockchain decision frameworks as illustrated in figure 3.2 below.

Figure 3.2: Blockchain decision frameworks

From the eight frameworks we choose IEEE spectrum’s IEEE blockchain decision
diagram (Peck, 2017). This diagram is a standardized, less complicated and easy for
the domain area decision makers to understand. In it have questions that our
respondents can quickly relate to and three precise out puts which are not less or also
not much(unwanted output) that can answer our question of blockchain applicability to
our research domain. The diagram enables us to walk through different considerations
that we need to take into account when we are planning to adopt blockchain
technology. These considerations question the satisfaction with using traditional
databases, the number of participants that actively interact with data, the level of trust
among participants, and the level of privacy and control needed over the data and
process.

Accordingly, to adopt blockchain technology to the disease early warning and
surveillance, IEEE blockchain decision questions and Deloitte fit assessment questions

Figure 3.3: IEEE Blockchain Decision Tree

needs to have positive response. Based on the above techniques decision of adopting
blockchain technology is conducted, problem area is identified, goal of our solution is
determined. We used these assessment questions for identification of problems in early
warning and surveillance further more use them to design the research questioners and
to gathers the professionals view in disease early warning and surveillance tasks. To
select the blockchain based model for a particular research problem IEEE blockchain
decision tree requires majority of the question to have positive answers.
3.4 Survey Study

Before the implementing of blockchain in the businesses or organization we should
decide (answering decision question) to evaluate whether a particular process or use

case is the right fit for a Blockchain based solution. We used a survey with following
blockchain assessment framework questions ( Peck, 2017). For a process or a use-case
to classify as Blockchain-fit, majority of the questions provided in the framework need
to be answered in the affirmative manner. As we can see from the framework, each of
the evaluation factors uncovers a pain point in the current state process, which could be
resolved by a feature of the Blockchain solution.

For this study purposive sampling was used for data collection which means that
the person who have better understanding on the overall early warning and surveillance
system was chosen.

To answer the decision tree question, we have given a brief introduction of the
concept of blockchain technology for 10 selected and decision maker employees and
epidemiologists in Amhara public health institute to clarify the questions in the
decision.

After carefully understanding each types of interview method semi-structure
interview method was selected for this study because it is most suitable considering the
nature of the subject. Semi-structured interviews give the researcher flexibility to
establish his/her own style of conversation depending on the direction of the interview.
This flexibility was important to obtain rich information systematically from the
interview about the subject. Interview questions were adopted from IEEE Blockchain
decision tree ( Peck, 2017).

Data collection was conducted between February 14/ 2021 to March 2/ 2021 and
responses were obtained from all selected informants. The objectives and concepts of
the study were briefly explained for respondents. Each informant was interviewed and
has filled questionnaire prepared by the researcher individually.

As shown in table below for the IEEE blockchain decision questions ,majority of
respondents have positive answers.
Here we can see the respondent’s response from the above table. On the average
82.85% of respondents have given positive answers. According to (Peck, 2017) after
deciding that blockchain is the good fit solution for our research problem, the challenges
that exists in the research domain should be studied to examine the current issues in
the diseases reporting, laboratory networking and surveillance data analysis that cause
inefficiencies which are namely inefficient data documentation, slow information flow,
increasing susceptibility to fraudulent attacks on vulnerable data ,challenges in ensuring
transparency, storage and time sensitivity issues.

No IEEE Blockchain decision tree question
to implement in Diseases Early warning
and surveillance (from 10 Amhara public
health institute workers(epidemiologists))

Yes No Positive
decision
(%)

1 Can a traditional paper-based method
meet your needs?

1 9 90

2 Does more than one participant need to be
able to update the data?

10 0 100

3 Does the data need to be kept private? 8 2 80
4 Do you and all those updaters trust one
another?

1 9 90

5 Is the database likely to be attacked or
censored? Do you need redundant copies
in multiple distributed computers?

7 3 70

6 Would all participants trust a third party? 7 3 70
7 Do you need to control who can make
changes to the blockchain software?

8 2 80

Table 3.1: Questionnaires Answers for IEEE Blockchain Decision Tree.

3.5 Blockchain Based Model Design for Disease Early
Warning and Surveillance

The early warning and surveillance of infectious diseases is a system that is crucial for
prevention and control of infectious illnesses, regular checking and readiness to
unusual surveillance signals to anticipate the spread of an epidemic. The key
technology of infectious disease monitoring and early warning based on blockchain
can concentrate the monitoring strengths of the government, medical institutions. Also,
real-time and steady early warning of infectious illnesses, and timely reporting of
unusual information can be done using the blockchain model. We design a model
which integrates the blockchain technology with our research domain area. In our
model we use Ethereum network which is an open-source network and currently one of
the largest public blockchain networks with an active community and a large public
Decentralized application (Dapp) repository. A program that run on the ethereum
network called smart contract is used which is a collection of code and data that resides
at a specific address on the Ethereum blockchain. In smart contract creation, three
steps are involved, which are compiling, writing, and deploying by using solidity
programming. The smart contract is compiled into byte code at the machine level
where each byte represents an operation and then uploaded to the blockchain as an
EVM (Ethereum virtual machine) transaction.

Figure 3.4: Ethereum Smart Contract Mechanism for Disease Early waning and
Surveillance

When we work with ethereum we are working with network of computers. In our
model this network is used to transfer information between different parties of the early
warning and surveillance and to store data, there are many different Ethereum
networks but there is one main ethereum network that every one uses for the
deployment of production applications. Our network is formed by interconnection of
many nodes in which the nodes are machines running an ethereum client. After setting
up the network any one can run a node, there are no special set of users who run nodes
on the ethereum network. Each node that we create or each node on our network has a
full and separate copy of the block chain.

A user can connect to the ethereum blockchain network and can make transaction.
In order to create a connection between a node and the ethereum network two
technologies are used. The first technology web3.js it is used by and is essentially
created for developers to talk to the network through code using a library called
web3.js. we used web3.js as sort of portal or window in to the ethereum network which
can enable us to send and receive transactions, to store data and to deploy contracts.
The second technology is called Metamask, it is an extension that can be installed on a
browser which facilitates the process of sending and receiving ethereum transactions.
It utilizes Infura, a scalable back-end infrastructure for building Dapps to send the
transactions to the ethereum blockchain.

Figure 3.5: How developers and end users interact with Ethereum network.

Our proposed model includes the tasks involved in infectious disease early warning
and surveillance which are reporting of infectious diseases cases, reporting of laboratory
results, report completeness check and analysis of reported surveillance data. Figure 3.5
illustrates our proposed blockchain based model.

Figure 3.6: The proposed blockchain based model for diseases early warning and
surveillance.

Below we discuss each part of the model in detail.

3.5.1 Design for disease reporting process

As we have discussed in the literature portion of this paper the diseases reporting
mechanism involve five health facilities namely community health post, woreda health
office, zone health office, regional health office and EHNRI/PHEM. This organizations
work in hierarchical manner during the reporting work flow. That being stated our
blockchain design for this work flow begins by creating a smart contract for each
organization involved in the reporting mechanism.

The first step is running and compiling the necessary code for the contracts which
enables them to perform the tasks of surveillance data reporting (functions) and
communication with other contracts, once this is done, we proceed to the deployment
of the contracts which hold compiled code and data in to the ethereum network. The
first contract to be deployed is the report generator contract which is responsible for
generating all the other report contracts and managing the generated report contracts
which are to be created by the five health organizations. After the deployment takes
place each health office can write surveillance report to the ethereum network also
health offices higher in the hierarchy can access reports created by the organizations
the that are below them in they hierarchy and can send feedback accordingly.
3.5.2 Design for Laboratory networks

Here the main objective is to achieve rapid identification of pathogens and their source
of infection and to have efficient and smooth information flow between perspective
laboratories. The current existing system encompasses laboratories at different levels,
the levels being woreda, zone, regional and national. In our model each of these
laboratories have their own smart contract. Once these smart contracts are deployed the
user can communicate with network using Metamask. The laboratories contracts in the
Ethereum network have hierarchical interaction. The transaction flow can be upward
(forward) reporting laboratory information to higher level laboratory or downward
(backward) offering feedback and follow-up information sharing.
3.5.3 Design for checking the completeness of a report

All woredas and levels above should calculate the completeness of the reports received
on weekly basis. A report is said to be complete if all the reporting units within its

Figure 3.7: Design for disease reporting process.

catchments area has submitted the reports on time. Here all levels of early warning and
surveillance offices need to perform the task of checking the completeness of a report.
For this purpose, all smart contracts of each level incorporate a function called report
completeness calculator to ensure that all required surveillance reports are generated on
time.
3.5.4 Design for Data analysis

Surveillance data analysis is classified in to three data analysis methods which are data
analysis by time, data analysis by place and data analysis by person. Data analysis by
time have variables which are day, week and month. These variables are extracted from
the reported data and analysis is done to produce the change in the number of cases and
deaths overtime.
Data analysis by place analyzes location data at different locations at different levels.
The variables of analysis are kebele, woreda and town. Here reported data is used for

Figure 3.8: Design for laboratory result report.

areal infection spread analysis.

Figure 3.9: Design for completeness of a report task.

Figure 3.11: Data analysis by place.

Figure 3.10: Data analysis by time.

Analysing data by a person uses the variables age, sex, ethnicity, and occupation
which are extracted from reported data. Then these variables are used to compare the
total number and proportion of suspected and confirmed cases of a particular infection.
Here a dedicated function in the smart contract of a particular reporting level is used to
perform the above comparing task.

Figure 3.12: Data analysis by person.

3.5.4.1 Measures of Morbidity

Incidence
Incidence proportion is the proportion of an initially disease-free population that
develops disease, becomes injured, or dies during a specified (usually limited) period of
time. Synonyms include attack rate, risk, probability of getting disease, and cumulative
incidence. Incidence proportion is a proportion because the persons in the numerator,
those who develop disease, are all included in the denominator (the entire population)
(SERVICES, 2012).

Figure 3.13: Incidence analysis.

Prevalence
Prevalence, sometimes referred to as prevalence rate, is the proportion of persons
in a population who have a particular disease or attribute at a specified point in time
or over a specified period of time. Prevalence differs from incidence in that prevalence
includes all cases, both new and preexisting, in the population at the specified time,
whereas incidence is limited to new cases only (SERVICES, 2012).

Figure 3.14: Prevalence analysis.
Chapter 4
Experiment
4.1 Introduction

In this chapter, we describe the prototype development environment and the details of
prototype operations. As a part of the description of the model prototype, the tasks of
issuing a case-based report, displaying list of recorded reports, display details of
recorded reports, marking of a report as a read report, request of a rework by the
supervisor, display of the reworks done, approval of the rework by the supervisor,
analysis of the recorded reports, issuing of a laboratory report and displaying of
laboratory report are illustrated along with their perspective screenshots.

Development environment

The prototype is developed on atom, a free and open-source content and source
code editor created by GitHub. Furthermore, in building the prototype different
constructs were used including IDE, different programing languages and libraries,
runtime environments, a package manager, a testing framework, a public API and a
browser extension. The development tools and methods are organized to provide the
prototype development with an organized interface and function with an appropriate
usable view. Specifically, our development environment encompasses the following
elements: -

    Atom editor: Open-source text and source code editor which enables users to
    install third-party packages and to customize the features and looks of the editor.
    Draw.io:Used to draw prototype designs and mockups.
    Metamask:A browser extension that allows users to interact with the ethereum
    network.
    Solidity:An object-oriented programming language for writing smart contracts.

    Remix editor:An open-source tool that which enables us to write and run solidity
    code from the browser.
    Node.js:A Java script run-time environment.
    Npm:A package manager.
    Ganache CLI: Customizable blockchain emulator.
    MOCA:JavaScript/Solidity test framework.
    Web3.js: A collection of libraries that allows us to interact with a remote
    ethereum using HTTP, IPC or web-socket.
    Infura API:A public API that gives us the ability to access a node that is hosted
    on the rinkeby network by infura.
    Truffle HD wallet provider: Used to sign transactions for address that are
    acquired from 12-word mnemonic.
    React: A front-end JavaScript library used for developing user interface
    components.
    Next.js:Is a framework that warps up react and built a bunch of functionalities
    around it like routing, server side rendering and hot module reload.
    Semantic UI:A front end frame work which is similar in its working ways with
    boots trap which is used for theming.

In the next section we present the system prototype which implements the model for
diseases early warning and surveillance.
4.2 Prototype

In this section we present our prototype that implements the proposed diseases early
warning and surveillance model. The prototype project folder contains five modules
which are a module for next.js components, a module for overlay components, a
module for Ethereum components, a module for node components, a module for react
pages and a module for test components.

Inside our prototype project folder there is a folder containing all the ethereum
logic. Inside this folder among other files there is a script file created for compiling our
smart contract which is written using the solidity programming language.

The compilation of the source code for the prototype is done using our custom-made
compile script. The protype have single smart contract file, but inside this smart contract
file we have two separate contracts. When we feed this contract to the solidity compiler,
two separate Jason files are generated which contain the generated compiled byte code
of the two contracts inside our main smart contract file. This output files are saved to
our build directory.

Figure 4.1: The compilation process.

After compiling the contract file, we need to deploy it to the blockchain network. To
facilitate the deployment a web3 instance is used alongside with a provider component
which tells the web3 instance to communicate with a particular blockchain network.
The provider needs to have an associated ethereum account that is going to be used for
the deployment. This account has mnemonic which is used to unlock the account. In
order to deploy our contract to the Rinkeby ethereum network we need to have a node

to connect to for the deployment process. For this purpose, Infura, a public API that
gives us the ability to get access to a node that is hosted on the Rinkeby network by
Infura. Here in order for allowing a connection between the web3 instance and the API
a module called Truffle HD wallet provider is used.

Figure 4.2: Deployment process.

In order to execute the logic illustrated in the diagram above, we need to make a
new script called deploy. In the script we setup the HD wallet provider with a constant
variable which simultaneously specify which account we want to unlock and what
outside API we want to connect to. This constant variable hold the HD wallet provider
instance with two separate arguments. The first argument is our account mnemonic and
the second argument is the Infura API rinkeby network. Next, we pass over our
provider variable to the web 3 constructor giving us an instance of web3 which is
completely enabled for the rinkeby network. then a function called deployed is called it
is a function used for two main purposes the first purpose is to get the list of accounts
that we have an access and the second purposes is for the deployment of the compiled
contract.

Figure 4.3: Code for deployment.

4.2.1 Creating a case-based report

Creating a report requires creation of two smart contracts. The first contract has the
role of creating a report instance. It contains the address of the report creator and the
report details as parameters. The second contract has a management role. It manages
all the different instance reports that are eventually deployed to the rinkeby network
and is called report factory this name is attributed to it because its main purpose is
to deploying new instances of reports. Deployment of the instances is executed by
creating and deploying instances of the first contract, Report, as illustrated in figure 4.4.
When the user clicks the create button the system’s web3 instance and Metamask send
a transaction to the report factory then the report factory will deploy a new copy of the
report. The report factory is also used to store address of all the different reports that
have been deployed. In addition, the report factory has also a responsibility of managing
all the report instances that have been deployed by keeping a record of what instances
of the report contract have been deployed.

Figure 4.4: Code for creating the contracts.

The report factory is deployed to the rinkeby blockchain network. This is going
to be a onetime deployment because we are going to have one factory that is going to
be in charge of all the different instances of the report contract. The deployed factory
contract itself is going to contain all the source code for an individual contract because
it has clean unspoiled version of the compiled report contract source code which means
that there is absolutely no chance of someone getting into the sources code and rewriting

the contract or modifying it.

Figure 4.5: Deploying a report.

As shown in the figure – when a case reporter wants to create a report , he sends a
transaction to the report factory then the report factory will create a new instance of the
report contract and deploy it to the rinkeby blockchain with a new address. The report
factory then take that address to record and store it with in itself implying that the report
factory always has list of all the different reports that have been deployed.

Figure 4.6: Report creating scenario.

4.2.2 Displaying list of reported cases

In order to display the cases that have been reported that have been created and
deployed to the blockchain network. We first imported and configured web3 because
when anytime there is a need of to access some data from the ethereum blockchain
network we need to make a use of the web3. After creating a connection to the
ethereum blockchain network the deployed report factory instance is used to retrieve a
list of created reports. Next, we use react and next.js to display the list of reports on the
display page.

Figure 4.7: Figure illustrating the display of the list of reports.

4.2.3 Displaying the details of each report

After getting the list of reports that have been created, in order to display details of a
single report we make use of a function in our contract which returns the summary of
each report that have been recorded. Here a JavaScript file is created and imported for
having access to the reports that have been created and deployed which returns the
address of each report. When a user clicks the view report link under each retrieved
report, a page with all the details of that particular report is displayed.

Figure 4.8: Figure illustrating the display of each of the reports.

4.2.4 Marking a report as read

A supervisor of a case worker marks a report as read. This action of marking a report
as read will mark a particular report as read by the supervisor and also gives the
supervisor the ability to request rework of the report. When a user clicks the mark as
read button the report is marked as read, the supervisor is given the privilege of
requiring a rework request and the number of supervisors that have read the report is
updated.

Figure 4.9: Marking the of a report as read.
4.2.5 Requesting rework of a report

When a supervisor finds a report inaccurate or erroneous, he can request a rework of the
report. When the supervisor clicks the request rework button a page with a list all the
rework requests with a button to add a new request is displayed. Next the supervisor
clicks the add request button which displays a page for recording rework description.
After writing the rework description the rework request button is clicked which then
displays a list of rework request.

Figure 4.10: Scenario for a rework request.
4.2.6 Analysis of the recorded reports

The analysis of reported cases is done in terms of time period, location and personal
attributes. The analysis based on time presents weekly analysis of the reported cases.
The analysis based on the location presents the analysis of cases reported in terms of
the location of the cases that are being reported and analysis based on personal attribute
display analysis of cases based on age and gender.

Figure 4.11: Surveillance data analysis scenarios.

4.2.7 Reporting Laboratory Results

A laboratory result is reported by a laboratory technician operating in any designated
laboratory. When the laboratory technician presses the record a lab report link a form
for recording a laboratory result is displayed. After filling in the form the lab technician
then presses the create button consequently a page a list of all the reported lab results
will be displayed.

Figure 4.12: Scenario for Laboratory result report.
Chapter 5
Evaluation
5.1 Introduction

Security is one of the major problems observed in diseases early warning and
surveillance. Manual surveillance information exchange, use of unsecured generic
software and use of outdated technology make the diseases surveillance data insecure
and prone to cyber-attacks. Our proposed model designs a secure way of data
accusation and data retrieval by using cryptographic and immutable ethereum
transactions.Thus, if a hacker wants to falsify or modify a surveillance data, he needs to
modify the majority of the nodes in the ethereum network hosting our surveillance data
which is impossible. In addition, our smart contract design enables secure deployment
of surveillance data to the ethereum network. Another challenge in the diseases earl
warning and surveillance is data and process centralization. Surveillance data is
reported and stored in centralized manner at national level. To address this challenge
our proposed model utilizes the high decentralization feature of the blockchain
technology. In our model all surveillance data transactions are recorded in a shared and
decentralized ethereum network. Hence a copy of our network is present in every node.
Furthermore, our network uses a consensus algorithm called Proof of authority which
allows our decentralized ethereum blockchain to agree on the order of transaction
execution ensuring that our system is hard to manipulate and attack. Traceability is
another problem that exists in our research domain. Our proposed model addresses this
problem by storing surveillance data in the ethereum network which is composed of
chain of blocks where each block (batch of surveillance data transaction) is linked to
the previous block with the hash of the previous block, this enables an authorized user
to audit the history of all transactions.This chapter consists of there major parts which
are performance evaluation,usability evaluation and security evaluation.
5.2 Performance evaluation

The performance of our prototype is evaluated through block generation time.For this
evaluation 10 experiments are conducted back to back in which each experiment tests
the block generation time for 12 blocks.To avoid rolling back of Ethereum Blockchain
states, we continuously measure the time durations of generating 12 consecutive blocks
(Zhang et al., 2020).
5.2.1 Evaluation based on block generation time

Steps for evaluation based on block generation time:

Operation 1: - User node sends a transaction to check number of blocks N (i.e.,
total number of blocks that are confirmed at the starting time) of the ethereum network
and record it as current time point tN.

Operation 2: - The user node repeatedly queries the current time’s tnblock number
n up until the total number of confirmed blocks has incrementally increased to 12.

Operation 3: - When the total number of blocks is changed or incremented, e.g.,
n=N+1, the time span between generating two concurrent blocks is calculated and
recorded by the user node. i.e., tn- tN. After that the block number N is updated using
the change in the block number (n) and the current time point (tn) using time when the
change in the block number is detected. i.e each blocks bock generation time is
measured.

Operation 4: - If block number (N) have not changed go to operation 2.

E1 E2 E3 E4 E5 E6 E7 E8 E9 E10
B1 12 12 14 14 114 12 13 13 12 14
B2 14 13 14 13 14 12 13 14 13 12
B3 14 12 12 12 13 13 14 14 12 12
B4 13 13 12 13 12 13 12 13 14 12
B5 13 12 12 13 14 14 14 12 14 13
B6 13 13 13 12 12 13 12 12 14 14
B7 13 12 12 12 13 12 14 12 13 13
B8 12 12 13 13 14 13 13 13 12 14
B9 12 12 14 12 14 12 12 13 12 13
B10 13 12 12 12 13 13 12 14 12 12
B11 13 13 13 12 14 14 13 13 13 14
B12 12 13 14 14 13 14 13 12 12 13

Table 5.1: Time of generating 12 blocks,E: Experiment ; B: Block.

Figure 5.1: Bar plot of the Block generation experiment.

Table 5.1 and figure 5.1 shows the time to produce total of 12 blocks which is 180
second and 12 to 14 seconds to produce each bock, this time span of block generation

is a fast and a stable block generation time. Our model uses proof of authority (POA)
consensus algorithm. The POA consensus algorithm prevents wasting computational
resources which leads the resulting stable transaction time.
5.3 Usability Evaluation

To conduct our useability evaluation, we used the software usability measurement
Inventory (SUMI), an internationally standardized usability evaluation tool which is
only commercially available. But by continuous communication with the SMUI office
and with the support letter from the BIT computing faculty we were able to acquire an
academic license to use the tool.
SMUI uses six scales which were verified and extracted by a careful and through
statistical process called factor analysis. These six scales are efficiency, affect,
helpfulness, control, learnability, and global usability. It is currently available in twelve
languages. The result of this tool have been proven as reliable as well as flexible and
these result’s discriminate between various types of software systems in a valid manner
(Bevan, 1995). To use SMUI in effective manner at least 10 users(evaluators) are
recommended.(Erik & Cisa, 2016) The tool can be used on a working version of a
software system, a test release or a prototype(van Veenendaal, 2016).
Twenty-six participants were identified from amhara public health institute. Form
the total twenty-six, thirteen were field epidemiologists, seven were public health
workers and the remaining six were laboratory technicians. They were given a brief
introduction the research topic also a general description about the prototype was
given. After this introduction session the participants were instructed to interact with
the prototype for fifteen to twenty minutes. After the interaction with the prototype the
users were instructed to complete the SUMI Questionnaire.After the user evaluation
was finished we contacted the SUMI office for the evaluation report and the evaluation
result was generated and sent to us with in four days.

Figure 5.2: Summary Statistics for the SUMI.

Figure 5.2 show statistical summary for the SUMI evaluation.The SUMI scales are
statistically adjusted so that the population mean in SUMI database is 50, and the
standard deviation is 10, what is known as a 50/10 distribution.Our sample data can be
above or below the population mean, depending on how our respondents have rated our
prototype. The range of SUMI scores goes from 73 to 10 and each scale is computed
by a process of weighting and averaging of SUMI items. As shown in the statistical
summary our prototype has received high evaluation scores for all the SUMI evaluation
scales.

Figure 5.3: Graphical summary showing Mean with 95% CIs(Confidence Interval) of
the SUMI evaluation.

Figure 5.3 shows a graph that summarises each of our SUMI evaluation scale mean
with 95 % CIs(Confidence Interval). Here, if the value for a scale is above the SUMI
scale value of 50 (i.e. better than the reference database) then the graph bar will take
on a green color.If it’s below the 50 mark, then the bar is shown in red.And as shown in
figure 5.3 our evaluation shows that all of the evaluation scales are above the 50 point
mark line implying that our prototype has tested positive for all the evaluation scales.
In addition the black vertical staples on the bars shows the range of the 95%
confidence interval of the means.This CIs is a statstical concept whch can be described
in the following way : -
If the same exact survey is repeated ,

    On the same population of participants(with arbitrary selection).
    With the same sample size.
    With identical conditions.
    For unlimited number of times.
    With standard conditions.

then the staples show where the mean of the samples would fall 95% of the time. In
practice what the 95% confidence interval tells us is the range of variation in our sample.
If the 50 point mark is NOT within the confidence interval, we can be reasonably sure
that the SUMI value for that scale is well above (or below) the population mean - to
the conventional level of 95% sure.Therefor the figure above shows that the CIs for our
evaluation is well above the 50 point mark implying that our prototype is has a high
confidence interval score.

Figure 5.4: Graphical summary showing Median Boxplots of the SUMI evaluation.

Figure 5.4 shows a graph illustrating Medians (sometimes called the 50th
percentile) and the Quartiles (sometime called the 25th and 75th percentiles) as the
boundaries of the boxes. Percentiles are computed on actual data so the relationship
between the Medians and Quartiles is rarely symmetric. The staples (or Whiskers) on

this graph show where 95the obtained data actually falls away from the
Median.Moreover the Whiskers in this graph are very useful in that they also allow us
to see where data that may be outlying (ie, beyond the 95% expectation) falls. These
are displayed as red dots and ”far outliers” as big red dots.
5.3.1 Summary

This usability evaluation was a standard measure of our models conformity with the six
SUMI standard usability measure scales which are efficiency
,effect,helpfulness,control,learn-ability and global-usability.After the SUMI evaluation
was conducted with twenty six participants. Then The evaluations results was
presented using a statistical summary table and graphical interpretation.
5.4 Security Evaluation

In this section we discuss the security analysis we conducted on the proposed blockchain
based model and prototype for diseases early warning and surveillance by using multiple
attacks scenarios. We have prepared threat model to describe the vulnerabilities related
with diseases early warning system and we have conducted a risk assessment to analyze
the ability and extent of our proposed model to address the vulnerabilities and mitigate
the risks.
5.4.1 Threat model

For our security analysis we have defined a threat model which is composed of assets,
threats, vulnerabilities and attackers that can strike harm to a diseases early warning and
surveillance systems.

5.4.1.1 Assets

Assets are what the users of our model have to lose in the event of compromised security.
The asset. The asset considered in our thereat model is the diseases surveillance data,
a data collected and analyzed in large volumes originating from different sources in the
public health sector.

5.4.1.2 Threats

Threat can occur when the surveillance data is being exposed, altered or halted from
reaching specific target. Different motivation of the attackers can cause these threats
in different attack scenarios, this threat may target to sabotage the surveillance data
transactions or to get illegal access of information from surveillance data.

5.4.1.3 Attacks

Here below we discuss different types of attacks that can harm our model. These attacks
vary in their nature and severity in threatening our asset that we have discussed in the
previous section.

    Man In The Middle Attack
    These types of attacks happen when a communication between different users of
    our model is intercepted by an attacker which can even give the attacker an
    opportunity to modify the data being sent. In these types of attacks the attacker
    can send corrupt data that can potentially hinder the timely communication of
    the surveillance data.Our proposed model does well to prevent man in the middle
    attacks by using a decentralized ledger to manage identities and maintain hashes
    of the surveillance data being sent or received, as opposed to the traditional
    centralized systems.
    - Evaluation of Man in the middle attack mitigation

Mitigating Man in the middle attack on compromised model blockchain address:

    The main aim of the man in the middle attack is to obtain certificate of
    authority to give the attacker forged public keys. If user blockchain address
    becomes compromised, an adversary can utilize the compromised blockchain to
    access the encrypted negotiations which signals the messages that are being sent
    over the blockchain network. In our model for each user relationships, the user
    address and the blockchain keys serve as multi factor authentication. This
    authentication information is distributed over our models’ participating nodes
    which have links to the previous and the following blocks. Therefor if a user
    address is compromised, any data transaction to another user will not have the
    starting transaction log or the corrupt data that is sent to another user will not
    match the data hash stored in the blockchain network in addition in our
    blockchain based model the single point of failure is distributed which implies
    that shutting the system down based on a single point failure is extremely hard.

    Denial Of Service(DOS) Attack
    In this type of attack lots and lots of false requests are sent to a target with the aim
    of overwhelming it and making it unavailable .This type of attacks are usually
    performed using a network of distributed infected end points(Mirkovic & Reiher,
    2004).If a diseases early warning and surveillance encounters a successful DOS
    attack it may face serous damages, the attack prevents a timely detection of a

diseases outbreak which may lead to irreversible consequences. The DOS attack
is often carried out by an adversary with small computational capability. In our
proposed model, an adversary may launch DOS attack on our blockchain network
and the diseases early warning and surveillance system.

    Evaluation of Mitigating DOS attack on diseases early warning and
    surveillance blockchain network:
    The ethereum blockchain network used by our proposed model is a
    distributed system with tokenized cost for transaction signing and there is
    only limited supply of this token which prevents a possible DOS attack on
    our model. Thus the total computing capacity available in the consortium
    will make a successful DOS attack attempt an impossible task to
    accomplish this way any mischievous attempt is easily detected and our
    model is protected and safeguarded from a DOS flood of transactions.
    Mitigating DOS attack on diseases early warning and surveillance
    model: The agreement of the volume of data to be sent requires a
    negotiation stage before sending it out. If a system assigned address is
    compromised an attacker may try to flood the data stream. When a and if
    this this happens a data volume agreement is checked and needed to be met
    before the agreed time is up. If the data volume agreement is not meet, an
    attack attempt is detected and mitigated by replacing the compromised
    system address and resetting the stream.

    Traffic Analysis Attack

This type of attack is a subset of the man in the middle attack. The attacks
functions by sniffing and inspecting the surveillance data traffic which gives an
insight to how a certain surveillance task is going.

    Sniffing data transfer parameters:Let us assume an entity on a remote
    blockchain xn(a node on the blockchain) which acts as an adversary has an
    interest of getting access to the surveillance information stored in a smart
    contract of a report. This information includes an outbreak case full
    surveillance data and is encrypted with krp (public key), thus the
    information can only be decrypted with krs(private key). As a result the
    attacker not be able to get access to the surveillance information stored in
    our model blockchain network.

5.4.2 Summary

In conclusion, our proposed model gives a high degree of safety for surveillance data
by protecting its privacy and integrity. This protection proves to be a substantial
improvement than putting trust on a centralized system to handle our diseases
surveillance data. As a future work additional security enhancing work can be done to
put an adversary in check. This future works should include blockchain address
De-anonymization and deep blockchain network analysis.
Chapter 6
Conclusion and Future work
6.1 Conclusion

This research identifies the block chain technology as good solution for the limitations
observed in the diseases early warning and surveillance. The blockchain technology
offers features that are highly desired by our research domain which are immutability,
trace-ability, decentralization and enhanced security. We conducted a thorough review
of important literature and also have conducted domain area study.in addition we also
have reviewed different application of the blockchain technology in supply chain,
security and financial sector which we utilized to build up our study. After this through
studies we identified the limitations of the current working ways of the diseases early
warning and surveillance which are manual procedures, data and process
centralization, data security problems and data trace-ability problems.

Our research provides a solution to our research problem by designing a blockchain
based model for diseases early warning and surveillance and also developed an
ethereum prototype based on the model. The proposed model integrates the blockchain
technology with the tasks involved in disease early warning and surveillance which are
case report, laboratory result report, checking completeness of a report and analysis of
reported surveillance data. Then based on the model a prototype is developed using the
ethereum platform.

Our proposed model alleviates the problems and limitations observed in our
research domain by integrating the above-mentioned desirable features of the
blockchain technology. Furthermore, our evaluation study has verified that our model
is a distributed, secure, immutable and traceable solution to the research problem that
we have studied.
6.2 Future work

Our research presents a blockchain based model and prototype for disease early warning
and surveillance. This research can be expanded by:

    Including the processes that follow the diseases early warning and surveillance
    processes which are public health emergency response and recovery from public
    health emergency that can benefited from the desirable properties blockchain
    technology.
    Our prototype can be improved by implementing prevalence proportion and
    incidence rate functions.
    In addition, our prototype can be upgraded to a full operational system.
    Furthermore, during our platform selection, we had compared just three popular
    platforms additional platforms can be considered and studied to be used as a
    platform of choice for the study.
    Our model can be enhanced by integrating machine learning and AI technologies
    to our blockchain based model.
    A full mobile app version of the prototype can be developed to make the model
    cross platform.
    Lastly additional evaluation of the model can be conducted by comparing it with
    a similar blockchain based system.

Chapter 7
References

Al., X. et. (2017). Enrico Benassi. Annali Di Radiologia Diagnostica, 43(6),
401–403.

Bevan, N. (1995). Measuring usability as quality of use. Software Quality Journal,
4(2), 115–130. https://doi.org/10.1007/BF00402715.

Binns, C., & Low, W. Y. (2015). What is public health? Asia-Pacific Journal of
Public Health, 27(1), 5–6. https://doi.org/10.1177/1010539514565740’

Bollig, N., Clarke, L., Elsmo, E., & Craven, M. (2020). Machine learning for
syndromic surveillance using veterinary necropsy reports. PLoS ONE, 15(2), 1–19.
https://doi.org/10.1371/journal.pone.0228105.

Buterin, V. (2020). Ethereum Whitepaper — Ethereum.org. Ethereum.Org.

Core, M. G., Lane, H. C., Van Lent, M., Gomboc, D., Solomon, S., & Rosenberg,
M. (2012). Building explainable artificial intelligence systems. Proceedings of the
National Conference on Artificial Intelligence, 2, 1766–1773.

Clinical, F., & Laboratories, P. H. (2008). Laboratory Accreditation Checklist For
Clinical and Public Health Laboratories. 2007(December 2009).

Deloitte. (2017). BLOCKCHAIN FIT ASSESSEMENT FRAMEWORK. Deloitte
ToucheTohmatsu.https://www2.deloitte.com/content/dam/Deloitte/in/Documents/industries/in-
convergence-blockchain-fitment-noexp.pdf

EPHI. (2016). Public Health Emergency Management. 2012, 1–140.

Ethiopian Health and Nutrition Reaserch Institute, E. (2011). Guideline on
CHOLERA OUTBREAK MANAGEMENT Ethiopia Ethiopian Health and Nutrition
Research Institute Federal Democratic Republic of Ethiopia. Ephi Guidelines, 2.

Erik, D., & Cisa, P. W. M. V. V. (2016). Questionnaire based usability testing.
Conference Proceedings European Software Quality Week, Brussels, November, 1–9.

Finlayson, S. G., Bowers, J. D., Ito, J., Zittrain, J. L., Beam, A. L., & Kohane, I. S.
(2019). Adversarial attacks on medical machine learning. Science, 363(6433),
1287–1289. https://doi.org/10.1126/science.aaw4399.

Griggs, K. N., Ossipova, O., Kohlios, C. P., Baccarini, A. N., Howson, E. A., &
Hayajneh, T. (2018). Healthcare Blockchain System Using Smart Contracts for Secure
Automated Remote Patient Monitoring. Journal of Medical Systems.
https://doi.org/10.1007/s10916-018-0982-x.

Harvey, D., Valkenburg, W., & Amara, A. (2021). Predicting malaria epidemics in
Burkina Faso with machine learning. PLoS ONE, 16(6 June), 1–16.
https://doi.org/10.1371/journal.pone.0253302.

Hunhevicz, J. J., & Hall, D. M. (2019). Managing mistrust in construction using
DLT: a review of use-case categories for technical decisions. Proceedings of the 2019
European Conference on Computing in Construction, 1, 100–109.
https://doi.org/10.35490/ec3.2019.171.

Jiang, T., Fang, H., & Wang, H. (2019). Blockchain-Based Internet of Vehicles:
Distributed Network Architecture and Performance Analysis. IEEE Internet of Things
Journal, 6(3), 4640–4649. https://doi.org/10.1109/JIOT.2018.2874398.

Kelly, C. J., Karthikesalingam, A., Suleyman, M., Corrado, G., & King, D. (2019).
Key challenges for delivering clinical impact with artificial intelligence. In BMC
Medicine. https://doi.org/10.1186/s12916-019-1426-2.

Li, J., Greenwood, D., & Kassem, M. (2019). Blockchain in the built environment
and construction industry: A systematic review, conceptual models and practical use
cases. Automation in Construction, 102, 288–307.
https://doi.org/10.1016/j.autcon.2019.02.005.

Manav Gupta. (2017). Blockchain for Dummies, IBM Limited Edition. In For
Dummies.

Mirkovic, J., & Reiher, P. (2004). A taxonomy of DDoS attack and DDoS defense
mechanisms. ACM SIGCOMM Computer Communication Review, 34(2), 39–53.
https://doi.org/10.1145/997150.997156

Mulligan, C., Scott, J. Z., Warren, S., & Rangaswami, J. (2018). Blockchain
Beyond the Hype A Practical Framework for Business Leaders. World Economic
Forum, April, 1–7.

Nunamaker, J. F., Chen, M., & Purdin, T. D. M. (1990). Systems Development in
Information Systems Research. Journal of Management Information Systems, 7(3),
89–106. https://doi.org/10.1080/07421222.1990.11517898.

Omar, A. Al, Bhuiyan, M. Z. A., Basu, A., Kiyomoto, S., & Rahman, M. S. (2019).
Privacy-friendly platform for healthcare data in cloud based on blockchain
environment. Future Generation Computer Systems, 95.
https://doi.org/10.1016/j.future.2018.12.044.

Patel, V. (2019). A framework for secure and decentralized sharing of medical
imaging data via blockchain consensus. Health Informatics Journal.
https://doi.org/10.1177/1460458218769699.

Pawczuk, L., Wiedmann, P., & Simpson, L. (2020). The benefits of coopetition in
blockchain. Deloitte. https://www2.deloitte.com/us/en/pages/consulting/articles/the-
benefits-of-coopetition-in-blockchain-consortia.html.

Peck, M. E. (2017). Blockchain world - Do you need a blockchain? This chart will
tell you if the technology can solve your problem. IEEE Spectrum, 54(10), 38–60.
https://doi.org/10.1109/MSPEC.2017.8048838.

Perera, S., Leymann, F., & Fremantle, P. (2019). A use case centric survey of
Blockchain: status quo and future directions.
PeerJ.https://doi.org/10.7287/peerj.preprints.27529.

Quaini, T., Roehrs, A., da Costa, C. A., & da Rosa Righi, R. (2018). A MODEL
FOR BLOCKCHAIN-BASED DISTRIBUTED ELECTRONIC HEALTH RECORDS.
IADIS INTERNATIONAL JOURNAL ON WWW/INTERNET.

https://doi.org/10.33965/ijwi 2018161205

Rankhambe, B. P., & Kaur Khanuja, H. (2019). A Comparative Analysis of
Blockchain Platforms – Bitcoin and Ethereum. 2019 5th International Conference On
Computing, Communication, Control And Automation (ICCUBEA),
1–7.https://doi.org/10.1109/ICCUBEA47591.2019.9129332.

Rubio-Solis, A., Massoni, T., Musah, A., Birjovanu, G., Dos Santos, W. P., &
Kostkova, P. (2019). Zika virus: Prediction of Aedes Mosquito Larvae Occurrence in
Recife (Brazil) using online extreme learning machine and neural networks. ACM
International Conference Proceeding Series.https://doi.org/10.1145/3357729.3357738.

Sargsyan, G., Castellon, N., Binnendijk, R., & Cozijnsen, P. (2019). Blockchain
Security by Design Framework for Trust and Adoption in IoT Environment. 2019
IEEE World Congress on Services (SERVICES), 15–20.
https://doi.org/10.1109/SERVICES.2019.00018.

Seitz, J. (2017). Blockchain technology in e-health: The case of electronic
prescriptions in Germany. 156–159.

SERVICES, U. S. D. O. H. A. H. (2012). Principles of Epidemiology in Public
Health Practice ,Third Edition An Introduction to Applied Epidemiology and
Biostatistics. In Centers for Disease Control and Prevention (CDC) (Issue October
2006). https://doi.org/10.1201/9781315381848.

Tikhomirov, S. (2018). Ethereum: State of Knowledge and Research Perspectives
(pp. 206–221).https://doi.org/10.1007/978-3-319-75650-914.

Turk, Z., & Klinc, R. (2017).ˇ Potentials of Blockchain Technology for
Construction Management. Procedia Engineering, 196, 638–645.
https://doi.org/10.1016/J.PROENG.2017.08.052.

van Veenendaal, E. (2016). Low-Cost Usability Testing. In Software Quality and
Software Testing in Internet Times (pp. 153–164). Springer Berlin Heidelberg.
https://doi.org/10.1007/978-3-642-56333-110.

Vujicic, D., Jagodic, D., & Randic, S. (2018). Blockchain technology, bitcoin, and
Ethereum: A brief overview. 2018 17th International Symposium
INFOTEH-JAHORINA (INFOTEH), 1–6.

https://doi.org/10.1109/INFOTEH.2018.8345547.

Wessling, F., Ehmke, C., Hesenius, M., & Gruhn, V. (2018). How much blockchain
do you need?Towards a Concept for Building Hybrid DApp Architectures.
Proceedings of the 1st International Workshop on Emerging Trends in Software
Engineering for Blockchain, 44–47. https://doi.org/10.1145/3194113.3194121.

Winslow, C.E. A. (1920). The Untilled Fields of Public Health Author: C.E.A.
Winslow Published by: American Association for the Advancement of Science Stable
URL: http://www.jstor.org/stable/1645011. Science, 51(1306), 23–33.

Wust, K., & Gervais, A. (2017). Do you need a Blockchain? IACR Cryptology ̈
EPrint Archive, i, 375. https://eprint.iacr.org/2017/375.pdf.

Yaga, D., Mell, P., Roby, N., & Scarfone, K. (2018). Blockchain technology
overview. https://doi.org/10.6028/NIST.IR.8202.

Zhang, L., Lee, B., Ye, Y., & Qiao, Y. (2020). Ethereum Transaction Performance
Evaluation Using Test Nets. Lecture Notes in Computer Science (Including Subseries
Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics), 11997
LNCS(May), 179–190. https://doi.org/10.1007/978-3-030-48340-114.

Zhang, P., White, J., Schmidt, D. C., Lenz, G., & Rosenbloom, S. T. (2018).
FHIRChain: Applying Blockchain to Securely and Scalably Share Clinical Data.
Computational and Structural Biotechnology Journal.
https://doi.org/10.1016/j.csbj.2018.07.004.

Zhang, S., & Lee, J. H. (2020). Analysis of the main consensus protocols of
blockchain. ICT Express, 6(2), 93–97. https://doi.org/10.1016/j.icte.2019.08.001.
Chapter 8
Appendices

Appendix A: Questionnaire for deciding if blockchain technology is appropriate
problem solution for our research domain.
Dear: - Respondent

This questionnaire is prepared to decide if block chain technology is an appropriate
technology to be integrate to the disease early warning and surveillance tasks. Please
do fill all parts of the questionnaire carefully. The questionnaire should entirely be
completed by only you.

Indicate (tick) your level of agreement on yes or no boxes with the following
statements that uses to ascertain blockchain is the right solution to integrate to diseases
early warning and surveillance tasks.

This is a offline tool, your data stays locally and is not send to any server!

Feedback & Bug Reports