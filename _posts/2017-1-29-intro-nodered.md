---
title: Intro to NodeRED
excerpt: Forget python or scratch, this is the real deal
description: NodeRED for beginners
image: https://cdn-learn.adafruit.com/guides/images/000/000/483/medium800/node-red-screenshot.png
categories: iot
---

If scratch is "Programming for kids", then NodeRED is "programming for adults that love Scratch". I'd venture to say that once you learn 
the NodeRED way, you will kiss goodbye ever wanting to write Python again!


To begin, start NodeRED from Pi by selecting Programming->NodeRED from the top menu. Once it is done, open Chromium browser and type 
**http://localhost:1880** . Let's write a NodeRED program.

## NodeRED Concepts

#### Flow
A NodeRED program is called a flow. Here is an example of a flow.

![Example Flow Hello World](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow1.jpg)

You can run a number of flows at the same time. You export and import flows that others have written or that you want to share with others.

#### Node
In the example above, we have dragged and dropped the **Inject** and **Debug** onto the design area and connected them together by clicking 
on the white boxes on the nodes. 

Here is how the Inject node is configured.

![Inject node NodeRED](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow2.jpg)

The inject node is useful for initiating the message flow between nodes. 

Here is how the Debug node is configured.
![Debug node NodeRED](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow4.jpg)

The complete flow can be downloaded [here](https://raw.githubusercontent.com/raspberrypisig/raspberrypisig.github.io/master/assets/images/noderedexample.flow)

Once the flow is configured, we are to deploy and run our first flow in NodeRED.

![Example flow NodeRED](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow9.jpg)

When you click **Deploy** at the top, nothing happens. To get you program to run, click on the left-side of the Inject node, which triggers a message that is sent to the next node. You should see the output on the Debug tab to the right.

To understand what the connection between the two nodes mean, we have to look a the concept of message passing.

#### Messages

Nodes generally execute when they receive an incoming message (ie. the node preceding it sends it something). You usually use the inject
node to start the ball rolling, but there are others such as serial,mqtt that already run when you hit the Deploy button.

To understand what is really happening, let's modify our example slightly.

![Modified example NodeRED](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow5.jpg)

![Modified example debug](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow6.jpg)

![Modified example inject](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow7.jpg)

![Modified example complete](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow8.jpg)

Let's complicate a bit more.

>Write a program as follows: It should print the following:
>
>**Hello World!**
>
>**Your Public IP Address is xxx.xxx.xxx.xxx**
>

We will start with a detour and write the program in python first.

```python
import requests

ipaddress = requests.get("http://wtfismyip.com/text");
print("Hello World!")
print("Your public IP address is ", ipaddress.text)
```

Now for the NodeRED version.

![NodeRED version of final example](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow10.jpg)

Here we introduce three new nodes: **function**, **http request** and **template**.

![NodeRED version of final example](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow11.jpg)

![NodeRED version of final example](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow12.jpg)

![NodeRED version of final example](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow13.jpg)

![NodeRED version of final example](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow14.jpg)

![NodeRED version of final example](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow15.jpg)

The final version can be downloaded [here](https://raw.githubusercontent.com/raspberrypisig/raspberrypisig.github.io/master/assets/images/noderedexample.flow)

# Useful Resource
[Import a NodeRED flow](http://developers.sensetecnic.com/article/how-to-import-a-node-red-flow/)
[NodeRED online free instance with FRED](https://fred.sensetecnic.com/)
