---
title: Setup Wifi Hotspot on Raspberry Pi 
image: https://camo.githubusercontent.com/0c0fd2fe02072b94ee8d4cb7c964ddc604acd520/68747470733a2f2f692e696d6775722e636f6d2f78654b443933702e706e67
excerpt: Simple Hotspot setup with RaspAP
description: wifi hotspot hostapd
categories: raspbian
---

![web interface hostapd](https://camo.githubusercontent.com/c98b60d53ffc7fe8e3c79a12d462b773b17e9c8c/68747470733a2f2f692e696d6775722e636f6d2f6c5135376a56672e706e67)

![dhcp interface hostapd](https://camo.githubusercontent.com/bcf824fda08e1603e1078a5109cd782cf06b40e2/68747470733a2f2f692e696d6775722e636f6d2f6a46444d4579362e706e67)


# Wifi Hotspot on Raspberry Pi Made Easy with RaspAP

[Github Repo Here](https://github.com/billz/raspap-webgui)


A simple GUI interface to configure something that is non-trivial. 

The base case is using the onboard wireless on a Raspberry Pi 3/Pi Zero W as a wifi hotspot, then using ethernet interface for
internet access.

The other scenarios of interest are:

- using onboard wifi on raspberry pi as wireless hotspot, and using a second wifi .
- Simultaneously, using the onboard wifi as both a wifi hotspot, 
  and as a wifi client that connect to wireless router for internet access.

According to documentation, these two scenarios are also covered by the software.

The code is well written and easy to make out.

### Links
[RaspAP](https://github.com/billz/raspap-webgui)

[Switch between wifi modes](https://github.com/billz/raspap-webgui/issues/300)

[Use wifi instead of ethernet for internet](https://github.com/billz/raspap-webgui/wiki/FAQs#how-do-i-prepare-the-sd-card-to-connect-to-wifi-in-headless-mode)

[Alternative script for simultaneous wifi mode](https://github.com/lukicdarkoo/rpi-wifi/blob/master/configure)

