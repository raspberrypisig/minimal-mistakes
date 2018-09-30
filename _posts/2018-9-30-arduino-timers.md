---
title: Arduino Timer Calculator
image: https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/Arduino_Timer_0_Modes.png
excerpt: Using timers in arduino without libraries
description: arduino timer calculator
categories: arduino
---

Arduino timers are tricky to set up, because they involve configuring registers on the AVR chip.

There is a great Arduino Timer calculator that writes the code for you [here](http://www.arduinoslovakia.eu/application/timer-calculator) !

Here is what is looks like. We specify the time interval in Hz (f=1/T), for example, 2 seconds = (1/2) = 0.5Hz

![Entering Arduino Timer Specifications](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/arduinotimercalculator.jpg)

The result is the following code:

<script src="https://gist.github.com/raspberrypisig/8bf856ae9b55bb433d4c11ac9540a881.js"></script>

## Arduino Timers In Detail
[Arduino Timers 101](https://www.robotshop.com/community/forum/t/arduino-101-timers-and-interrupts/13072)


