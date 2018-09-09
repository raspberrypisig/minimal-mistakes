---
title: Git support in nodered
image: https://github.com/raspberrypisig/raspberrypisig.github.io/raw/master/assets/images/nodered-projects.jpg
excerpt: Projects introduced in NodeRED
description: nodered git github
categories: nodered
---

Latest version of NodeRED has support for Projects (instead of everything in a single flow file), and git support for versioning.

It is not enabled by default. On the raspberry pi, you need to go to /home/pi/.node-red/settings.js and put the following before the final closing curly brackets.

```javascript
// Customising the editor
    editorTheme: {
        projects: {
            // To enable the Projects feature, set this value to true
            enabled: true
        }
    },
```

If all goes well, you should see a Projects History Tab.

I will detail in a future post how to use this feature and also the steps needed to update your flows to github.


