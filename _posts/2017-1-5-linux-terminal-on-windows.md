---
title: Linux Terminal on Windows 10
excerpt: My current favourite is Bash on Ubuntu on Windows
image: https://fossbytes.com/wp-content/uploads/2016/03/windows-10-bash-shell-3.jpg
categories: linux
---
In the past, when you asked some the question: 

> How do I get a linux terminal in windows?

The answer was usually Cygwin or a variant thereof. But I found cygwin cumbersome.

But now we are spoilt with an abundance of choice (not complete list below). 

# Git for Windows
For a long time, I had been using Git for Windows (specifically git bash). I still use it quite a lot today, specifically to upload to github.
The great thing I like about Git Bash is that not only can I run linux commands, but also open windows programs as well.The C:\ directory would be visible as /c
It is fairly lightweight. I found that to be useful, you need to add other linux utilities like GnuWin (adds commands like wget, make) and MinGW(c/c++ compiler).
[Download here](https://git-scm.com/downloads)

# Mobaxterm
Bill S. recommened this program to me for SSH. The more I investigate this program, the more I uncover. The number one feature for me is that 
X11 forwrding is enabled automatically by default. This means that I can launch a desktop environment on PC remotely just by typing startx.
[Download here](http://mobaxterm.mobatek.net/download-home-edition.html)

# Bash for Ubuntu for Windows
Brilliant, and will get better.
[Download here](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)

There are now NO excuses for not having a functional linux terminal installed on windows in my view.

