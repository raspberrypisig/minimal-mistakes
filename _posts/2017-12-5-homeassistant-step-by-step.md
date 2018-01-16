---
title: Home Assistant Step By Step
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

# Components
In any home automation solution, you want to interface devices and internet services. This is done with [components](https://home-assistant.io/components/#all). The components listed here are maintained officially by the creators of Home Assistant.

![Home Assistant Components](https://raw.githubusercontent.com/raspberrypisig/raspberrypisig.github.io/master/assets/images/homeassistant-components.jpg)

Thing to note about the picture above:
- Components have "categories" such as (Home Assistant considers them higher-level components):
  * alarms
  * sensors
  * switches
  * weather
- a particular component belonging to the category is said to be an available "platform" of the category.

Let's look at an example. Say we are interested in displaying BOM weather data. There are 2 components available.

![BOM Weather Data Home Assistant](https://raw.githubusercontent.com/raspberrypisig/raspberrypisig.github.io/master/assets/images/homeassistant-bom.jpg)

Let's look at the steps required to add either component to Home Assistant.






# Configuration
All configuration is done with YAML files. The main configuration file is called configuration.yml

