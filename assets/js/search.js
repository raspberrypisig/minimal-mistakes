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
  
  $("#search-box").keydown(function(event) {
    // event.preventDefault();
    var query = $("#search-box").val();
    var results = window.idx.search(query);
    var resultsdiv = $("#search-results")
    resultsdiv.empty();
    var id;
    var fragment;
    var data;
    
    for (item in results) {
      id = item.ref;
      data = window.data[id];
      
      fragment = '<div class="result-item">
                  <div class="search-result-item-title"><a href="PLACEHOLDER1">PLACEHOLDER2</a></div>
                  <div class="search-result-item-excerpt">PLACEHOLDER3</div>
                  </div>';  
      fragment = fragment.replace('PLACEHOLDER1', data.url);
      fragment = fragment.replace('PLACEHOLDER2', data.title);
      fragment = fragment.replace('PLACEHOLDER3', data.excerpt);
      resultsdiv.append(fragment);
    }
    
  });
    

    

  });  
   
