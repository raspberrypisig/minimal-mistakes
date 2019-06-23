---
title: Backup uploaded arduino program from a raspberry pi
image: https://1.bp.blogspot.com/-Y_054tkII7o/Uo2sMMpjCxI/AAAAAAAAAA0/h5odn9v7pb8/s320/hex_format.jpg
description: Using the command line program avrdude
excerpt: avrdude backup arduino raspberry pi
categories: arduino
---

Have you ever had the scenario where you start playing with an Arduino after not playing with it for a while, 
but have no idea what program is on it?

You can use an raspberry pi to retrieve the contents. Do remember though it is in executable format, so you won't be able to get
your sketch back word for word, but you will have the ability to back it up to disk and restore it at a later date.

The instruction below are for an Arduino Uno. You will need to adjust the commands for other Arduinos.

# Pre-requisites

Install avdrude on the Raspberry Pi

```
sudo apt install -y avrdude
```

Also make sure that the **dialout** group is added to the **pi** user

```
sudo usermod -a -G dialout pi
```

Reboot after this command is executed.

#  Save/backup the contents of uploaded Arduino binary to a file

```
avrdude -v  -p atmega328p -carduino -P /dev/ttyACM0 -b 115200 -D -Uflash:r:backup.bin:r
```

# verify contents of uploaded Arduino binary

```
avrdude -v  -p atmega328p -carduino -P /dev/ttyACM0 -b 115200 -D -Uflash:v:saved-program.bin:r
```

# write/restore backup to Arduino (dangerous, proceed with caution)

```
avrdude -v  -p atmega328p -carduino -P /dev/ttyACM0 -b 115200 -D -Uflash:w:saved-program.bin:r
```


