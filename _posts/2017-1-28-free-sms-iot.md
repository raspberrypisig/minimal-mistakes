---
title: Send Free SMS in your IOT Project
excerpt: From an unlikely source
description: Telstra SMS API useful for IOT Projects
categories: iot
image: https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/telstrasmsapi.jpg
modified: 2017-3-12
---
There are times in your IOT projects when you want to send notifications of certain interesting event, example intruder detected. Sending an SMS is one such mechanism.

There is an excellent service called Twilio, but it is a paid service.

Enter Telstra (they are always there to help!) . It has a free limit of 1000 SMS messages a month. Sweet!


Basic Steps:

1. Register, then create an "app" in their backend, this will give you the "API Keys" you need

2. You first make a HTTP request for an authentication token (OAuth2)

3. With the token in hand, you make another HTTP Request which sends the SMS.



Introduction and Setup [here](https://dev.telstra.com/content/sms-api-0)

User Guide [here](https://dev.telstra.com/content/sms-getting-started)

My Code for Python [here](https://gist.githubusercontent.com/raspberrypisig/8b9ecbc578bbf01e38b3d43fd961e0cd/raw/d15d0651561f1c5a302413fff4a4ed20bf8d8e41/sms-telstra-api.py)

My Code for NodeRED [here](https://gist.githubusercontent.com/raspberrypisig/31753bf1f4d97a1f71f9184ca72fe9ba/raw/58696ff0fc58d4720865192254622c2102ba1cbb/sms-telstra-api.flow)

My NodeRed node for Telstra SMS API [here](https://www.npmjs.com/package/node-red-contrib-sms-telstra)
