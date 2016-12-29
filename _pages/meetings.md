---
title: Meetings
layout: archive
permalink: /meetings/
---

{% assign meetings = site.meetings   %}
<ul>
{% for meeting in meetings %}
<li>{{ meeting.title }}</li>
{% endfor %}
</ul>
