---
title: Disable SSH warning
image: https://www.raspberrypi.org/app/uploads/2016/11/warn.png
excerpt: Disable annoying SSH warning
description: ssh raspbian warning
categories: raspbian
---

This happens because the user **pi** has the default password of **raspberry**. 

Option 1 is to update password. Option 2 is hack away.

```
sudo rm -rf /etc/profile.d/sshpwd.sh
sudo rm -rf /etc/xdg/lxsession/LXDE-pi/sshpwd.sh
```
