---
title: Native USB/SSD boot on Raspberry Pi 4
image: https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/rpieeprom.jpg
description: usb ssd rpi4
excerpt: A long-awaited feature
categories: raspbian
---

It is now possible to boot from a USB or SSD drive without using an SD card on a Raspberry Pi 4. The procedure outlined
below is still in beta, in future the process will be much easier. You can read more about it [here](https://github.com/raspberrypi/rpi-eeprom/releases/tag/v2020.05.28-137ad)


1. Download [https://github.com/raspberrypi/rpi-eeprom/releases/download/v2020.05.28-137ad/rpi-boot-eeprom-recovery-2020-05-28-vl805-000137ad-BETA.zip](https://github.com/raspberrypi/rpi-eeprom/releases/download/v2020.05.28-137ad/rpi-boot-eeprom-recovery-2020-05-28-vl805-000137ad-BETA.zip)
2. Create an empty FAT-formatted SD card and extract the contents of the zip file from step 1
3. Boot Raspberry Pi 4 with SD Card. If successful, green led blinks forever and with HDMI output you get a green screen. 
4. Unplug Raspberry Pi 4 and eject the SD card.
5. Download Raspberry Pi OS (previously Raspbian) 
5. Use etcher/win32diskimager/RaspberryPImager as normal, but this time the target is not a SD card, but a USB/SSD drive.
6. Download [https://github.com/raspberrypi/rpi-eeprom/releases/download/v2020.05.28-137ad/usb-msd-boot-firmware.zip](https://github.com/raspberrypi/rpi-eeprom/releases/download/v2020.05.28-137ad/usb-msd-boot-firmware.zip)
7. Extract and replace files on USB drive.
8. Boot.

BEFORE:

```text
$ vcgencmd bootloader_version 

Sep 10 2019 10:41:50
version f626c772b15ba1b7e0532a8d50a761b3ccbdf3bb (release)
timestamp 1568112110

$ vcgencmd bootloader_config

BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
FREEZE_VERSION=0

AFTER:

$ vcgencmd bootloader_version

May 28 2020 08:22:33
version 7b40bda408e631812ad00ea210b149e7141d68ec (release)
timestamp 1590650553

$ vcgencmd bootloader_config

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
DHCP_TIMEOUT=45000
DHCP_REQ_TIMEOUT=4000
TFTP_FILE_TIMEOUT=30000
ENABLE_SELF_UPDATE=1
DISABLE_HDMI=0
SD_BOOT_MAX_RETRIES=1
USB_MSD_BOOT_MAX_RETRIES=1
BOOT_ORDER=0xf41
```

For me, the USB boot didn't work the first. Press off, then on, voila.

