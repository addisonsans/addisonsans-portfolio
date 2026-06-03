---
title: Depression Prediction (Kaggle)
summary: Tabular-ML Kaggle entry predicting depression from survey features. Gradient-boosted trees, threshold tuning, and an evaluation harness that survived class imbalance.
year: 2025
role: Solo
stack: ["Python", "scikit-learn", "XGBoost", "Pandas"]
tags: ["ml", "tabular", "kaggle"]
repo: https://github.com/addisonsans/Predicting-Depression---Kaggle-Competition
order: 8
---

Kaggle competition entry on depression prediction from survey
features. The headline approach was gradient-boosted trees with
threshold tuning and a small ensemble, but the interesting work
was upstream of the model.

The dataset is severely imbalanced, which makes it very easy to get
a deceptively good score by leaning into the majority class. Most
of my time went into building an evaluation harness I could
actually trust — stratified resampling, properly held-out folds,
and a leaderboard of submission attempts so I could see which
changes actually helped.
