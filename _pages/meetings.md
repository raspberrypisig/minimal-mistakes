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
<div>
{% for meeting in meetings %}
{{ meeting | jsonify }}
{% endfor %}
</div>
