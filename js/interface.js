import { getApi } from './../js/backend.js';

function success(response) {
  let data = response.data;

  if(data.length === 0) {
    $('#error').text(`No matches found`);
    $('.overlay').fadeIn(200);
  }

  for(let i = 0; i < data.length; i++) {
    const firstName = data[i].profile.first_name;
    const lastName = data[i].profile.last_name;
    const img = data[i].profile.image_url;
    const street = data[i].practices[0].visit_address.street;
    const city = data[i].practices[0].visit_address.city;
    const state = data[i].practices[0].visit_address.state;
    const zipCode = data[i].practices[0].visit_address.zip;
    const phone = data[i].practices[0].phones[0].number;
    let website = data[i].practices[0].website;
    let newPatient = (data[i].practices[0].accepts_new_patients? "Yes": "No");

    if(!website) {
      website = 'No website available';
    }

    $('#output').append(`
      <div class="info">
        <div class="doc-info">
          <p><span class="bold">Name:</span> ${firstName} ${lastName}</p>
          <p><span class="bold">Address:</span> ${street}, ${city}, ${state} ${zipCode}<p>
          <p><span class="bold">Accept new patients:</span> ${newPatient}</p>
          <p><span class="bold">Phone Number:</span> ${phone}</p>
          <p><span class="bold">Website:</span> ${website}</p>
        </div>
        <img src="${img}">
      </div>
      `);
  }
}

function failure(error) {
  $('#error').text(`Something went wrong, please try again!`);
  $('.overlay').fadeIn(200);
}

$(document).ready(function() {
  $('.overlay').hide();
  $('#doctor').submit(function(event) {
    event.preventDefault();
    $('#output').empty();
    const meidcalIssue = $('#medical-issue').val();
    const doctorName = $('#doctor-name').val();
    const location = $('#location').val();
    console.log(location);

    const docReq = getApi(meidcalIssue, doctorName, location, success, failure);
  });//form submit

  $('#alert-btn').click(function() {
    $('.overlay').fadeOut(200);
  });

});
