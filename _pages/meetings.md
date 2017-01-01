---
title: Meetings
layout: archive
permalink: /meetings/
classes: meetings
---

{% assign meetings = site.meetings | sort: "order" | reverse %}

<div class="container">
    <div class="row">    
        <div class="card-container">
          {% for meeting in meetings %}  
            <div class="card">
                <div class="card-image">
                    <img class="img-responsive" src="http://lorempixel.com/555/300/sports">
                    
                </div><!-- card image -->
                
                <div class="card-content">
                    <span class="card-title">{{ meeting.title }}</span>                    
                    <button type="button" class="btn btn-custom pull-right" aria-label="Left Align">
                        <i class="fa fa-ellipsis-v"></i>
                    </button>
                </div><!-- card content -->
                <div class="card-action">
                    <a href="{{ meeting.url }}" target="new_blank">Read More</a>
                </div><!-- card actions -->
                <div class="card-reveal">
                    <span class="card-title">{{ meeting.title }}</span> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    
                    <ul>
                      <li> {{ meeting.dotpoint1 }} </li>
                      <li> {{ meeting.dotpoint2 }} </li>
                      <li> {{ meeting.dotpoint3 }} </li>
                    </ul>
                    
                </div><!-- card reveal -->
            </div> <!-- card -->
            {% endfor %}
        </div>
    </div>
</div>

