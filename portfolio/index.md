---
title: Portfolio
---

Portfolio
=========

{% assign projects = site.projects | sort: "interest" | reverse %}

{% for project in projects %}
<section class="project">
	{{ project.content }}
</section>
{% endfor %}