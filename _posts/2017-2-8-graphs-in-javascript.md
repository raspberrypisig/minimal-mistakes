---
title: Graphs in Javascript
excerpt: Comparing morris.js highcharts n3-charts c3.js
description: morrisjs highcharts n3-charts c3.js
image: https://changelog.com/wp-content/uploads/chartkick.png
categories: web
---

## Weather data

To get some test data, I am using the wonderful [OpenWeatherMap service](https://openweathermap.org/api). To use this service, you need to obtain an API key, then browse to the following address:

[http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,AU&units=metric&appid=YOUR_API_KEY](http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,AU&units=metric&appid=YOUR_API_KEY)

The result is something like the following(JSON format):

{% gist 32e1399e26e3f174d1a7504abdd37b1f %}

Only interested in showing temperature data. 

### highcharts.html
{% gist 84e50df5606cf8933d82733e169da95e %}


### extract-plot-data.js
{% gist fb6d764c5d79ceff6e9019614aab9baa %}

### Result
![Highcharts Temp Data](https://raw.githubusercontent.com/raspberrypisig/raspberrypisig.github.io/master/assets/images/highcharts.jpg)


## n3-charts


## morrisjs


## highcharts

## c3.js

