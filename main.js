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
cardMonthInput.addEventListener("blur", changeMonth);
cardYearInput.addEventListener("input", changeYear);
cardYearInput.addEventListener("blur", changeYear);
cardCvcInput.addEventListener("input", changeCVC);
cardCvcInput.addEventListener("blur", changeCVC);
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
    document.getElementById("span__date").innerHTML = "";
  } else {
    displayCardMonth.innerHTML = "00";
    if (cardMonthInput.value == "") {
      document.getElementById("span__date").innerHTML = "Cant't be blank";
    } else {
      document.getElementById("span__date").innerHTML = "";
    }
  }
}

function changeYear() {
  if ((displayCardYear.innerHTML = cardYearInput.value)) {
    displayCardYear.innerHTML = cardYearInput.value;
    document.getElementById("span__date").innerHTML = "";
  } else {
    displayCardYear.innerHTML = "YY";
    if (cardYearInput.value == "") {
      document.getElementById("span__date").innerHTML = "Cant't be blank";
    } else {
      document.getElementById("span__date").innerHTML = "";
    }
  }
}

function changeCVC() {
  if ((displayCardCvc.innerHTML = cardCvcInput.value)) {
    displayCardCvc.innerHTML = cardCvcInput.value;
    document.getElementById("span__cvc").innerHTML = "";
  } else {
    displayCardCvc.innerHTML = "000";
    if (cardCvcInput.value == "") {
      document.getElementById("span__cvc").innerHTML = "Cant't be blank";
    } else {
      document.getElementById("span__cvc").innerHTML = "";
    }
  }
}

function submitForm() {
  if (
    cardCvcInput.value == "" ||
    cardYearInput.value == "" ||
    cardMonthInput.value == "" ||
    numberInput.value == "" ||
    nameInput.value == ""
  ) {
    if (nameInput.value == "") {
      changeName();
    } else if (numberInput.value == "") {
      changeNumber();
    } else if (cardMonthInput.value == "") {
      changeMonth();
    } else if (cardYearInput.value == "") {
      changeYear();
    } else if (cardCvcInput.value == "") {
      changeCVC();
    }
  } else {
    document.getElementById("form").className = "hide__container";
    document.getElementById("thanks__card").className = "end__status";
  }
}

/*
function formatCardNumber(value) {
  // remove all non digit characters
  var value = value.replace(/\D/g, "");
  var formattedValue;
  var maxLength;
  // american express, 15 digits
  if (/^3[47]\d{0,13}$/.test(value)) {
    formattedValue = value.replace(/(\d{4})/, "$1 ").replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    maxLength = 17;
  } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
    // diner's club, 14 digits
    formattedValue = value.replace(/(\d{4})/, "$1 ").replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    maxLength = 16;
  } else if (/^\d{0,16}$/.test(value)) {
    // regular cc number, 16 digits
    formattedValue = value
      .replace(/(\d{4})/, "$1 ")
      .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
      .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
    maxLength = 19;
  }

  $("#cc").attr("maxlength", maxLength);
  return formattedValue;
}
*/
