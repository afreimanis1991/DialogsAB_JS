function renderData(el1, el2, el3, object) {
  el1.innerHTML = `<ul>
    <li> Country :${object.sys.country}</li>
    <li>City name: ${object.name}</li>
    </ul>`;
  let x = `+`;
  if (object.main.temp < 0) x = `-`;
  el2.innerHTML = `<p class="text">${x}${object.main.temp}&#8451;</p>`;
  el2.addEventListener(`mouseover`, () => {
    el2.innerHTML = `<p class="text">Feels like:${object.main.feels_like} &#8451;</p>`;
    el2.addEventListener(`mouseout`, () => {
      el2.innerHTML = `<p class="text">${x}${object.main.temp} &#8451;</p>`;
    });
  });

  el3.innerHTML = `<p class="text">${object.weather[0].main}</p>`;
}

export { renderData as renderData };
