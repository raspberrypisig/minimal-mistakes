---
title: Connect to Raspberry Pi without knowing IP Address
image: https://yt3.ggpht.com/-2fDBlhe14zQ/AAAAAAAAAAI/AAAAAAAAAAA/DBU8ml1ysDA/s900-c-k-no-mo-rj-c0xffffff/photo.jpg
excerpt: Useful especially when you are travelling with your Pi 
categories: networking
---
If you don't know the IP address of your Raspberry Pi, how can you connect to it?

One way is to download a program like Advanced IP Scanner [here](http://filehippo.com/download_advanced_ip_scanner/)
and find the IP address.

![Advanced IP Scanner](https://raw.githubusercontent.com/raspberrypisig/raspberrypisig.github.io/master/assets/images/advancedipscanner.jpg)

(Remember to untick View->Show Dead)

The other method relies on you knowing the hostname of the Pi. How do you do that? Open a terminal.

![Find hostname of Pi](https://raw.githubusercontent.com/raspberrypisig/raspberrypisig.github.io/master/assets/images/hostnamepi.jpg)

The default user name is pi but more importantly the default hostname is raspberrypi.

If you install a program called Bonjour Print Services [here](https://support.apple.com/kb/dl999?locale=en_US) (be careful in the installation) - then
you simply need to use **raspberrypi.local**  instead of the IP address. 

If you have already had iTunes installed, you're all set and you don't need to install Bonjour Print Services.


