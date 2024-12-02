'use strict';

const map = L.map('map').setView([51.505, -0.09], 13);  // kartta laatikko

// Initialize the map with OpenStreetMap tiles.  kartta kuvat
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const lomake = document.querySelector('form');
const hakusana = document.querySelector('input');
const tiedot = document.querySelector('#tiedot');
const marker = L.featureGroup().addTo(map);

lomake.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const APIkey = '7bfbeb2ebaec8cdb59103f744a3e8c1f';
  const kaupunki = hakusana.value;
  try {
    const weather = await fetchWeather(APIkey, kaupunki);
    // otsikko
    const otsikko = document.createElement('h3');
    otsikko.innerText = weather.name;
    // lämpötila
    const lampo = document.createElement('p');
    lampo.innerText = `Lämpötila: ${weather.main.temp}°C`;
    // tuulen nopeus ja suunta
    const tuulenNopeus = document.createElement('p');
     tuulenNopeus.innerText = `Tuulen nopeus: ${weather.wind.speed} m/s`;
    // säätila kuvana
    const ikoninOsoite = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        const ikoni = document.createElement('img');
        ikoni.alt = weather.weather[0].description;
        ikoni.src = ikoninOsoite;


    const kaikkiTiedot = document.createElement('article');
    kaikkiTiedot.append(otsikko, lampo,tuulenNopeus, ikoni); //show in browser
    tiedot.innerHTML ='';  //tyhjennetään vanhat tiedot ensin
    tiedot.appendChild(kaikkiTiedot);
    //keskitä kartta
    map.setView([weather.coord.lat, weather.coord.lon], 9);
    const marker =  L.marker([weather.coord.lat, weather.coord.lon]).addTo(map) .bindPopup(`<b>${weather.name}</b><br>${lampo.innerText}`);
    console.log(marker);
  } catch (error) {
    console.error(error.message);
  }
});

async function fetchWeather(APIkey, kaupunki) {
  const request = `https://api.openweathermap.org/data/2.5/weather?appid=${APIkey}&units=metric&q=${kaupunki}`;
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('Server not found');
  }
  return await response.json();
}
