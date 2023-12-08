---
layout: page
title: persplain
img: assets/img/4.png
description: Predicts personality traits from text with an explanation
importance: 1
category: fun
---

## Motivation

In the course of my [previous work on recognising personality traits from text](https://doi.org/10.1145/3477314.3506995), I observed limitations in the approach I had utilised, which relied on psycholinguistic lexica and essentially lacked consideration for contextual nuances. Recognising the need for a more robust and explainable method, I developed persplain (explainable personality prediction), which aimed to provide explanations for the predicted traits.

## Method

The following methodology was carried out:

1. Personality annotated datasets were gathered into one dataset. This included entries from Facebook, Twitter, YouTube, and hand-written essays. I had a total of 3,000 entries.
2. The dataset was fed to a  `MultiLabelClassificationModel` from the `simpletransformers` library to train a RoBERTa pre-trained model. It took around 10 epochs for loss to begin decreasing significantly, and training was stopped at the 40th, taking around 1 hour in total.
3. The trained model was wrapped around a `MultiLabelClassificationExplainer` from the `transformers-interpret` library.
4. Finally, the trained model was uploaded to HuggingFace and made available for anyone to try.

## Result

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/persplain-result.gif" width="70%"  zoomable=true %}
</div>

## Future work

While this work provides insight into why personality predictions are taking place, there is a notable challenge in precisely explaining the influence of specific words (beyond a score for each word). It would be interesting to explore further, perhaps through the use of psycholinguistic lexica.

Outside of explainability, I would also like to explore the generation of additional personality-annotated training data through the use of large language models (see [Meng et al.](https://proceedings.mlr.press/v202/meng23b/meng23b.pdf)).

## Additional material

- [Code](https://github.com/andaqu/persplain)
- [HuggingFace](https://huggingface.co/spaces/andaqu/persplain) (you can try persplain here!)

Reach out if you would like access to the dataset!
