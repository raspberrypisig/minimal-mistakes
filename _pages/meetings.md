---
title: Meetings
layout: archive
permalink: /meetings/
---

{% assign meetings = site.meetings %}
<ul>
{% for meeting in meetings %}
<li>{{ meeting.title }}</li>
{% endfor %}
</ul>
<div>
<h2>Slug</h2>

{% for meeting in meetings  %}
 {{ meeting | split "-" | jsonify }}
{% endfor %}
</div>
<div>
<h2>Meeting jsonify</h2>
{% for meeting in meetings %}
  {{ meeting | jsonify }}
{% endfor %}
</div>
