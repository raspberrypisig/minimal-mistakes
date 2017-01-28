---
title: Send Free SMS in your IOT Project
excerpt: From an unlikely source
description: Telstra SMS API useful for IOT Projects
image: https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/telstrasmsapi.jpg
categories: iot
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
