import { apiKey } from './../.env';
export function getApi(illness, fulfilled, rejected) {
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${illness}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;

  $.get(url)
  .then(fulfilled)
  .fail(rejected);
}
