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

Once the flow is configured, we are to deploy and run our first flow in NodeRED.

![Example flow NodeRED](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-example-flow9.jpg)

When you click **Deploy** at the top, nothing happens. To get you program to run, click on the left-side of the Inject node, which triggers a message that is sent to the next node. You should see the output on the Debug tab to the right.

To understand what the connection between the two nodes mean, we have to look a the concept of message passing.

#### Messages

Nodes generally execute when they receive an incoming message (ie. the node preceding it sends it something). You usually use the inject
node to start the ball rolling, but there are others such as serial,mqtt that already run when you hit the Deploy button.


So that was a simple example, let's just add one more complication.

Write a program as follows: It should print the following:

"
Hello World!
Your Public IP Address is xxx.xxx.xxx.xxx
"

```javascript
var context = this.context();
var count = context.get('count') || 0;
count = (count == 0)? 1:0;
context.set('count',count);
```

