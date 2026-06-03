---
title: Cognitive Bias Explorer
summary: Single-page React app that lets users walk through cognitive biases interactively rather than read about them.
year: 2025
role: Solo
stack: ["React", "Vite", "JavaScript"]
tags: ["teaching-tool", "frontend"]
order: 6
---

A React + Vite single-page app for exploring cognitive biases —
anchoring, availability, framing, and the rest of the usual
suspects — by letting the user actually run into them in interactive
prompts instead of just reading definitions.

Built as a simple SPA: `cognitive-bias-explorer.jsx` does most of
the work, with the standard Vite scaffolding around it. Built
output ships from `dist/` so it can be hosted anywhere static.

The design challenge was making the reveal feel earned rather than
smug.
