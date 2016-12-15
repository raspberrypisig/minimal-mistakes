---
title: Adventures in Bluetooth Low Energy - using gatttool
categories: bluetooth BLE
excerpt: Talk Bluetooth Low Energy from the command line on the Pi 
image: https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/gattool.jpg 
---
As a NOOB, introducing myself to various rPi physical computing like GPIO, I2C, SPI, serial and bluetooth.
Today we start with Bluetooth Low Energy. I want my Raspberry Pi 3 to talk to my Genuino 101 (known as Arduino 101 in USA). Both have BLE.
A while back, came across a Android app called BLE101. This allowed an Android phone/tablet to talk to a Arduino 101. The sketch to put on the 
Arduino is here https://github.com/raspberrypisig/BLE101/blob/master/ble101/ble101.ino

To turn bluetooth on, make sure Serial is enabled in Preferences->Raspberry Pi Configuration.

So now I want to play on the command line to turn on/off the LED (pin 13) on the Arduino. Here is how I did it:

```bash
$ hcitool dev
$ sudo hcitool lescan
$ gatttool -I
   [        ][LE]> help
   [        ][LE]> connect 98:4F:EE:0D:0A:6B
   [        ][LE]> characteristics
   [        ][LE]> char-read-hnd 0x037
   [        ][LE]> char-write-cmd 0x037 01
   [        ][LE]> char-read-hnd 0x037
```


