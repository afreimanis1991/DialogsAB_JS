function getCurrency() {
  let el = document.querySelector(`#currency`).value;
  console.log(el);
  let currency = "";

  switch (el) {
    case "EUR":
      currency = "EUR";
      break;

    case "USD":
      currency = "USD";
      break;

    case "GBP":
      currency = "GBP";
      break;

    case "CAD":
      currency = "CAD";
      break;
  }
  document.querySelector(`#demo`).innerHTML = `You chose ${currency}`;
}
