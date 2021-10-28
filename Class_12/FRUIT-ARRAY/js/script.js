`use-strict`;
//selecting elements
const form = document.querySelector(`#fruit`);
const demo = document.querySelector(`#demo`);
const btnAdd = document.querySelector(`#btn`);
const btnAddToBack = document.querySelector(`#btn-back`);
const basket = [];

demo.innerHTML = basket;

btnAddToBack.addEventListener(`click`, function () {
  let userAddedFruit = form.elements[`fruitName`].value;

  if (userAddedFruit === "") {
    alert(
      `Sounds delicious, but sorry no, you should add a name! A pineapple maby? 🍍`
    );
  }
  basket.push(`<br>${userAddedFruit}`);

  if (basket.length > 10) {
    alert(`Now lets not get crazy here! 😅`);
  }
  demo.innerHTML = basket;
  form.elements[`fruitName`].value = "";
});
//------------------------------- ADDING TO BACK OF ARRAY
btnAdd.addEventListener(`click`, function () {
  let userAddedFruit = form.elements[`fruitName`].value;

  if (userAddedFruit === "") {
    alert(`You can do it! Just think a bit. I belive in you! 😎`);
  }
  basket.unshift(userAddedFruit);

  if (basket.length > 10) {
    alert(`Sorry this basket can't hold anymore fruit 🦆`);
  }
  demo.innerHTML = basket;
  form.elements[`fruitName`].value = "";
});
