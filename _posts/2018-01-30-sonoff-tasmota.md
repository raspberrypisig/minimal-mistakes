---
title: Flash New Firmware on Sonoff Device
categories: iot
excerpt: Load new firmware to any Sonoff device
description: Replacing the original with more capable firmware incl. MQTT.
image: https://github.com/raspberrypisig/raspberrypisig.github.io/blob/master/assets/images/Selection_173.png
---
In this case we are using the Sonoff POW which comes with a chip HLW8… to provide current and voltage measuring functionality.

## ** You will need: **
a four pin header to be soldered onto the Sonoff PCB
a FTDI-usb adapter to connect the Sonoff device to your PC/laptop.

## ** Download: **

Arduino IDE software: 

Sonoff firmware package: 

## ** Details **

First we will get the Sonoff ready for uploading the new firmware.
Ensure there is no power to the device so that you remain alive throughout this project.

Prise open the case with a small screwdriver or strong fingernails.
Using a soldering iron solder the header into the four holes at the end of the Sonoff PCB furthest from the wire connection terminals.  Inspect carefully to ensure there are no solder brodges and that the joint has good connection for good electrical conductivity.

Next we  will setup the software on the PC.
Follow these instructions for  installing the IDE and note the location details for the sketchbook folder.

** Fire up the Arduino IDE. **
Go to File → Preferences and paste this URL http://arduino.esp8266.com/stable/package_esp8266com_index.json
into the field “Additional Boards Manger URLs”.

Go to Sketch → Include Library → Manage Libraries.

You will need to add:
PubSubClient
ArduinoJson.h
ESP8266WebServer
LiquidCrystalI2C

Locate PubSubClient.h in your folder sketchbook/libraries/PubSubClient.
Using a text editor change the line to read:
#define MQTT_MAX_PACKET_SIZE 1000
(previous was 128 or similar).

Change the TIMEZONE in user_config.h to 10 for GMT +10.
In the same file change the wifi parameters 
#define STA_SSID1
#define STA_PASS1

to suit your wifi requirements. Also change WIFI_WPSCONFIG to WIFI_RETRY on line 60.

From the IDE Tools menu check the following are selected:
Board: “GenericESP Module”
Flash Mode: “DOUT”
Flash Size: “1M (No SPIFFS)”
Flash Frequency: “40 MHz”
CPU Frequency: “80 MHz”

Now we are ready to connect up the Sonoff to your PC/Laptop but there is a trick so stay tuned.

There are two ways to do this.
a) Connect three wires GND, TX and RX between the FTDI adapter and the Sonoff PCB header. Press and keep holding down the button on the Sonoff device. Then connect the VCC wire to put power onto the Sonoff.  Hold the button for a further 2 seconds abd release.

b) With all four wires connected between the FTDI and the Sonoff, hold down the button on the Sonoff and then push the FTDI into the ueb port of the PC/Laptop.

The above puts the Sonoff microprocessor into Flash mode so that it can receive the upload of the firmware file.

We are ready to upload the firmware but first 
* check the Port is selected
* start the Serial Monitor – so you can see how the processor is responding.

Now you can click on the Upload option in the Arduno IDE .  This commences the compile step and the flashing of the file will follow. This will take a few minutes.

When the writing of the Flash has completed the Serial Monitor should show that a connection has been established to your wifi router. If it doesn’t do this after several seconds disconnect the FTDI from the PC, re-connect and re-open the Serial Monitor. 

When you can see activity in the Serial Monitor go to Configration → Module and select the correct unit.  In my case it was a Sonoff POW replacing the defaulkt Sonoff Basic.  Save and return to the Main Menu.

* Select Configration → Other and select the MQTT Enable tick box.  Save the config change and return to the main Menu.

* Select Configration → MQTT.  In the Host field change the text to the IP address of your Raspberry Pi or laptop where you may want to run an MQTT broker or collect info in a database. Save the config change.

* Select Configration → Logging and change the Telemetry Interval to something appropriate for your application.  For current and power this might be 30 seconds or even shorter.  If you are monitoring temperature then something longer such as 300 seconds may be more appropriate.  Again save the config changes.

The menu item Console allows you to see the MQTT message topic format as well as other status information.
There are many options from here so you can explore endlessly to uncover the capabilities of this device and the new firmware.

One good option for dynamic display of the variables being logged is **Node-Red** and its Dashboard. Mohan has provided a copy of a Flow file that could be used for this.

If you wish to send the data to charting websites you can visit a number of options here:
http://moxd.io/2015/10/public-mqtt-brokers/
This list can be extended with Thingspeak, EasyIoT, Cayenne myDevices etc..

To store the data locally on your Raspberry Pi you could choose between InFluxDB with Grafana or RrdTool for a database manager.  The latter option may require more manual setup to achieve nice graphs.

Here is a python script to store the Sonoff POW “Power” data stream to rrdtool.

Here is another one to toggle the Sonoff the relay on and off at intervals.

Have fun exploring!


