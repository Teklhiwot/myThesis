# Thesis-to-Journal Transformation Blueprint

**Source:** *Blockchain Based Model and Prototype for Disease Early Warning and Surveillance* — Teklhiwot Mekonen, MSc Thesis, Bahir Dar Institute of Technology, 2022

**Target:** Wiley NJD journal article, AMA reference style

---

## 1. Thesis-to-Journal Mapping

| Thesis Section | Keep | Delete | Merge | Rewrite Later | Reason |
|---|:---:|:---:|:---:|:---:|---|
| Title pages (×2) | | ✓ | | | University boilerplate |
| Declaration | | ✓ | | | Prohibited in journal |
| Copyright notice | | ✓ | | | Publisher handles |
| Acknowledgment (personal) | | ✓ | | | Replace with standard journal Acknowledgments |
| Abstract | ✓ | | | ✓ | Retain content; restructure as single journal paragraph |
| Table of Contents | | ✓ | | | Not used in journal articles |
| List of Figures | | ✓ | | | Not used in journal articles |
| List of Tables | | ✓ | | | Not used in journal articles |
| List of Abbreviations (standalone page) | | ✓ | | | Move to first-use + opening footnote |
| Ch.1 Background (§1.1) | | | ✓ | ✓ | Merge into Introduction; strip blockchain primer |
| Ch.1 Problem Statement (§1.2) | ✓ | | | ✓ | Core; sharpen to 2 paragraphs |
| Ch.1 Objectives (§1.3) | | | ✓ | ✓ | Compress to aims statement within Introduction |
| Ch.1 Scope (§1.4) | | | ✓ | ✓ | Fold into Methodology limitations clause |
| Ch.1 Significance (§1.5) | | | ✓ | ✓ | Recast as explicit research contributions list |
| Ch.2 Intro paragraph (§2.1) | | ✓ | | | Chapter-linking prose; not used in journal |
| Ch.2 Blockchain Concepts (§2.2) | | | ✓ | ✓ | Merge §2.2–2.4 into 3–4 sentences of background |
| Ch.2 Types of Blockchain (§2.3) | | | ✓ | ✓ | Merge into condensed background paragraph |
| Ch.2 Blockchain Characteristics (§2.4) | | | ✓ | ✓ | Merge into condensed background paragraph |
| Ch.2 Platform Selection (§2.5) | ✓ | | | ✓ | Keep justification + Table 2.1; remove internals |
| Ch.2 Ethereum Philosophy (§2.5.1.1) | | ✓ | | | Verbatim Ethereum whitepaper; not original |
| Ch.2 Ethereum Accounts (§2.5.1.2) | | ✓ | | | Textbook internals; not relevant to model |
| Ch.2 Messages & Transactions (§2.5.1.3) | | ✓ | | | Textbook internals; not relevant to model |
| Ch.2 Disease EWS in Ethiopia (§2.6.1–2.6.10) | | | ✓ | ✓ | Heavy domain primer; condense to 2–3 paragraphs |
| Ch.2 Related Works (§2.7) | ✓ | | | ✓ | Essential; restructure as critical comparative review |
| Ch.3 Research Design (§3.1–3.2) | ✓ | | | ✓ | Keep SDRM justification; condense |
| Ch.3 Blockchain Decision Framework (§3.3) | ✓ | | | ✓ | Keep as part of Methodology; condense |
| Ch.3 Survey Study (§3.4) | ✓ | | | ✓ | Keep Table 3.1 and rationale; trim narrative |
| Ch.3 Model Design (§3.5–3.5.4) | ✓ | | | ✓ | Core contribution; keep all sub-designs |
| Ch.4 Dev Environment intro (§4.1) | | | ✓ | ✓ | Condense tool list to single paragraph |
| Ch.4 Prototype sub-sections (§4.2.1–4.2.7) | ✓ | | | ✓ | Keep screenshots; cut verbose step-by-step narration |
| Ch.5 Performance Evaluation (§5.2) | ✓ | | | ✓ | Core result; keep Table 5.1 + figure |
| Ch.5 Usability Evaluation (§5.3) | ✓ | | | ✓ | Core result; keep SUMI figures; trim tool description |
| Ch.5 Security Evaluation (§5.4) | ✓ | | | ✓ | Core result; keep threat model and mitigations |
| Ch.6 Conclusion (§6.1) | ✓ | | | ✓ | Keep; restructure as journal Conclusion |
| Ch.6 Future Work (§6.2) | ✓ | | | ✓ | Compress to 4–5 bullets within Conclusion section |
| Ch.7 References | ✓ | | | ✓ | Keep all; reformat to AMA style |
| Ch.8 Appendix A (Questionnaire) | | ✓ | | | Raw survey instrument; not required in article |

---

## 2. Target Journal Structure

Exact section order for the final journal paper:

1. **Abstract** (single paragraph, 200–250 words)
2. **Introduction**
3. **Background and Related Work**
4. **Research Methodology**
5. **Proposed Blockchain-Based Model for Disease Early Warning and Surveillance**
6. **Prototype Implementation**
7. **Evaluation**
   - 7.1 Performance Evaluation
   - 7.2 Usability Evaluation
   - 7.3 Security Evaluation
8. **Discussion**
9. **Conclusion and Future Work**
10. **Author Contributions**
11. **Acknowledgments**
12. **Financial Disclosure**
13. **Conflict of Interest**
14. **References**

---

## 3. Thesis Components to Remove

- University title pages (both covers)
- Declaration page
- Copyright notice page
- Personal acknowledgment (family, advisor names, personal thanks)
- Table of Contents
- List of Figures
- List of Tables
- Standalone List of Abbreviations page
- All chapter-opening meta-paragraphs ("In this chapter we present...")
- Ethereum whitepaper internals (§2.5.1.1 Philosophy, §2.5.1.2 Accounts, §2.5.1.3 Messages & Transactions)
- Ethiopian surveillance system primer (§2.6.1–2.6.10 in full — 10 sub-sections of domain background)
- Step-by-step UI walkthrough narration in prototype chapter (keep screenshots, delete paragraph-by-paragraph click descriptions)
- Appendix A (blockchain suitability questionnaire)
- All repeated paragraph text (§3.1 contains an identical paragraph duplicated verbatim)
- Chapter numbers and "Chapter X" headings throughout

---

## 4. Sections Requiring Major Condensation

| Thesis Section(s) | Estimated Current Length | Target Reduction | Rationale |
|---|---|---|---|
| Ch.1 Background + Objectives + Scope + Significance (§1.1–1.5) | ~900 words | **~70%** → ~270 words | Merge entirely into a focused Introduction |
| Ch.2 Blockchain Concepts, Types, Characteristics (§2.2–2.4) | ~2,500 words | **~85%** → ~375 words | Standard blockchain primer; cite a survey paper instead |
| Ch.2 Ethereum Internals (§2.5.1.1–2.5.1.3) | ~1,200 words | **~90%** → ~120 words | Platform justification only; Table 2.1 kept |
| Ch.2 Disease EWS in Ethiopia (§2.6.1–2.6.10) | ~2,200 words | **~80%** → ~440 words | Domain context only; 2–3 focused paragraphs |
| Ch.2 Related Works (§2.7) | ~700 words | **~30%** → ~490 words | Restructure; add gap analysis; table of comparison recommended |
| Ch.3 Research Methodology (§3.1–3.4) | ~1,200 words | **~50%** → ~600 words | Remove SDRM stage-by-stage exposition; keep rationale |
| Ch.4 Prototype Implementation (§4.1–4.2.7) | ~1,800 words | **~55%** → ~810 words | Remove UI step narration; retain screenshots + key functional descriptions |
| Ch.5 Evaluation narrative (§5.2–5.4 prose) | ~1,600 words | **~30%** → ~1,120 words | Keep data and results; trim method setup descriptions |
| Ch.6 Conclusion + Future Work (§6.1–6.2) | ~600 words | **~35%** → ~390 words | Compress; future work to 4–5 bullets |

---

## 5. Missing Journal Components

The following sections are **entirely absent** or critically underdeveloped and must be added:

| Missing Component | Status in Thesis | Action Required |
|---|---|---|
| **Discussion** | Completely absent | Write new section: interpret results vs. related works, explain implications, compare with prior systems |
| **Explicit Research Contributions** | Scattered as bullet points in §1.5 (Significance) | Rewrite as a formal numbered contributions list at the end of the Introduction |
| **Limitations** | One sentence in §5.4.2 security summary | Expand to a dedicated Limitations paragraph (prototype-scale, Rinkeby testnet only, single-region survey, SUMI sample size) |
| **Data Availability Statement** | Absent | Add: state whether survey data, smart contract code, and SUMI results are available |
| **Funding Statement** | Absent | Add: state any funding sources or "No funding received" |
| **Conflict of Interest Statement** | Absent | Add standard declaration |
| **Author Contributions Statement** | Absent | Add using CRediT taxonomy |
| **Ethics Statement** | Absent | **Critical:** 26 human participants were used in usability study — IRB/institutional ethics approval must be documented |

---

## 6. Section Processing Order

Recommended rewriting sequence (each step informs the next):

1. **Proposed Model** (§3.5 → journal §5) — core contribution; define the model precisely first so all other sections reference it consistently
2. **Research Contributions** — extract from §1.5 and Abstract; write as a formal list; anchors Introduction
3. **Introduction** — merge §1.1–1.5; now that contributions are clear, the gap statement can be precise
4. **Background and Related Work** — compress §2.2–2.7; critical comparative analysis of related works
5. **Research Methodology** — compress §3.1–3.4; model design rationale + survey
6. **Prototype Implementation** — compress §4.1–4.2.7; functional description + key screenshots
7. **Evaluation** — compress §5.2–5.4; results-focused, data-first
8. **Discussion** — new section; written after evaluation is finalized; interpret all three evaluation results, compare against related works, state limitations
9. **Conclusion and Future Work** — compress §6.1–6.2; short, declarative
10. **Abstract** — rewrite last; reflects final settled structure and key quantitative results

---

## 7. Rewrite Roadmap

| Journal Section | Target Word Count | Condensation Target | Rewrite Difficulty | Scientific Risk | Priority |
|---|---|---|---|---|---|
| Abstract | 200–250 | Rewrite from scratch | Low | Low | 10 (last) |
| Introduction | 500–700 | ~70% reduction from Ch.1 | Medium | Low | 3 |
| Background and Related Work | 900–1,100 | ~75% reduction from Ch.2 | Medium | Low | 4 |
| Research Methodology | 450–600 | ~50% reduction from §3.1–3.4 | Medium | Low | 5 |
| Proposed Model | 1,000–1,300 | ~30% reduction from §3.5 | **High** | **High** | 1 (first) |
| Prototype Implementation | 550–750 | ~55% reduction from Ch.4 | Medium | Medium | 6 |
| Evaluation | 850–1,050 | ~30% reduction from Ch.5 | Low | **High** | 7 |
| Discussion | 450–650 | New — write from scratch | **High** | **High** | 8 |
| Conclusion and Future Work | 300–400 | ~35% reduction from Ch.6 | Low | Low | 9 |
| **TOTAL** | **~5,200–6,800** | — | — | — | — |

**Risk notes:**
- *Proposed Model* carries High scientific risk because it is the original contribution — any compression must preserve all design decisions, smart contract roles, and hierarchical interaction logic
- *Evaluation* carries High scientific risk because quantitative results (SUMI scores, block generation times, threat assessment) must not be misrepresented during condensation
- *Discussion* is the most intellectually demanding new section — it requires positioning all three evaluation results against the six related works in §2.7 and articulating the specific advancement over prior art
- Ethics approval for the 26-participant SUMI study is a **blocking requirement** before journal submission
