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

Let's look at the steps required to add the component called **BOM Australia Sensor**([link here](https://home-assistant.io/components/sensor.bom/)).

# Configuration
All configuration is done with YAML files. The main configuration file is called configuration.yaml
Remove the following from the file:

```yaml
# Weather prediction
sensor:
  - platform: yr
```

And replace it with:

```yaml
sensor:
  - platform: bom
    station: IDV60901.94870
    name: Moorabbin Airport
    monitored_conditions:
      - air_temp
      - wind_spd_kmh
      - rel_hum
      - rain_trace
    
```
I also commment out the introduction component
```yaml
# Show links to resources in log and frontend
#introduction:
```

And the sun component:
```yaml
# Track the sun
#sun:
```

What I end up with is the following:

![Home Assistant Badges](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/homeassistant-weather.jpg)

What the? The **entities** appear as badges by default - not the desired effect but useful since it is pulling in the right data from BOM.

To fix this, we use something called groups.

# Groups
Group is a built-in component [link here](https://home-assistant.io/components/group/)

To use it, edit the configuration file called groups.yaml, then add the following

```yaml

  default_view:
    view: yes
    icon: mdi:home
    entities:
      - group.bom

  bom:
    name: Moorabbin Airport Weather
    entities:
      - sensor.bom_moorabbin_airport_air_temp_c
      - sensor.bom_moorabbin_airport_rain_today
      - sensor.bom_moorabbin_airport_relative_humidity
      - sensor.bom_moorabbin_airport_wind_speed_kmh
```

And this is the result after restarting Home Assistant

![Home Assistant Groups](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/homeassistant-bom-groups.jpg)

Where did those entities come from?

# State
Under Developer tools click State (<> icon)

![Home Assistant Dev State](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/homeassistant-devstate.jpg)

# Wrap Up
In subsequent articles, we look at interfacing real-world devices, internet services and writing automation scripts.






