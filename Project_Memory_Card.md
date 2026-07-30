# PROJECT MEMORY CARD
*Compressed from Wiley Rules Checklist — use this card for all rewriting sessions*

---

## A. Mandatory Paper Structure

Article Type → Title → Authors & Affiliations → Correspondence → Abstract → Keywords →
**Introduction → Methods → Results → Discussion → Conclusions** →
Author Contributions → Acknowledgments → Financial Disclosure → Conflict of Interest → References → [Appendix if essential]

---

## B. Writing Rules

- Third-person formal academic prose; no first-person
- Active voice preferred; eliminate passive constructions where possible
- Concise paragraphs; one idea per paragraph
- No redundancy; no textbook-style background explanations
- Introduction = focused problem statement + gap + objective (not a literature survey)
- Define all abbreviations at first use; list them in the opening footnote
- No filler phrases ("it is worth noting that," "as mentioned above," etc.)
- Section headings max 5 levels; back matter headings are unnumbered
- Abstract: single paragraph, no citations, no headings
- Keywords: ≥3, comma-separated, reflect core topics
- Equations coded as LaTeX math — never plain text
- Block quotes use `\begin{quote}...\end{quote}`
- Special/diacritical characters encoded as LaTeX (e.g., `\"{a}`)
- Keep LaTeX preamble simple; no custom fonts, no global spacing overrides
- Compile and fix all errors locally before submission

---

## C. AMA Citation Rules

- Citations are **superscript numbers**, ordered by appearance in text
- ≤6 authors: list all; >6 authors: first 3 + "et al."
- Journal article format: `Surname IN, et al. Title sentence case. *J Abbrev*. Year;Vol(Issue):pages. doi:xxx`
- Journal names: NLM/Index Medicus abbreviated form, italicized
- Article titles: sentence case only (first word + proper nouns)
- Book chapter: `Author. Title. In: Editor, ed. *Book*. Publisher; Year:pages.`
- DOI included whenever available
- Accessed date required for online-only sources
- Use BibTeX (`wileyNJD-AMA.bib` + `wileyNJD-AMA.bst`)
- References section titled **REFERENCES** (unnumbered heading)

---

## D. Figure Rules

- Caption placed **below** figure
- Reference in text as "Figure 1" or "Figures 1 and 2"
- Submit figure files as EPS or PDF
- Each figure must have `\label{}` and be cross-referenced in text
- Two-column figures: `\begin{figure}[!t]` + `\centerline{}`
- Appendix figures labeled per appendix (e.g., Figure B1)
- Do not embed figures without captions
- Avoid decorative or redundant figures

---

## E. Table Rules

- Caption placed **above** table
- Use booktabs style: `\toprule`, `\midrule`, `\bottomrule`
- Spanning heads via `\multicolumn{}` + `\cmidrule`
- Footnotes in `\begin{tablenotes}` (letters a, b or symbols †, ‡)
- Source line after footnotes: `Source: ...`
- Each table must have `\label{}` and be cross-referenced in text
- Appendix tables labeled per appendix (e.g., Table B1)
- No vertical rules; no colored cells

---

## F. Absolute Prohibitions

- No thesis chapter titles or chapter numbering
- No table of contents, list of figures, or list of tables
- No preface, foreword, or dedication
- No dissertation committee pages, signatures, or declaration pages
- No thesis-linking narrative between sections
- No extended literature review (compress to focused Introduction)
- No raw data appendices (supplementary material only if essential)
- No author biography (review articles only — check journal policy)
- No custom LaTeX fonts or global spacing commands
- No plain-text equations

---

## G. Final Quality Checklist

- [ ] Structure follows: Intro → Methods → Results → Discussion → Conclusions → back matter
- [ ] Abstract: single paragraph, no citations, no headings
- [ ] ≥3 keywords, comma-separated
- [ ] All headings at correct level (max 5); back matter unnumbered
- [ ] All equations in LaTeX math mode
- [ ] Figures: captions below, EPS/PDF files, labeled, cross-referenced
- [ ] Tables: captions above, booktabs style, footnotes, source line, cross-referenced
- [ ] AMA citations: superscript numbers in order of appearance
- [ ] AMA reference list: abbreviated journal names, sentence-case titles, DOI
- [ ] Abbreviations defined at first use + opening footnote list
- [ ] All thesis-specific elements removed
- [ ] Back matter order correct (Contributions → Acknowledgments → Financial Disclosure → COI → References)
- [ ] LaTeX compiles without errors; `.tex` + `.bib` + figures + PDF submitted
