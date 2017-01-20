---
title: SSH on New Raspbian Image
categories: raspbian
excerpt: SSH is disabled by default on new Raspbian 
image: /assets/images/enablessh.jpg
---
This is a nasty one. SSH is *disabled* by default in latest raspbian image (dated 25 Nov 2016).
There is a workaround. Either enable it through Raspberry Pi Settings Manager or place an empty file called ssh on the root of the SD card.
