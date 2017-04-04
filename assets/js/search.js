;(function($){

window.idx = lunr(function () {
    this.field('title');
    this.field('excerpt');
    this.field('content', {boost: 10});
    this.ref('id');
});
  
$(document).ready(function() {
  window.data = $.getJSON('/searchposts.json');
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });
});

})(window.jQuery);
