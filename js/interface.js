import { getApi } from './../js/backend.js';

$(document).ready(function() {
  $('#doctor').submit(function(event) {
    event.preventDefault();
    const meidcalIssue = $('#medical-issue').val();
    console.log(meidcalIssue);
    const docReq = getApi(meidcalIssue, success, failure);
  });
});

function success(response) {
  console.log(response);
}

function failure() {
  console.log('something went wrong');
}
