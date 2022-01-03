import { renderData } from "./ui.mjs";
//To make it work you will need your own API key get it from https://openweathermap.org/
const apiKey = `5ef9cfbaaf817a372e57933f6f55cb53`;
const inputField = document.querySelector(`#city`);
const btnForm = document.querySelector(`#btn-form`);
const cityNames = document.querySelector(`#cityName`);
const temp = document.querySelector(`#temp`);
const hum = document.querySelector(`#hum`);
const weather = document.querySelector(`#weather`);
const tabContainer = document.querySelector(`.tab-container`);
const tabBtn = document.querySelectorAll(`.tab-button`);
const sun = document.querySelector(`#sun`);
const sun2 = document.querySelector(`#sun2`);
const ids = [cityNames, temp, hum, weather, sun, sun2];

const getWaether = (cityName) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
  )
    .then((r) => r.json())
    .then((data) => {
      renderData(cityNames, temp, weather, hum, sun, sun2, data);
    });
};
tabContainer.addEventListener(`click`, (e) => {
  const clicked = e.target.closest(".tab-button");

  if (!clicked) return;
  tabBtn.forEach((curr) => curr.classList.remove(`active-tab`));
  clicked.classList.add(`active-tab`);

  ids.forEach((curr) => curr.classList.remove(`content-active`));

  document
    .querySelector(`.tab-content-${clicked.dataset.tab}`)
    .classList.add(`content-active`);
});

btnForm.addEventListener(`click`, (e) => {
  e.preventDefault();
  let input = inputField.value.split(" ").join("");
  if (input === " ") return;

  getWaether(input);
  ids.forEach((curr) => curr.classList.remove(`content-active`));
  tabBtn[0].classList.add(`active-tab`);
  cityNames.classList.add(`content-active`);
  inputField.value = " ";
});
