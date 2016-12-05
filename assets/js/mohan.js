$(document).ready(function() {
  var candidate_date = Date.today().second().saturday();
  var today_date = Date.today();
  var difference = candidate_date - today_date;
  $('#nextmeetingdate').html(difference);
});

