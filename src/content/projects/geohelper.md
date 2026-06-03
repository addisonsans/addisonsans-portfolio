---
title: GeoHelper
summary: Desktop GUI that takes a screenshot, runs it through an LLM-vision analyser, and tries to figure out where the image was taken.
year: 2025
role: Solo
stack: ["Python", "PyQt", "LLM vision APIs"]
tags: ["desktop-app", "applied-llm", "computer-vision"]
order: 5
---

A desktop tool for geographic-clue extraction. Capture a screenshot,
feed it through an LLM-vision pipeline, and get back the model's
best guesses about location, landmarks, vegetation, road markings,
and whatever else is visible.

The codebase is split by responsibility — `capture/` for screen
grabbing, `ai/` for LLM analysis, `gui/` for the desktop interface,
`scrapers/` for any reference data the analyser pulls on, and
`data/` for what gets stored locally. A `__main__.py` ties it all
together so it runs as a single launchable app.

Mostly a "see how far you can push vision models on real-world
context clues" experiment.
