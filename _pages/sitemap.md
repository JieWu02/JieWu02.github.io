---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: false
---

{% include base_path %}

A list of the pages published on this site. An [XML sitemap]({{ base_path }}/sitemap.xml) is also available.

<h2>Pages</h2>
{% for post in site.pages %}
  {% if post.title and post.sitemap != false and post.redirect_to == nil %}
  {% include archive-single.html %}
  {% endif %}
{% endfor %}
