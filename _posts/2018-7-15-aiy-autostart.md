---
title: AIY google voice autostart on boot
image: https://www.modmypi.com/image/cache/catalog/rpi-products/MMP-1137/DSC_0191-747x569.jpg
excerpt: custom startup script for AIY voice project
description: voice systemd AIY
categories: voice
---

Steps required to get AIY voice working without manually starting the google assistant demo program.

1.
In a Terminal shell, type
``` 
sudo leafpad /etc/systemd/system/voice_recognizer.service 
```
It will open Text Editor with an empty file. Put the following contents
 
```
[Unit]
Description=voice recognizer
After=network.target ntpdate.service

[Service]
Environment=DISPLAY=:0
Environment=PATH=/home/pi/AIY-projects-python/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
ExecStartPre=/bin/sleep 60
ExecStart=/usr/bin/python3 -u src/main.py
TimeoutSec=infinity
WorkingDirectory=/home/pi/AIY-projects-python
StandardOutput=inherit
StandardError=inherit
Restart=always
RestartSec=60
User=pi

[Install]
WantedBy=multi-user.target
``` 
 
2. Save the file (File->Save) and exit the Text editor(File->Quit). 

3. To confirm you did steps 1 and 2 correctly, type the following:
```
cat /etc/systemd/system/voice_recognizer.service
```
It should print out the contents of the file.
4. Type the following:
```
cp /home/pi/AIY-project-python/src/examples/voice/assistant_library_with_button_demo.py /home/pi/AIY-project-python/src/main.py
```
5. Type the following commands:
```
sudo systemctl daemon-reload
sudo systemctl enable voice_recognizer
sudo reboot
```

5. The system will reboot. The startup script will take 2 minutes to come into action,
after which time the button should start glowing.


