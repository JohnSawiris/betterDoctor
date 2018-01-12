import { getApi } from './../js/backend.js';

function success(response) {
  let data = response.data;
  for(let i = 0; i < data.length; i++) {
    const firstName = data[i].profile.first_name;
    const lastName = data[i].profile.last_name
    const street = data[i].practices[0].visit_address.street;
    const city = data[i].practices[0].visit_address.city;
    const state = data[i].practices[0].visit_address.state;
    const zipCode = data[i].practices[0].visit_address.zip;
    let newPatient = data[i].practices[0].accepts_new_patients;

    if(newPatient === true) {
      newPatient = 'Yes';
    } else {
      newPatient = 'No';
    }

    $('#output').append(`<div class="info"><p><span class="bold">Name:</span> ${firstName} ${lastName}</p>
      <p><span class="bold">Address:</span> ${street}, ${city}, ${state} ${zipCode}<p>
      <p><span class="bold">Accept new patients:</span> ${newPatient}</p>
      </div>`);
  }
  // console.log(data[0].practices[0]);
}

function failure(response) {
  $('#output').text(`Something went wrong, please try again`);
}

$(document).ready(function() {
  $('#doctor').submit(function(event) {
    event.preventDefault();
    $('#output').empty();
    const meidcalIssue = $('#medical-issue').val();
    const doctorName = $('#doctor-name').val();
    const location = $('#location').val();
    console.log(location);

    const docReq = getApi(meidcalIssue, doctorName, location, success, failure);
    // console.log(meidcalIssue);
  });
});
