---
title: Funnel traffic through TOR gateway
image: https://blog.adafruit.com/wp-content/uploads/2014/11/NewImage263.png
excerpt: sneak around firewalls and gremlins in the network using raspberry pi
description: raspberry pi tor gateway
categories: networking
---

SPOILER ALERT: This blog has useful bits, and plenty of ranting and raving.

I've been frustrated at the club the last couple of weeks with certain websites not working, such as RealVNC and NodeJS deb repositories
for Raspberry Pi. Normally, in these circumstances, I normally use the Tor Browser to get around these issues.

My latest PI project involves automating the process from going from a fresh installation of Raspbian, to producing a "kitchen-sink" image that
contains all the software and correct settings that make it easier to get going. I'm using a piece of software called Ansible from Redhat.
It is written in Python. It allows you to run a series of "playbooks" on your PC. Those playbooks do things like install software, run scripts
on a number of target devices, including the Raspberry Pi. 

Anyway, I was trying to update the NodeJS installation on raspberry pi, which involved adding new apt repositories for NodeRED, but alas, they 
were failing.

So in my rage, I decided to attempt to turn the Raspberry Pi into a WIFI access point and TOR gateway combo, meaning when you connect to the WIFI
access point, all traffic incoming and outgoing will be funnelled through the TOR network.

I'm still working on it, details will made available on completion.


## Links
[Ansible from RedHAT](https://www.ansible.com/red-hat)

[Tor Browsing](https://www.lifehacker.com.au/2017/03/how-to-anonymise-your-browsing-with-a-tor-powered-raspberry-pi/)

[Tor Adafruit guide](https://learn.adafruit.com/onion-pi/install-tor)
