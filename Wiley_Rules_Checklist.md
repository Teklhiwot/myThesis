# Wiley Rules Checklist

---

## 1. Required Manuscript Structure

- Front matter: Article type, received/revised/accepted dates, DOI, title, author names, affiliations, correspondence, present address, abstract, keywords
- Body: Introduction → [Methods/Results/Discussion as applicable] → Conclusions
- Back matter (in order): Author Contributions, Acknowledgments, Financial Disclosure, Conflict of Interest, References, Supporting Information note, Appendix (if any)
- Author biography included only for review-type articles (check journal guidelines)
- Abbreviations list placed as a footnote at the start of the article body
- Use `\authormark{}` for running heads; `\titlemark{}` for title running head
- Input received/revised/accepted dates as "00" during preparation; production fills them

---

## 2. Title Rules

- Title must appear in `\title{}` command
- Short running title provided via `\titlemark{}`
- Title footnotes permitted via `\footnotetext{}`

---

## 3. Abstract Rules

- Single-paragraph abstract; use `\abstract[Abstract]{...}`
- No citations in the abstract
- No section headings inside the abstract

---

## 4. Keywords Rules

- Provided via `\keywords{Keyword1, Keyword2, ...}`
- Comma-separated list
- Minimum 3–4 keywords (follow journal-specific guidelines)

---

## 5. Heading Hierarchy

- Five levels maximum:
  1. `\section{}` — First level (ALL CAPS in output)
  2. `\subsection{}` — Second level
  3. `\subsubsection{}` — Third level
  4. `\paragraph{}` — Fourth level
  5. `\subparagraph{}` — Fifth level (inline heading followed by period)
- Unnumbered headings use asterisk variant (e.g., `\section*{}`)
- Appendix headings use `\bmsection*{}` and `\bmsubsection*{}`

---

## 6. Figures

- Use `\begin{figure}...\end{figure}` with `\centering` and `\includegraphics{filename.eps}`
- Two-column figures use `\begin{figure}[!t]` with `\centerline{}`
- Caption placed below figure via `\caption{}`; label via `\label{fig1}`
- Figure labels in text formatted as "Figure 1" or "Figures 1 and 2"
- Sideways/landscape figures supported
- Appendix figures labeled sequentially per appendix (e.g., Figure B1)
- Figure files submitted as EPS or PDF

---

## 7. Tables

- Use `\begin{table}` with `\caption{}` placed **above** the table
- Use `\begin{tabular}{\textwidth}` with `@{\extracolsep\fill}` for full-width tables
- Use `\toprule`, `\midrule`, `\bottomrule` (booktabs style)
- Spanning column heads use `\multicolumn{}` and `\cmidrule`
- Table footnotes placed in `\begin{tablenotes}...\end{tablenotes}`; use `\item[$^{\rm a}$]` for lettered notes, `†`, `‡` for symbol notes
- Source line placed after footnotes as `Source: ...`
- Tables labeled sequentially; appendix tables per appendix (e.g., Table B1)
- Sideways/landscape tables supported
- Decimal-aligned columns supported via `tabular*`

---

## 8. Equations

- All math must be coded as LaTeX math (not plain text)
- Inline equations: `$...$`
- Numbered display equations: `\begin{equation}...\end{equation}`
- Unnumbered display equations: `[...]`, `$$...$$`, or `equation*`
- Multi-line numbered equations: `align`, `gather`, or `eqnarray`
- Multi-line unnumbered: `align*`, `gather*`, or `eqnarray*`
- Cross-reference equations with `\ref{}` and `\label{}`
- Appendix equations numbered per appendix (e.g., Eq. B1, C2)
- Use `\begin{proof}...\end{proof}` for proofs
- Theorem-type environments available: theorem, proposition, definition, lemma, corollary, remark, claim, example, assertion, conjecture, hypothesis, notation

---

## 9. Citation Rules

- Use `\cite{}`, `\citet{}`, `\citep{}` for in-text citations
- Multiple citations in one command: `\cite{Key1,Key2}`
- References cited in order of appearance in text (AMA style)
- Superscript numbers used for AMA citation style
- Use BibTeX `.bib` file; provide `.bib` with submission
- Embedded (non-BibTeX) references require manual conversion by typesetter

---

## 10. AMA Reference Rules

**Journal article (≤6 authors — list all; >6 authors — list first 3 then "et al."):**
`Surname Initials, Surname Initials, Surname Initials, et al. Title sentence case. *J Abbrev*. Year;Vol(Issue):pages. doi:xxx`

**Book chapter:**
`Surname Initials, Surname Initials. Chapter title. In: Editor Initials Surname, ed. *Book Title*. Edition ed. Publisher; Year:pages.`

**Conference proceedings:**
`Editor Initials Surname, ed. *Proceedings Title*. Publisher; Year.`

- Journal names abbreviated per NLM/Index Medicus style; italicized
- Article titles in sentence case (only first word and proper nouns capitalized)
- DOI included when available
- Volume in regular type; issue in parentheses; pages separated by em-dash
- Accessed date required for online-only sources
- BibTeX file: `wileyNJD-AMA.bib`; style file: `wileyNJD-AMA.bst`

---

## 11. Writing Style Requirements

- Third-person, formal academic prose
- No first-person narrative unless journal permits
- Abbreviations defined at first use; list placed as article-opening footnote
- Use `\begin{quote}...\end{quote}` for block quotes with attribution via `\rightline{---Source}`
- Use `\begin{boxwithhead}{HEAD}{text}` or `\begin{boxtext}{text}` for boxed content
- List styles supported: numbered (1., (1), I., i., (a)), bulleted, and description lists
- Program code in `\begin{lstlisting}[caption={}]...\end{lstlisting}` using `listings` package

---

## 12. Language and Formatting Constraints

- Manuscript language: English
- Special/diacritical characters must use LaTeX codes (e.g., `\"{a}`, `\"{o}`, `\"{u}`)
- No custom fonts; use only NJD-approved fonts (Stix, Times, Garamond, Minion Pro, Utopia, Century, Courier, Lato, Helvetica, Myriad Pro, Arial, Univers)
- Compile with XeLaTeX (preferred) or default compiler with Times font
- No global spacing overrides (`\parindent`, `\parskip`, `\textwidth`, `\textheight`, `\pagebreak`, etc.)
- No custom environments for definitions, theorems, etc. (use template-provided ones)
- Vertical spacing commands restricted to: `\bigskip`, `\vskip24pt`, `\vspace*{24pt}`
- Keep preamble simple; minimize custom macros
- Fix all compilation errors before submission
- Submit: LaTeX file + `.bib`/`.bbl` + generated PDF

---

## 13. Thesis Components Not Allowed in Journal Articles

- Chapter titles and chapter numbering
- Table of contents, list of figures, list of tables
- Preface, foreword, dedication
- Biographical/personal acknowledgment sections (replace with standard Acknowledgments)
- Dissertation committee pages, signatures, declaration pages
- Running thesis narrative connecting chapters
- Extended literature review chapters (must be condensed to article Introduction)
- Appendices containing raw data dumps (include only essential supplementary material)
- Author biography (only for review articles; check journal policy)

---

## 14. Journal Submission Requirements

- Use `\documentclass[AMA,STIX1COL]{WileyNJDv5}` (or appropriate font/column/reference-style options)
- Check journal's Author Guidelines on Wiley Online Library for journal-specific formatting
- Confirm journal uses NJD layout; if not, request journal-specific LaTeX template from Editorial Office
- Submit: `.tex` file, `.bib`/`.bbl` file, all figure files, generated PDF
- Compile locally and resolve all errors before upload
- References provided in BibTeX format strongly preferred
- Article type declared via `\articletype{}`
- Corresponding author details in `\corres{}`

---

## 15. Final Compliance Checklist

- [ ] `\documentclass` uses correct reference style, font, and column options
- [ ] Article type, author names, affiliations, correspondence all coded correctly
- [ ] Abstract is single paragraph, no citations, no headings
- [ ] 3+ keywords comma-separated
- [ ] All headings use correct level commands (max 5 levels)
- [ ] All equations coded as LaTeX math (not plain text)
- [ ] All figures: EPS/PDF files, captions below, labeled and cross-referenced
- [ ] All tables: captions above, booktabs style, footnotes in tablenotes, source line included
- [ ] AMA citations: superscript numbers in text, references numbered in order of appearance
- [ ] AMA reference list: journal names abbreviated, sentence-case titles, DOI included
- [ ] Abbreviations defined at first use and listed in opening footnote
- [ ] No diacritical characters as plain text; all converted to LaTeX codes
- [ ] No custom fonts, no global spacing commands, no custom environments
- [ ] Back matter in correct order: Author Contributions → Acknowledgments → Financial Disclosure → Conflict of Interest → References
- [ ] LaTeX file compiles without errors before submission
- [ ] Thesis-specific elements (chapters, ToC, committee pages, etc.) removed
- [ ] `.tex` + `.bib`/`.bbl` + figure files + PDF all submitted together
