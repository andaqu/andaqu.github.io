---
layout: page
title: seg + sum
img: assets/img/2.png
importance: 3
description: Segmentation + summarisation methods on podcasts
category: research
---

## Motivation

Due to the lengthy nature of podcasts, users often carefully select which episodes to listen to. Although episode descriptions aid users by providing a summary of the entire podcast, they do not provide a topic-by-topic breakdown.

## Method

In this research project, topic segmentation and text summarisation methods were combined with the goal of improving user comprehension of podcast episodes. Figure 1 outlines the proposed workflow.

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/podcasts.png" title="Proposed workflow to improve user comprehension of podcast episodes." width="70%"  zoomable=true %}
</div>
<div class="caption">
Figure 1: Proposed workflow to improve user comprehension of podcast episodes.
</div>

Ten episodes from [Spotify’s English-Language Podcast Dataset](https://podcastsdataset.byspotify.com/) were sampled for the scope of this task. The considered topic segmentation methods were TextTiling and TextSplit. Moreover, three text summarisation models, namely T5, BART, and Pegasus, were applied to provide a very short title for each segment. 

## Results

The segmentation part was evaluated using an annotated sample with the $$P_k$$ and WindowDiff ($$WD$$) metrics. As displayed in Figure 2, TextSplit achieved the lowest mean for both evaluation metrics.

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/segsum-topics.png" title="The Pk and WD scores achieved by the various segmenters, compared with a random baseline." width="70%" zoomable=true %}
</div>
<div class="caption">
Figure 2: The Pk and WD scores achieved by the various segmenters, compared with a random baseline.
</div>

A survey was also rolled out to assess the quality of the generated summaries. The T5 model produced the best summaries, achieving a relevancy score only 8% less to the one achieved by the human-written titles.

The best-performing segmenter and summariser were embedded within a user interface, as shown in Figure 3.

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/segsum-visualisation.png" width="70%" zoomable=true %}
</div>
<div class="caption">
Figure 3: Visualisation of the TextSplit segmenter and T5 text summarisation model on a podcast episode.
</div>

## Future Work

* The small sample taken is a significant limitation of this work. Expanding the number of episodes and surveyed users can enhance the finding's generalisability and robustness.

## Additional material

* [Paper (Pre-print)](https://arxiv.org/abs/2307.13394)