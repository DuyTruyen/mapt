'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App{
  constructor(){


    
  };
  _getPosition(){};
  _loadMap(){

  }
}








let map;
let mapEvent;

navigator.geolocation.getCurrentPosition(function (locationVn) {
  const longitude = locationVn.coords.longitude;
  const latitude = locationVn.coords.latitude;
  const coords = [latitude, longitude];

  map = L.map('map').setView(coords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
 

  

  // Click map

  map.on(
    'click',
    function (mapE) {
      mapEvent = mapE;

      // Hiện input

      form.classList.remove('hidden');
      inputDistance.focus();
    },
    function () {}
  );

  form.addEventListener('submit', function (e) {
    const { lat, lng } = mapEvent.latlng;
    // Xóa ô input
    inputDistance.value=inputDuration.value=inputElevation.value=inputCadence.value='';


    e.preventDefault();
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 500,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        }).setContent('<p>Hello world!<br />This is a nice popup.</p>')
      )
      .openPopup();
  });
});

inputType.addEventListener('change',function(){
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');

})