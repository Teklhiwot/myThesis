% WileyNJD-v2.cls - Minimal Wiley NJD style class
% Based on the official Wiley LaTeX template structure
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{WileyNJD-v2}[2023/01/01 Wiley NJD v2 LaTeX class]

% Options
\newif\if@AMA \@AMAfalse
\newif\if@LATO \@LATOfalse
\newif\if@ONECOL \@ONECOLfalse

\DeclareOption{AMA}{\@AMAtrue}
\DeclareOption{LATO1COL}{\@LATOtrue\@ONECOLtrue}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax

\LoadClass[11pt]{article}

% Required packages
\RequirePackage[margin=2.5cm]{geometry}
\RequirePackage{graphicx}
\RequirePackage{amsmath,amssymb}
\RequirePackage{booktabs}
\RequirePackage{natbib}
\RequirePackage{xcolor}
\RequirePackage{etoolbox}
\RequirePackage{fancyhdr}
\RequirePackage{titlesec}
\RequirePackage{caption}
\RequirePackage{enumitem}

% Define colors
\definecolor{wileyblue}{RGB}{0,74,153}

% Title formatting
\titleformat{\section}{\large\bfseries}{\thesection}{1em}{}
\titleformat{\subsection}{\normalsize\bfseries}{\thesubsection}{1em}{}
\titleformat{\subsubsection}{\normalsize\itshape}{\thesubsubsection}{1em}{}

% Article type
\newcommand{\articletype}[1]{\def\@articletype{#1}}
\def\@articletype{}

% Dates
\newcommand{\received}[1]{\def\@received{#1}}
\newcommand{\revised}[1]{\def\@revised{#1}}
\newcommand{\accepted}[1]{\def\@accepted{#1}}
\def\@received{}
\def\@revised{}
\def\@accepted{}

% Author handling
\newcommand{\authormark}[1]{\def\@authormark{#1}}
\def\@authormark{}

% Address
\newcommand{\address}[2][]{\def\@address{#2}}
\def\@address{}

% Correspondence
\newcommand{\corres}[1]{\def\@corres{#1}}
\def\@corres{}

% Present address
\newcommand{\presentaddress}[1]{\def\@presentaddress{#1}}
\def\@presentaddress{}

% Organization macros
\newcommand{\orgdiv}[1]{#1}
\newcommand{\orgname}[1]{#1}
\newcommand{\orgaddress}[1]{#1}
\newcommand{\city}[1]{#1}
\newcommand{\country}[1]{#1}
\providecommand{\email}[1]{\texttt{#1}}

% Keywords
\newcommand{\keywords}[1]{\def\@keywords{#1}}
\def\@keywords{}

% Citation mark
\newcommand{\jnlcitation}[1]{}
\newcommand{\cmark}[1][]{}

% Abstract
\renewenvironment{abstract}{%
  \par\noindent\small\textbf{Abstract:} \ignorespaces
}{%
  \par\medskip
}

% Maketitle
\renewcommand{\maketitle}{%
  \begin{center}
    {\footnotesize\@articletype\par}
    \vspace{1em}
    {\LARGE\bfseries\@title\par}
    \vspace{1em}
    {\large\@author\par}
    \vspace{0.5em}
    {\small\@address\par}
    \vspace{1em}
  \end{center}
  \if\@corres\empty\else
    {\footnotesize\noindent\textbf{Correspondence:} \@corres\par}
  \fi
  \vspace{0.5em}
  \if\@keywords\empty\else
    {\footnotesize\noindent\textbf{Keywords:} \@keywords\par}
  \fi
  \vspace{1em}
}

% Bibliography style alias
\bibliographystyle{unsrtnat}

% Vancouver-like numbered citations
\renewcommand{\cite}[1]{\citep{#1}}
\setcitestyle{numbers,square}

\endinput
