// Form
const nameInput = document.getElementById("form__name");
const numberInput = document.getElementById("form__number");
const cardMonthInput = document.getElementById("form__date-month");
const cardYearInput = document.getElementById("form__date-year");
const cardCvcInput = document.getElementById("form__cvc");
const btnSubmit = document.getElementById("btn__submit");

// Card displayed
const displayCardNumber = document.getElementById("card__number");
const displayCardName = document.getElementById("card__name");
const displayCardMonth = document.getElementById("card__month");
const displayCardYear = document.getElementById("card__year");
const displayCardCvc = document.getElementById("card__cvc");

nameInput.addEventListener("input", changeName);
nameInput.addEventListener("blur", changeName);
numberInput.addEventListener("input", changeNumber);
numberInput.addEventListener("blur", changeNumber);
cardMonthInput.addEventListener("input", changeMonth);
cardYearInput.addEventListener("input", changeYear);
cardCvcInput.addEventListener("input", changeCVC);
btnSubmit.addEventListener("click", submitForm);

function changeName() {
  if ((displayCardName.innerHTML = nameInput.value)) {
    displayCardName.innerHTML = nameInput.value;
    document.getElementById("span__name").innerHTML = "";
  } else {
    displayCardName.innerHTML = "e.g. Jane Appleseed";
    if (nameInput.value == "") {
      document.getElementById("span__name").innerHTML = "Cant't be blank";
    } else {
      document.getElementById("span__name").innerHTML = "";
    }
  }
}

function changeNumber() {
  if ((displayCardNumber.innerHTML = numberInput.value)) {
    displayCardNumber.innerHTML = numberInput.value;
    document.getElementById("span__number").innerHTML = "";
  } else {
    displayCardNumber.innerHTML = "0000 0000 0000 0000";
    if (numberInput.value == "") {
      document.getElementById("span__number").innerHTML = "Cant't be blank";
    } else {
      document.getElementById("span__number").innerHTML = "";
    }
  }
}

function changeMonth() {
  if ((displayCardMonth.innerHTML = cardMonthInput.value)) {
    displayCardMonth.innerHTML = cardMonthInput.value;
  } else {
    displayCardMonth.innerHTML = "00";
  }
}

function changeYear() {
  if ((displayCardYear.innerHTML = cardYearInput.value)) {
    displayCardYear.innerHTML = cardYearInput.value;
  } else {
    displayCardYear.innerHTML = "YY";
  }
}

function changeCVC() {
  if ((displayCardCvc.innerHTML = cardCvcInput.value)) {
    displayCardCvc.innerHTML = cardCvcInput.value;
  } else {
    displayCardCvc.innerHTML = "e.g. 123";
  }
}

function submitForm() {
  document.getElementById("form").className = "hide__container";
  document.getElementById("thanks__card").className = "end__status";
}
