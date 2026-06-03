---
title: OSRS RAG
summary: Retrieval-augmented Q&A system over the Old School RuneScape wiki. Scraper, indexer, and query pipeline as separable scripts.
year: 2025
role: Solo
stack: ["Python", "Embeddings", "Vector search"]
tags: ["rag", "applied-llm", "osrs"]
featured: false
order: 11
---

OSRS has one of the densest community knowledge bases on the
internet, which makes it a good corpus to learn retrieval on.

The system is split into a handful of small scripts that each do
one job:

- `scraper.py` pulls down the wiki.
- `indexer.py` chunks and embeds it.
- `query.py` is the front door for asking it questions.
- `update.py` re-syncs when the wiki changes.

Most of the learning was in the boring parts — chunk-size tuning,
when reranking actually helps, and how badly an LLM can hallucinate
when it confidently mistakes one quest for another. The biggest
takeaway: most "good RAG" is chunking, not embeddings.
