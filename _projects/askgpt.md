---
layout: page
title: askgpt
description: Answers questions using YouTube and Reddit
img: assets/img/5.png
importance: 3
category: fun
---

## Motivation

ChatGPT's release in November 2022 marked a significant milestone in the field of NLP. However, despite its accessibility and utility, a notable limitation was its confinement within its training data. In this project, I sought to leverage its potential to answer questions based on social media content.

## Method

I developed AskYouTubeGPT and AskRedditGPT to answer questions based on content found on YouTube and Reddit respectively.

The general idea of both is as follows:

**AskYouTubeGPT**

Upon receiving a query, relevant videos and their transcripts are fetched from YouTube. These transcripts undergo topical segmentation, and each segment is converted into an embedding before being stored in a vector database.

Both the question itself and the "semantically closer" segments are then fed to GPT3.

GPT attempts to answer the question given the provided pieces of text, citing them accordingly if successful.

**AskRedditGPT**

Similar to AskYouTubeGPT. 

Reddit was less proficient in handling questions directly in the search bar. Therefore, the question is transformed into a list of topics using GPT3, which are then submitted to Reddit's API to fetch the relevant posts and comments. The entire process is illustrated in Figure 1.

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/5.png" width="70%" zoomable=true %}
</div>
<div class="caption">
Figure 1: AskRedditGPT's process.
</div>

## Result

Figure 2 showcases an example from AskYouTubeGPT which asks about Google's new Gemini model. An answer and references are provided.

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/askyoutubegpt.png" width="60%" zoomable=true %}
</div>
<div class="caption">
Figure 2: AskYouTubeGPT Architecture.
</div>

## Limitations

Social media websites, such as YouTube and Reddit, have specific demographics for certain topics, and the propagation of bias and harmful content may occur.

## Additional Materials

- AskYouTubeGPT ([HuggingFace](https://andaqu-ask-youtube-gpt.hf.space/), [Code](https://github.com/andaqu/ask-youtube-gpt))
- AskRedditGPT ([HuggingFace](https://huggingface.co/spaces/andaqu/ask-reddit-gpt), [Code](https://github.com/andaqu/ask-reddit-gpt))