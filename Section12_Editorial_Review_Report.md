# Final Editorial Review Report

**Date:** 2026-07-30
**Reviewer:** Editorial review for Wiley journal submission compliance

---

## 1. Terminology Consistency

| Issue | Location | Recommendation |
|-------|----------|----------------|
| "DEWS" defined in Abstract and Introduction consistently | Throughout | ✅ Consistent |
| "Smart contract" vs "smart contracts" | Mixed usage | Minor; acceptable as singular/plural usage |
| Figure/Table numbering uses thesis-style "5.1", "5.2" etc. | Section 7 | ❌ **Must renumber** to sequential journal format (Figure 1, Figure 2, Table 1, etc.) |
| "Rinkeby test network" used consistently | Sections 6, 7, 9 | ✅ Consistent |
| "Proof of Authority (PoA)" defined at first use | Section 7 | ✅ Consistent |

---

## 2. Section Numbering

Current numbering (1–9) is correct for journal format. No chapter-style numbering detected.

✅ **Pass**

---

## 3. Figure and Table Numbering

| Issue | Severity |
|-------|----------|
| Figures referenced as "Figure 5.1", "Figure 5.2", "Figure 5.3", "Figure 5.4" in Section 7 | ❌ Critical — must use sequential numbering (Figure 1, 2, 3…) |
| "Figure 3.1", "Figure 3.2" in Section 4 | ❌ Critical — must use sequential numbering |
| "Table 5.1" in Section 7 | ❌ Critical — must use sequential numbering |
| "Table 3.1" in Section 4 | ❌ Critical — must use sequential numbering |
| Table 1 in Section 3.2 and Table 2 in Section 3.4 | ✅ Correct (already sequential) |

**Action required:** Renumber all figures and tables sequentially across the entire manuscript (Figure 1, Figure 2, …; Table 1, Table 2, …).

---

## 4. Cross-References

| Issue | Location |
|-------|----------|
| "Section 2" reference in Section 3 is correct | Section 3.3, 3.4 |
| "Section 5" reference in Section 4 is correct | Section 4.1 |
| All section cross-references verified consistent | ✅ |

---

## 5. Citation Consistency

| Issue | Severity |
|-------|----------|
| Citation $^{1}$ in Section 5 refers to EPHI (different from $^{1}$ in Section 2 which refers to Finlayson et al.) | ❌ **Critical inconsistency** — the same superscript number refers to different references in different sections |
| Citations $^{5}$–$^{11}$ are used consistently between Section 3 and Section 8 | ✅ Consistent |
| Citation format uses $^{n}$ LaTeX-style superscript throughout | ✅ Consistent |

**Action required:** Resolve the duplicate use of citation $^{1}$. In Section 5, verify what reference is intended and assign a unique number.

---

## 6. Word Count Estimate

| Section | Approximate Words |
|---------|-------------------|
| Abstract | 248 |
| Introduction | 520 |
| Background & Related Work | 780 |
| Research Methodology | 460 |
| Proposed Model | ~1,200 (estimated) |
| Prototype Implementation | ~800 (estimated) |
| Evaluation | 680 |
| Discussion | ~600 (estimated) |
| Conclusion | 280 |
| **Total (body)** | **~5,570** |

Target range per blueprint: 5,200–6,800 words.

✅ **Within target range.**

---

## 7. Wiley Formatting Compliance

| Requirement | Status |
|-------------|--------|
| Single-paragraph abstract, no citations, no headings | ✅ Pass |
| Keywords provided (7 keywords) | ✅ Pass |
| Third-person formal prose | ✅ Pass |
| No thesis elements (chapters, ToC, committee pages) | ✅ Pass |
| Back matter order: Author Contributions → Acknowledgments → Financial Disclosure → Conflict of Interest → References | ✅ Provided in correct order |
| AMA citation style (superscript numbers) | ✅ Pass |
| Abbreviations defined at first use | ✅ Verified for DEWS, SUMI, PoA, EPHI, PHEM |
| Equations in LaTeX math notation | ✅ (Section 7 uses $N$, $t_N$, $k_{rp}$, $k_{rs}$) |

---

## 8. Issues Requiring Author Action Before Submission

### Critical (Blocking)

1. **Ethics approval details missing** — IRB name, protocol number, approval date, and informed consent confirmation must be provided for the 26-participant SUMI study.
2. **Figure/Table numbering** — Must be converted from thesis chapter-based (e.g., 5.1) to sequential journal format (e.g., Figure 1).
3. **Citation $^{1}$ conflict** — Same number used for different references in Section 2 vs. Section 5. Must be resolved.
4. **Funding statement missing** — Author must provide or confirm "no funding" declaration.

### Important (Should fix)

5. **References 15–41** — Author must confirm which are cited in text; uncited references must be removed.
6. **Malformed reference** ("Al., X. et. (2017)") — Remove from bibliography.
7. **Missing access dates** — Online-only references (15, 23, 39) need access dates per AMA rules.
8. **Figure/table files** — Actual EPS/PDF figure files must be prepared for submission.

### Minor

9. **Abbreviation footnote** — A consolidated abbreviation list should be placed as a footnote at the start of the article body.
10. **Running head** — Short title for running header must be specified.

---

## 9. Submission-Readiness Checklist

- [x] Abstract: single paragraph, no citations, ≤250 words
- [x] Keywords: 3+ provided
- [x] Body sections complete (Introduction through Conclusion)
- [x] AMA reference list prepared
- [x] Author Contributions (CRediT) drafted
- [x] Acknowledgments drafted
- [x] Conflict of Interest statement provided
- [x] Data Availability statement drafted
- [ ] **Ethics statement: INCOMPLETE — requires IRB details**
- [ ] **Financial Disclosure: INCOMPLETE — requires author input**
- [ ] **Figure/Table numbering: requires renumbering to sequential format**
- [ ] **Citation $^{1}$ conflict: requires resolution**
- [ ] **Uncited references: requires author review and removal**
- [ ] **Figure files (EPS/PDF): not yet prepared**
- [ ] **LaTeX compilation: manuscript not yet in .tex format**

---

## 10. Overall Assessment

**Status: NOT YET SUBMISSION-READY**

The manuscript content is complete and within word count targets. The scientific content and logical flow are sound. However, four critical items must be resolved before submission:

1. Ethics approval documentation
2. Figure/table renumbering
3. Citation numbering conflict
4. Funding statement

Once these items are addressed and the manuscript is converted to the WileyNJDv5 LaTeX template, it will be ready for submission.
