 $(document).ready(function() {
  
  window.idx = lunr(function () {
    this.field('title');
    this.field('excerpt');
    this.field('content', {boost: 10});
  });

  window.data = $.getJSON('/searchposts.json');    
  
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add($.extend({ "id": index }, value));
    });
  });      
  
  $("#search-box").keypress(function(event) {
    // event.preventDefault();
    var query = $("#search-box").val();
    var results = window.idx.search(query);
    
    
  });
    

    

  });  
   
