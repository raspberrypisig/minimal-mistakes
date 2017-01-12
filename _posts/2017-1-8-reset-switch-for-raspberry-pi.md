---
title: Reset Switch for Raspberry Pi
image: https://blog.adafruit.com/wp-content/uploads/2014/10/RasPiBPlusResetHeader.jpg
excerpt: This would be handy dandy but is it doable in Pi 3?
categories: hardware
---

The RUN header on the Raspberry pi 3 is now located near pin #39

![RUN Header](https://github.com/raspberrypisig/raspberrypisig.github.io/edit/master/_posts/2017-1-8-reset-switch-for-raspberry-pi.md)

Found lots of reference for Raspberry Pi 2, but would love to know how applicable it is to Raspberry Pi 3.

They all involve solder a two-pin header on the pinouts marked RUN, then connecting that to a momentary switch. I was also looking for fancy solutions like Wake-On-Lan, which I don't think the Pi supports. Or perhaps using an always-on Pi zero to somehow do it.

## Links
[Adafruit](https://blog.adafruit.com/2014/10/10/making-a-reset-switch-for-your-raspberry-pi-model-b-run-pads-piday-raspberrypi-raspberry_pi/)

[MakeUseOf](http://www.makeuseof.com/tag/add-reset-switch-raspberry-pi/)

[Another One](http://www.raspberry-pi-geek.com/Archive/2013/01/Adding-an-On-Off-switch-to-your-Raspberry-Pi)

[Gadget Magazine](https://www.gadgetdaily.xyz/pipanther-interview/)

## Shutdown Scripts
* [Shutdown script 1](https://github.com/g0to/misc_scripts/blob/master/raspi_gpio_actions.sh)
