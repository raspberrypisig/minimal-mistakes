
  window.idx = lunr(function () {
    this.field('title');
    this.field('excerpt');
    this.field('content', {boost: 10});
    this.ref('id');
  });
  
  $(document).ready(function() {
    window.data = $.getJSON('/searchposts.json');
  });  
   
