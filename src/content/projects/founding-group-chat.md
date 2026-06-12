---
title: The Founding Group Chat
summary: A shareable RAG web app where the Founding Fathers (plus Abigail Adams) debate modern 2026 topics in a live group chat, each reply grounded in their real writings.
year: 2026
role: Solo
stack: ["Python", "FastAPI", "Anthropic Claude", "LanceDB", "fastembed", "Supabase/Postgres", "Fly.io"]
tags: ["llm", "rag", "full-stack"]
demo: https://the-founding-group-chat.fly.dev
featured: true
order: 0
---

A fun-first, shareable web app: ask a modern question and watch eight
historical figures argue about it in a live group chat — every reply
grounded in their actual writings through retrieval.

**How it works.** A local hybrid search (dense vectors + BM25 over a
corpus of the founders' writings, embedded with fastembed and stored in
LanceDB) pulls the most relevant passages. A single Claude call then
generates an in-character, multi-speaker exchange — complete with
self-rated confidence and an optional "who won" verdict. Replies stream
in with staggered, human-like timing so it reads like a real chat
rather than a wall of text.

**Engineering.** FastAPI backend with prompt caching, a daily token-budget
kill-switch, per-IP rate limiting, and a response cache to keep API
spend bounded for a public launch. Conversations are persisted to
Supabase Postgres and shareable, with auto-generated OpenGraph image
cards so links unfurl cleanly on social. Deployed on Fly.io with a
warm instance and remote builds.
