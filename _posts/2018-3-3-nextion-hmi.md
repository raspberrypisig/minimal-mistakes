---
title: Nextion HMI touchscreen
image: https://www.itead.cc/wiki/images/thumb/d/d3/Nextion.png/600px-Nextion.png
excerpt: TFT touchscreen with editor software
description: tft hmi raspberry pi
categories: iot
---
![Nextion with Raspberry PI](https://cdn.instructables.com/F3J/G5FC/IM28XX1R/F3JG5FCIM28XX1R.LARGE.jpg)

Neil S. told me about this.

It has a serial(RX/TX) interface. Also has a SD card interface.

The interesting thing about this is that it comes with Nextion editor, you write the user interface on the PC, then upload to a SD card,
and put the SD card on the unit. 

![Nextion editor](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/1023750975/original/2015-06-04_-_Nextion_Editor_-_Resolution_Horizontal_Vertical.png?1433428059)

I presume what that means is that is the following:
- connect an Arduino, esp8266 or raspberry pi via serial interface
- create desired user interface on the PC with Nextion editor and upload to a SD card 
- When you click a button or move a slider on the touchscreen, it sends a message on the serial interface to the microontroller for
  further actions.

# Links
[Nextion](https://www.itead.cc/wiki/Nextion_HMI_Solution)

[Nextion editor](https://nextion.itead.cc/resources/download/nextion-editor/)



