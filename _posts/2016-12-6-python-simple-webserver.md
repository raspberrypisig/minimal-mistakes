---
title: Inbuilt webserver using python
categories: python webserver
excerpt: Alternative to Apache and Nginx
image: http://cdn.osxdaily.com/wp-content/uploads/2010/05/python-web-server.jpg
---

Sometimes, you just want to quickly fire up a webserver serving files in the current directory, whether on the PI or on your PC. If you have python installed, you are in luck.
Python comes with a built-in webserver module.

#### Python 2
python -m SimpleHTTPServer 80

#### Python 3
python -m http.server 80

If you then fire up a web browser and type http://localhost:80 or if you are on another computer 
http://<<IP ADDRESS>:80  If there is something already on port 80, just choose another port. 

I have found this incredibly useful for 2 purposes:
1. Just want to quicky look serve HTML files scattered around different places on my computer
2. Transfer files between my PC and an ebook reader



