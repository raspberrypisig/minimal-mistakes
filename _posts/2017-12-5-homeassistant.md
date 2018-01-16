---
title: Home Assistant
image: https://camo.githubusercontent.com/ba21a6029ccb81d4a26b1ad9c198e61d01a07e7a/68747470733a2f2f7261772e6769746875622e636f6d2f686f6d652d617373697374616e742f686f6d652d617373697374616e742f6465762f646f63732f73637265656e73686f742d636f6d706f6e656e74732e706e67
excerpt: Home Automation solution for Pi
description: home automation raspberry pi
categories: iot
---
![Home Assistant](https://camo.githubusercontent.com/99578d7bca06d9c2973c2564e06f1ca444a4cce1/68747470733a2f2f7261772e6769746875622e636f6d2f686f6d652d617373697374616e742f686f6d652d617373697374616e742f6d61737465722f646f63732f73637265656e73686f74732e706e67)

Home Assistant is an exciting opensource Home Automation solution. Steep learning curve, YAML configuration-based, solution is written in
Python 3.

# Installation
Raspberry Pi 3 is a key target for Home Assistant. Installation is complicated. You have two paths to choose from:

- a preinstalled locked down Raspbian image called hass.io (meant to be a turn-key, easily updateable version)
- Install in a Python 3 virtualenv environment (My preferred method, instructions [here](https://homeassistant.io/docs/installation/raspberry-pi/) )

If you get it working, Home Assistant runs on port 8123.

![Home Assistant Post Install](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/homeassistant-postinstall.jpg)

# Configuration
All configuration is done with YAML files. The main configuration file is called configuration.yml

