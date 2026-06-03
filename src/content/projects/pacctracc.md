---
title: Pacctracc
summary: Flask web app that tracks an Old School RuneScape clan — members, progression, and skill-by-skill calculators for goal planning.
year: 2025
role: Solo
stack: ["Python", "Flask", "SQLite"]
tags: ["osrs", "gaming", "web-app"]
repo: https://github.com/addisonsans/PACC-TRACC
order: 4
---

Pacctracc is a **Flask web app** that tracks an Old School RuneScape
clan over time — members, skills, boss kill counts, and progress
toward goals.

Underneath the tracking, it's also a pile of OSRS-specific
calculators: crafting, cooking, alchemy, farming, boss strategy,
and others. Each one is its own module so adding a new skill or
mechanic is dropping in a new file rather than untangling a
megafile.

Started as a one-evening script for my own clan; turned into
something the group actually uses.
