---
title: Ramble Bot
summary: Local-first writing reference + research bank. SQLite + FTS5 for canonical style references, SQLite + sqlite-vec for a semantic research index. Single CLI over both.
year: 2026
role: Solo
stack: ["Python", "Typer", "SQLite", "FTS5", "sqlite-vec", "Sentence Transformers"]
tags: ["local-first", "vector-search", "cli-tools"]
featured: false
order: 10
---

A local, two-store writing reference I built for myself.

- **Style / Usage store** — a parsed corpus of canonical English
  style references (Strunk &amp; White, Fowler, Oxford Guide to
  Plain English), ingested once and queryable via SQLite **FTS5**.
- **Research bank** — a growing vector store of citable research
  material. Accepts PDFs, arXiv IDs, DOIs, and URLs; chunks by
  paragraph or section; embeds with `all-MiniLM-L6-v2`; and
  searches with filters on quality tier, year, author, and journal.
  Backed by SQLite + **sqlite-vec**.

Both stores share a single Typer CLI and Python API. Nothing leaves
the machine at query time.

## Why I built it

I kept losing track of which exact paper backed a claim I wanted to
make. The "Tier 1 / 2 / 3" tagging at ingest is a forcing function:
I have to decide *now* how much weight a source actually carries
instead of pretending I'll remember later.
