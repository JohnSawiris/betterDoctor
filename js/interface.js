import { getApi } from './../js/backend.js';

function success(response) {
  let data = response.data;
  for(let i = 0; i < data.length; i++) {
    let firstName = data[i].profile.first_name;
    let lastName = data[i].profile.last_name;
    $('#output').append(`<p>First Name: ${firstName} -  Last Name: ${lastName}</p>`);
  }
  console.log(data);
}

function failure(response) {
  $('#output').text(`There's no records match your search`);
}

$(document).ready(function() {
  $('#doctor').submit(function(event) {
    event.preventDefault();
    const meidcalIssue = $('#medical-issue').val();
    // console.log(meidcalIssue);
    const docReq = getApi(meidcalIssue, success, failure);
  });
});
