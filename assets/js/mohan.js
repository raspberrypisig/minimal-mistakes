$(document).ready(function() {
  
  (function calculateNextMeetingDate() {
    var candidate_date = Date.today().second().saturday();
    var today_date = Date.today();
    var meeting_remains_this_month = candidate_date.compareTo(today_date);
  
    if (meeting_remains_this_month == 0) {
      $('#nextmeetingdate').html("MEETING TODAY! 2pm");
    }
  
    if (meeting_remains_this_month > 0) {
      $('#nextmeetingdate').html(candidate_date.toString("ddd d MMM yyyy"));
    }
  
    if (meeting_remains_this_month < 0) {
      candidate_date = Date.today().next().month().second().saturday();
      $('#nextmeetingdate').html(candidate_date.toString("ddd d MMM yyyy"));
    }  
  })();
  
(function(){

     $('.card .card-content .pull-right').on('click',function(){        
       // $('.card-reveal').slideToggle('slow');
       $(this).parent().parent().find('.card-reveal').slideToggle('slow');
    });   
  
     $('.card .card-image img').on('click',function(){        
       // $('.card-reveal').slideToggle('slow');
       $(this).parent().parent().find('.card-reveal').slideToggle('slow');
    });
    
    $('.card-reveal .close').on('click',function(){
        //$('.card-reveal').slideToggle('slow');
        $(this).parent().parent().find('.card-reveal').slideToggle('slow');
    });
})();

});

