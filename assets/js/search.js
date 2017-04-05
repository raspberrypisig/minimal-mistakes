var searchDataPosts;
var searchDataMeetings;
var postsOrMeetings;

$(document).ready(function() {
  
  window.idx_posts = lunr(function () {
    this.field('title');
    this.field('excerpt');
    this.field('content', {boost: 10});
  });
  
  window.idx_meetings = lunr(function() {
    this.field('title', {boost:0});
    this.field('url');
    this.field('dotpoint1');
    this.field('dotpoint2');
    this.field('dotpoint3');
    this.field('content');
  });

  var data = $.getJSON('/searchposts.json');    
  $.getJSON('/searchposts.json', function(json) {
    searchDataPosts = json;
  });
  
  data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx_posts.add($.extend({ "id": index }, value));
    });
  });      
  
  var data2 = $.getJSON('/searchmeetings.json');    
  $.getJSON('/searchmeetings.json', function(json) {
    searchDataMeetings = json;
  });
  
  data2.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx_meetings.add($.extend({ "id": index }, value));
    });
  }); 
  
  
  function searchMeetings() {
    // event.preventDefault();
    var query = $("#search-box").val();    
    var results = window.idx_meetings.search(query);
    var resultsdiv = $("#search-results")
    resultsdiv.empty();
    var id;
    var fragment;
    var data;
    
    results.forEach(function(element) {
      id = element.ref;
      data = searchDataMeetings[id];
      
      fragment = '<div class="result-item">' +
                  '<div class="search-result-item-title"><a href="' + data.url + '">' + data.title + '</a></div>' +
                  '<ul class="search-result-item-excerpt"><li>' + data.dotpoint1 +  '</li><li>' + data.dotpoint2  +  '</li><li>'  +  data.dotpoint3  +   '</li></ul>' +
                  '</div>';  
      resultsdiv.append(fragment);
    });  
  }
  
  function searchPosts() {
    // event.preventDefault();
    var query = $("#search-box").val();    
    var results = window.idx_posts.search(query);
    var resultsdiv = $("#search-results")
    resultsdiv.empty();
    var id;
    var fragment;
    var data;
    
    results.forEach(function(element) {
      id = element.ref;
      data = searchDataPosts[id];
      
      fragment = '<div class="result-item">' +
                  '<div class="search-result-item-title"><a href="' + data.url + '">' + data.title + '</a></div>' +
                  '<div class="search-result-item-excerpt">' + data.excerpt + '</div>' +
                  '</div>';  
      resultsdiv.append(fragment);
    });  
  }
  
  $("#search-box").keydown(function(event) {
    searchPosts();    
  });
    

    

  });  
   
