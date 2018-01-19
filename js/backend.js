import { apiKey } from './../.env';
export function getApi(illness, name, location , fulfilled, rejected) {
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${illness}&location=${location}&skip=0&limit=20&user_key=${apiKey}`;

  $.get(url)
  .then(fulfilled)
  .fail(rejected);
}
