---
layout: post
title: Testing Typography
description: This is a test of all the typographical elements people would likely use.
category:
featured-image:
thumbnail: british-phone-booth-thumbnail.jpg
teaser: Some bollocks or another.
permalink:
---

Below is just about everything you'll need to style in the theme. Check the source code to see the many embedded elements within paragraphs.

## Blockquotes

> Lorem ipsum dolor sit amet, test link adipiscing elit. Nullam dignissim convallis est. Quisque aliquam.

> <cite>First Lastname, _Great Article Title_</cite>

## Line Breaks

This paragraph should have a hard break here\\
and another one here,\\
with a bit more text to test.

## Definition

baselining
---verb
: 1. Reducing your expenses as low as possible to increase your runway.
2. Moving to a less expensive country while you launch your business.

## List Types

### Ordered Lists

1.  Item one
    1. four spaces before number
    2. four spaces before number
2. Item two
3. Item three

### Unordered Lists

* Item one
    * four spaces before star
    * four spaces before star
* Item two
* Item three

## Footnotes

Some type of foot note.[^1] A second footnote.[^2]

## Tables

|Header1|Header2|Header3|
|:------|:-----:|------:|
|left   |center |right  |


## Code Snippets

Here is some inline code. The class "myClas" can be used like this `<div class="myClass">` to highlight your text.

### Syntax highlighting

#### CSS

{% highlight css %}
    #container {
        float: left;
        margin: 0 -240px 0 0;
        width: 100%;
    }
{% endhighlight %}

#### Ruby

{% highlight ruby %}
    def show
      puts "Outputting a very lo-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-ong lo-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-ong line"
      @widget = Widget(params[:id])
      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @widget }
      end
    end
{% endhighlight %}

### GitHub Gist

<script src="https://gist.github.com/bradonomics/519d5e47e558ccecba93.js"></script>

## Notices

### Set a block of text off from the rest.

<div class="alert alert-success" role="alert"><strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.</div>
<div class="alert alert-info" role="alert"><strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.</div>
<div class="alert alert-warning" role="alert"><strong>Warning!</strong> Better check yourself, <a href="#" class="alert-link">you're not looking too good</a>.</div>
<div class="alert alert-danger" role="alert"><strong>Oh snap!</strong> Change a few things up and <a href="#" class="alert-link">try submitting again</a>.</div>

## Images with Figure Wrap


### One Image

<figure>
  <img src="http://placehold.it/1200x600.jpg" alt="alt text">
  <figcaption>Caption describing this image.</figcaption>
</figure>


### Two Images

<figure class="half">
  <img src="http://placehold.it/600x450.jpg" alt="alt text">
  <img src="http://placehold.it/900x450.jpg" alt="alt text">
  <figcaption>Caption describing these two images.</figcaption>
</figure>


### Three Images

<figure class="third">
  <img src="http://placehold.it/500x250.jpg" alt="alt text">
  <img src="http://placehold.it/500x250.jpg" alt="alt text">
  <img src="http://placehold.it/500x250.jpg" alt="alt text">
  <figcaption>Caption describing these three images.</figcaption>
</figure>


## Images


### Centered

Some before text. Some before text. Some before text. Some before text. Some before text. Some before text. Some before text.
<img class="centered" src="http://placehold.it/450x350.jpg" alt="image">
Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text.

### Align None

Some before text. Some before text. Some before text. Some before text. Some before text. Some before text. Some before text.
<img class="alignnone" src="http://placehold.it/450x350.jpg" alt="image">
Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text.

### Align Left

Some before text. Some before text. Some before text. Some before text. Some before text. Some before text. Some before text.
<img class="alignleft" src="http://placehold.it/450x350.jpg" alt="image">
Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text.

### Pull Left

Some before text. Some before text. Some before text. Some before text. Some before text. Some before text. Some before text.
<img class="pullleft" src="http://placehold.it/450x350.jpg" alt="image">
Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text.

### Align Right

Some before text. Some before text. Some before text. Some before text. Some before text. Some before text. Some before text.
<img class="alignright" src="http://placehold.it/450x350.jpg" alt="image">
Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text.

### Pull Right

Some before text. Some before text. Some before text. Some before text. Some before text. Some before text. Some before text.
<img class="pullright" src="http://placehold.it/450x350.jpg" alt="image">
Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text. Some after text.

## Videos

<div class="wrap"><div class="iframe-embed">
<iframe src="http://www.youtube.com/embed/PWf4WUoMXwg" frameborder="0"></iframe>
</div></div>


## Maps

<div class="wrap"><div class="iframe-embed">
<iframe src="https://maps.google.com/maps/ms?msid=217434296231376900804.000470de9b04e258bfe3b&amp;msa=0&amp;ie=UTF8&amp;t=m&amp;ll=18.753033,98.934503&amp;spn=0,0&amp;output=embed"></iframe>
</div></div>

<hr>


### Footnotes:

[^1]: Here I've included more information in footnote form.
[^2]: And here also.
