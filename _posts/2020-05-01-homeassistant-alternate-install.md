---
title: Home Assistant Alternative Install
image: https://www.home-assistant.io/images/hassio/screenshots/first-start.png
description: Home Assistant Alternative Install
excerpt: Home Assistant Alternative Install
categories: raspbian
---

The recommended way to install Home Assistant is to download the precompiled raspberry pi image. This is good for most users.

I still like to have Home Assistant installed on raspbian rather than hassio.

The Home Assistant way to do this is called a Supervised Install, link [here](https://github.com/home-assistant/supervised-installer)

There are a few steps in setting this up, so I have created a script [here](https://gist.github.com/raspberrypisig/65aea786444dfa1f135ab5f3b2b85bcb)

All you need to do is from a fresh installation of Raspbian, run this:

```sh
curl -sL https://bit.ly/2ykrpaM | HOMEASSISTANT_INSTALL_LOCATION=/home/pi/homeassistant RASPBERRYPI=raspberrypi3 sudo -E bash -
```

You may want to change raspberrypi3 in the above with one of the following:

raspberrypi 

raspberrypi2

raspberrypi4 

raspberrypi3-64 

raspberrypi4-64


The installation directory will be /home/pi/homeassistant. 

The installation will take about 30 minutes, after which you can go to http://localhost:8123 if your are on the Pi or
http://IP_ADDRESS_OF_PI:8123 from another computer, replacing IP_ADDRESS_OF_PI with the IP address of computer.

Once you have done onboarding, ie create a user and logged into Home Assistant, REBOOT your pi (this is an important step). DNS issues go away (eg. map appears)
