---
title: Home Assistant Install on Raspberry Pi OS
image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Home_Assistant_Logo.svg/800px-Home_Assistant_Logo.svg.png
categories: raspbian
excerpt: They have made it harder, but it is still possible
description: Home Assistant Install on Raspberry Pi OS
---

Details of the procedure [here](https://gist.github.com/raspberrypisig/65aea786444dfa1f135ab5f3b2b85bcb)

It is now a 2-step process (and hence you now run two scripts).

The main change is that NetworkManager needs to be installed, because it is now a hard dependency. That means the default networking applet will not
be used to connect to the network, but need to use the one provided by Network Manager. So the first step is to install Network Manager.

The second script then installs Home Assistant.


