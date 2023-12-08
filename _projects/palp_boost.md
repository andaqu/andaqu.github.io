---
layout: page
title: palp-boost
description: Personality Aware Link Prediction Boosting
img: assets/img/1.png
importance: 1
category: research
related_publications: aquilina2022predicting
---

## Motivation

Although personality is one of the primary determiners of one’s behaviour and social relationship proclivity, its impact within online social networks is oftentimes overlooked.

## Introduction 

**PALP-boost** stands for **P**ersonality **A**ware **L**ink **P**rediction **Boost**ing, a component that seeks to improve link prediction precision in social networks by incorporating users' Big Five personality preferences. 

Link prediction refers to the inference of edges between nodes in a network. In this case, it is adapted to the problem of friendship recommendation.

The Big Five personality traits consist of:

* **Openness to Experience** (Willingness to explore the
unknown)
* **Conscientiousness** (Tendency to work and plan effectively)
* **Extraversion** (Drawing energy from interacting with
other people)
* **Agreeableness** (Tendency to put the needs of others above their own)
* **Neuroticism** (Encompasses one’s emotional stability)

## Method

This research utilises an openly-available dataset gathered from Twitter. Since Twitter is a directed social network (unlike Facebook or LinkedIn), the focus is on determining if the individual being followed (the followee) is a suitable match for the follower.

PALP-boost takes a social network as input and begins by clustering users' followee personalities.

Once a potential followee is identified for a given user (through the means of topological proximity), they are scored based on the compatibility of their personality with respect to the follower's preferences. See Figure 1.

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
  {% include figure.html path="assets/img/palpboost.png" width="50%" zoomable=true%}
</div>
<div class="caption">
Figure 1: A potential followee's personality is compared with a user's preferences. Only two out of the five dimensions are shown in this figure.
</div>

Consider user $$u$$ (the follower) and user $$v$$ (the potential followee). Equation 1 denotes how the scoring is conducted.

\begin{equation}
s(u, v) = \sum_{c\in C}^{n} \frac{\text{weight}(c)}{\text{dist}(c, p_v) + \epsilon}
\end{equation}

* $$s(u, v)$$ is the score representing how "suitable" user $$v$$ is for user $$u$$.
  
* $$C$$ is the set of personality preference clusers for user $$u$$.

* $$\text{dist}(p_v, c)$$ is the Euclidean distance between user $$v$$'s personality and the considered cluster.

* $$\epsilon$$ is a small positive constant added to the denominator to avoid division by zero.

* $$\text{weight}(c)$$ is the total number of users associated with the considered cluster.

## Result

Figure 2 displays the key finding of this work, outlining an improvement in precision, especially as topological information decreased.

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/palpboost-results.png" width="50%" zoomable=true %}
</div>
<div class="caption">
Figure 2: Average Precision improvement across the considered link predictors.
</div>

PALP-boost was developed as a result of the research conducted in ['Predicting links in social networks based on recognised personalities'](https://dl.acm.org/doi/10.1145/3477314.3506995). In this study, I employed the [ego-Twitter](https://snap.stanford.edu/data/ego-Twitter.html) dataset, used the [TwitterAPI to retrieve users' tweets](https://github.com/andaqu/big5-app), recognised their [personality traits from language use using psycholinguistic lexica and machine learning models](https://github.com/andaqu/personality-recogniser), and incorporated the proposed PALP-boost component into traditional topological methods. Please refer to the paper below for a deeper discussion.

## Additional material

* [Code](https://github.com/andaqu/palp-boost)
* [Poster](../../assets/pdf/ThesisPoster.pdf)
* [Paper](https://doi.org/10.1145/3477314.3506995)