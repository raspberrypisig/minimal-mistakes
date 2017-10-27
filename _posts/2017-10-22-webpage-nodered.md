---
title: Serve webpages to NodeRED
image: https://raw.githubusercontent.com/node-red/node-red-node-swagger/master/readme_images/Capture_00.PNG?raw=true
excerpt: Alternative route to Dashboard in NodeRED
description: webpages NodeRED
categories: nodered
---
![NodeRED HTTP In](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-httpin.jpg)
![NodeRED HTTP Response](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-httpresponse.jpg)
![NodeRED Template](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-template.jpg)

The dashboard module for NodeRED is great, but it does have its limitations. 

Fortunately, there is an alternative approach to displaying visualisations. It involves using the *http* and *http-response* modules
to serve webpages. It then allows you to utilise any javascript library such as those provided by Google and many many others.

Here is an example:

![NodeRED Simple Webpage](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-simplewebpagesetup.jpg)

Shove the following code in the template node:

```html
<!doctype html>
<html>
<head>
<script src="https://cdn.anychart.com/releases/8.0.1/js/anychart-bundle.min.js"></script> 
<link rel="stylesheet" href="https://cdn.anychart.com/releases/8.0.1/css/anychart-ui.min.css">    
<style>
.anychart-credits {
  display:none;
}


</style>
</head>    
<body>



<div id="container" style="width:800px;height:400px;"></div> 
<button onclick="data.remove(); data.insert(100);">Set value to 100</button>
<button onclick="data.remove(); data.insert(200);">Set value to 200</button>
 
<script>
var data;
anychart.onDocumentReady(function () {
    var initialData = [380];
    //https://jsfiddle.net/anycharts/jqqgf5r1/
	//var lineargauge = anychart.fromJson(json);
	lineargauge = anychart.gauges.linear();
    data = anychart.data.set([initialData]);
	lineargauge.data(data);
	//data = anychart.data;
	var fScale = lineargauge.scale();
	fScale.minimum(0);
    fScale.maximum(400);
    //fScale.ticks().interval(10);
    //fScale.minorTicks().interval(2);   
	
	var axisLeft = lineargauge.axis(0);
	axisLeft.minorTicks(true)
    axisLeft.minorTicks().stroke('#cecece');
	 axisLeft.width('0');
	
	lineargauge.title("Boo(initial value 380)");
    lineargauge.layout("vertical");
	
	//VARIATION 1
	lineargauge.addPointer(0);
	
	//VARIATION 2
	//var bar = lineargauge.bar();
    //bar.enabled(true);
    //bar.dataIndex(0);
	
	//VARIATION 3
	var marker = lineargauge.marker(0);
	marker.enabled(true);
    marker.type('triangle-left');
    marker.zIndex(100);
	marker.dataIndex(0);
	marker.color("#000");


	
	
	
	lineargauge.container("container");
	lineargauge.draw();
});
</script>
</body>
</html>
```

The result after you go to http://localhost:1880/chartnew should be this:

![NodeRED Anycharts](https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-usinganycharts.jpg)



