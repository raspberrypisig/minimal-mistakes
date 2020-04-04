---
title: Install MotionEyeOS on Raspbian
image: https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT965BbBLgrS1LK6WkDt_L_AhwGaMtWh6Qje3aS-rLpipGrLoSH
excerpt: MotionEye GUI on Rapsbian
description: motioneye script
categories: raspbian
---

MotionEye is a popular software that is used to turn your raspberry pi into a CCTV.

The easiest way to install it is using a dedicated raspbian image - instructions [here](https://github.com/ccrisan/motioneyeos/wiki/Installation)

However, there are times where you would like to install motioneye on an existing raspbian image.

I created a script to do just that (Works with different flavours of Raspbian - Buster, Stretch, Jessie):

```sh
curl -L http://bit.ly/38ObQp3|sudo -E bash -
```

Dont need to be root to run this script

After install complete, motioneye will be available at

http://IP_ADDRESS_RPI:8765

username:admin
no pwd

