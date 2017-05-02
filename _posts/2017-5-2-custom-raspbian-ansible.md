---
title: Custom Raspbian Image using Ansible
image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/220px-Ansible_logo.svg.png
excerpt: A durable solution for creating a custom Raspbian image
description: raspbian ansible
categories: raspbian
---
A while ago, I looked at PiBakery as a possible way of customizing a Raspbian image, but it had its limitation because you need to start
with a customized version of Raspbian.

I have been looking frantically for a more durable solution. In the DevOps developer community, they have used tools to provision computers
like Chef and Puppet, but I always found those tools overly complicated to use. Then arrives Ansible from RedHat.

I have created a project on github called raspberrypi-ansible.

- You start with a fresh installation of Raspbian.
- You run the Ansible playbook.
- You end up with a customized version of Raspbian with all sorts of goodies installed. 

You need access to a PC with Ubuntu on it. I tested it with Bash on Ubuntu on Windows (Windows 10), but should work for Ubuntu 16.04.1
You can boot Ubuntu from a USB stick and try the instructions below. Feedback and suggestions welcome. 

## Link
[Github repo for raspberrypi-ansible](https://github.com/mohankumargupta/raspberrypi-ansible)




