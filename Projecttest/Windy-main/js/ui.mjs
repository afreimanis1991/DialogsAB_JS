function renderData(el1, el2, el3, el4, el5, el6, object) {
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
  el4.innerHTML = `<p class="text">${object.main.humidity}</p>`;
  el5.innerHTML = `<p class="text">${object.sys.sunrise}</p>`;
  el6.innerHTML = `<p class="text">${object.sys.sunset}</p>`;
}



export { renderData as renderData };
