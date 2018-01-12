$(document).ready(function() {
  $('#doctor').submit(function(event) {
    event.preventDefault();
    const meidcalIssue = $('#medical-issue').val();
    console.log(meidcalIssue);
  });
});
