---
layout: page
title: gender bias
description: Bias detection/mitigation within Maltese word embeddings
img: assets/img/3.png
importance: 2
category: research
---

## Motivation

The psychological status of societal groups can be strengthened or weakened by the biases pertaining to their language. Even in cases where biases may appear to be positive, their effect remains harmful and discriminatory. In NLP, we risk perpetuating the stereotypes present in our training data and therefore exacerbating their negative effects.

## Introduction

The purpose of this research project was to explore and address any gender bias present within my own native language (Maltese).

## Method

The following methodology was carried out:

1. **Training:** Word embedding models (Word2Vec and FastText) were trained on a Maltese corpus.
2. **Bias detection:** Gender bias within the trained embeddings was examined by (i) quantifying it using the MWEAT metric and (ii) analysing the usage of various occupational terms and adjectives across genders.
3. **Bias mitigation:** Debiasing methods were explored, followed by an experiment to determine whether core semantic relationships were maintained afterwards.

**Note:** Inheriting from Arabic, Maltese adopted a linguistic system that is comprised of two gender categories, masculine and feminine.

## Results

**Bias Detection**

Figure 1 displays the gender projections for word pairs. For example, a projection of −0.4 and 0.2 for the "studenta" / "student" pair indicates that the female Maltese word for student is used more than its male counterpart.

As can be observed, certain occupational roles (such as strategist, analyst, economist, writer, counsellor, etc.) were solely biased towards men, with few corresponding biases exclusively present towards women (singer being one of them).

<div class="col-sm mx-auto mt-3 mt-md-0 text-center">
{% include figure.html path="assets/img/maltese-gender-debias-plot.png" width="70%"  zoomable=true %}
</div>
<div class="caption">
Figure 1: Gender bias projections given occupational terms.
</div>

**Bias Mitigation**

Two methods were employed to rectify the observed bias in the trained embeddings, one before training and the other after.

* **[Lemmatisation](https://aclanthology.org/K19-1043/)**: Removes gender inflection from the context, but also decreases the corpus’ vocabulary size.
* **[Hard Debias](https://arxiv.org/abs/1607.06520)**: Removes the component that corresponds to a gender direction as defined by a list of naturally gendered terms.
* **Applying both methods**

Table 1 outlines the average bias (as determined by the MWEAT metric) after debiasing the models using the aforementioned methods. S1 and S2 denote occupational and adjective bias respectively.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Word2Vec (S1)</th>
      <th>Word2Vec (S2)</th>
      <th>FastText (S1)</th>
      <th>FastText (S2)</th>
      <th>Avg. bias reduction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Hard Debias</strong></td>
      <td>0.049</td>
      <td>0.084</td>
      <td>0.054</td>
      <td>0.090</td>
      <td>82.8%</td>
    </tr>
    <tr>
      <td><strong>Lemmatisation</strong></td>
      <td>0.305</td>
      <td>0.239</td>
      <td>0.169</td>
      <td>0.156</td>
      <td>48.4%</td>
    </tr>
    <tr>
      <td><strong>Both methods</strong></td>
      <td>0.059</td>
      <td>0.071</td>
      <td>0.047</td>
      <td>0.057</td>
      <td>85.5%</td>
    </tr>
  </tbody>
</table>
<div class="caption">
Table 1: Gender debiasing results.
</div>

## Future Work

1. A key challenge of such work was ensuring that both methods mantained core semantic relationships after debiasing. Future work should seek to improve upon this.

2. It does not explore gender-marked words that associate themselves with only one gender, such as "saħħa" (health - female) and "xogħol" (work - male). 

## Additional material

- [Code](https://github.com/andaqu/maltese-gender-debias)
- [Report](https://github.com/andaqu/maltese-gender-debias/blob/main/report.pdf)
- [Corpus](https://mlrs.research.um.edu.mt/)