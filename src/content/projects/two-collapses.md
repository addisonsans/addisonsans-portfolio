---
title: The Tale of Two Collapses
summary: A win-probability study of two of the biggest blown leads in sports — the Spurs' 29-point 2026 Finals collapse vs. the Falcons' 28-3 — plus an NBA contract-value analysis, all from live ESPN and Basketball-Reference data.
year: 2026
role: Solo
stack: ["Python", "pandas", "matplotlib", "seaborn", "ESPN API", "Basketball-Reference"]
tags: ["sports-analytics", "data-viz"]
featured: true
order: 3
---

Two teams crossed a **99% win probability** — and lost. This pulls
ESPN's win-probability and play-by-play data to overlay the Spurs' Game 4
Finals collapse (a blown 29-point lead) against the Falcons' 28-3 Super
Bowl, normalized to share of game so two different sports compare fairly.

![Win probability of two historic collapses](/projects/collapse.png)

**How safe is a "sure thing"?** Scraping every game of the 2026 NBA
playoffs (90 games, ~44k win-probability readings), a team reached a
95%+ win-probability spot and still lost in **11 of them**, and 99%+
three times. The model is well-calibrated overall — shown with 95%
Wilson intervals — but slightly overconfident at the extremes.

![Win-probability calibration with Wilson intervals](/projects/calibration.png)

**Bonus — contract value.** A small scraper refreshes current-season
advanced stats and salaries from Basketball-Reference to surface the
league's best-value contracts: each player's production priced at the
market rate of ~$3.3M per win share, minus actual salary.

![Best NBA contracts by surplus value](/projects/best-contracts.png)

Built on a reusable ESPN / Basketball-Reference scraping core and a
two-tier rendering system — a bold shareable style and a clean analytics
style — sharing a single data pipeline.
