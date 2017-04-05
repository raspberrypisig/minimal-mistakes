var searchData;

$(document).ready(function() {
  
  window.idx = lunr(function () {
    this.field('title');
    this.field('excerpt');
    this.field('content', {boost: 10});
  });

  window.data = $.getJSON('/searchposts.json');    
  searchData = window.data;
  
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add($.extend({ "id": index }, value));
    });
  });      
  
  $("#search-box").keydown(function(event) {
    // event.preventDefault();
    var query = $("#search-box").val();
    var results = window.idx.search(query);
    var resultsdiv = $("#search-results")
    resultsdiv.empty();
    var id;
    var fragment;
    var data;
    
    results.forEach(function(element) {
      id = element.ref;
      data = window.data[id];
      
      fragment = '<div class="result-item">' +
                  '<div class="search-result-item-title"><a href="' + data.url + '">' + data.title + '</a></div>' +
                  '<div class="search-result-item-excerpt">' + data.excerpt + '</div>' +
                  '</div>';  
      resultsdiv.append(fragment);
    });
    
  });
    

    

  });  
   
