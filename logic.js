const input = document.querySelector("input[type=text]");
const butn = document.querySelector("input[type=submit]");

const error = document.querySelector(".error");
console.log(error);
// console.log(inputValue);

//events
butn.addEventListener("click", emailCheck);
input.addEventListener("keyup", enter);

//fuctions
function emailCheck(e) {
  e.preventDefault();
  const inputValue = input.value;
  if (!inputValue.includes("@") || !inputValue.includes(".")) {
    error.innerHTML = "Please provide a valid email address";
    input.style.borderColor = "hsl(354, 100%, 66%)";
    error.style.color = "hsl(354, 100%, 66%)";
  }
  if (inputValue.includes("@") && inputValue.includes(".")) {
    error.innerHTML = "";
  }
}

function enter(element) {
  if (element.keyCode === 13) {
    const inputValue = input.value;
    if (!inputValue.includes("@") || !inputValue.includes(".")) {
      error.innerHTML = "Please provide a valid email address";
      input.style.borderColor = "hsl(354, 100%, 66%)";
      error.style.color = "hsl(354, 100%, 66%)";
    }
    if (inputValue.includes("@") && inputValue.includes(".")) {
      error.innerHTML = "";
    }
  }
}
