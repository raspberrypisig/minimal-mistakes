Raspberry Pi ethernet connections sometimes go down so its connection to the internet, ssh etc is lost. 
This script helps monitor and correct if this occurs. Could be really useful if you are running a Pi 24/7 for control or monitoring purposes.
The credit goes to : https://samhobbs.co.uk/2013/11/fix-for-ethernet-connection-drop-on-raspberry-pi
The script checks if eth0 is up and if so logs "Ethernet OK" to a log file in your home folder. If it is down it executes an ifup eth0 and then logs execution of the command.
The webpage shows now to set the permissions and to add it to your crontab for a regular check at you chosen interval
