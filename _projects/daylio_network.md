---
layout: page
title: daylio network
description: Provides insights on how words are used in a journal
img: assets/img/6.png
importance: 2
category: fun
---

## Motivation

Daylio, a mobile journal and mood tracker, enables users to jot down their thoughts about their day and record their emotions. While the app offers basic visualisations to highlight mood trends, it currently falls short in providing in-depth analyses, particularly concerning the language used within the written notes.

Having used Daylio myself for some time, I grew interested in exploring which words I was using and how they correlated with my moods.

## Method

The following methodology was carried out:

- Data was exported from Daylio, basic pre-processing was conducted, and stop words were removed.
- The journal entries were represented as a network, where:
  - Every word is considered a separate node.
  - An edge exists between two nodes if the representative words are found within the same entry.
  - The node's size equates to the word's number of occurrences, and the node's colour represents the average mood that the word is associated with.
- An interface was developed using d3v5 to visually represent the network as an interactive force-directed graph.

## Result

This is an example from my own entries! Two clusters can be identified, one with English words and the other with Maltese. Names of people (which I blurred out in this case) serve as the bridge between these categories.

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/daylio.gif" width="100%"  zoomable=true %}
</div>

## Additional material
- [Code](https://github.com/andaqu/daylio-word-network)