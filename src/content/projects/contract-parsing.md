---
title: CILB Document Pipeline
summary: AI automation system built for the Florida Construction Industry Licensing Board, replacing a manual paper-based document review process used in official licensing proceedings.
year: 2026
role: Sole developer
stack: ["Python", "OCR", "LLM extraction", "Vision APIs", "SQLite"]
tags: ["production", "ai-automation", "ocr", "government"]
featured: true
order: 1
---

The thing I've spent the most time on lately. Built for the **Florida
Construction Industry Licensing Board** — a state regulatory body
whose members are appointed by the Governor — replacing a manual,
paper-based document review process used in official licensing
proceedings.

## What it does

Ingests hundreds of pages of case documents per case, extracts the
relevant data, and generates clean structured summaries and per-case
briefings. Work that used to be done entirely by hand, now
substantially streamlined.

## How it's built

The pipeline is split into specialised extractors by document type —
coversheets, background checks, application summaries, status
worksheets — with a generic fallback. An upstream classifier routes
each page to the right extractor, an OCR engine handles the raw
page-to-text conversion, and a database layer stores the normalized
output alongside compliance / criminal-history / credit / insurance
flags. A single `run.py` is the entry point; everything underneath
is modular.

## Highlights

- **Normalized schema with crash-resumable processing** — a 600-page
  case that dies on page 412 picks up on page 413, not page 1.
- **Cost-optimised routing** between native text extraction and
  vision models depending on document type — pay for vision when
  you need it, not when you don't.
- **Designed to fail loudly.** Every extracted field is a typed
  claim that has to clear validation rather than a string that
  silently becomes null.

I now maintain and extend the system on a part-time contract basis.
