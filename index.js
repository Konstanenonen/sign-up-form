function checkPasswordMatch(event) {
  event.preventDefault();
  const firstPassword = document.getElementById("password");
  const secondPassword = document.getElementById("confirm-password");

  if (firstPassword.value !== secondPassword.value) {
    firstPassword.classList.add("error");
    secondPassword.classList.add("error");

    const errorText = "*Passwords do not match";
    const errorElement = document.createElement("p");
    errorElement.innerText = errorText;
    errorElement.classList.add("error-text");
    document.getElementById("password-field").appendChild(errorElement);

    return;
  }

  const errorText = document.querySelector(".error-text");
  console.log(errorText);

  if (errorText != null) {
    document.getElementById("password-field").removeChild(errorText);
  }

  firstPassword.classList.remove("error");
  secondPassword.classList.remove("error");

  const inputFields = document.querySelectorAll("input");

  inputFields.forEach(input => input.value = "");
}

document.getElementById("account-form").addEventListener("submit", checkPasswordMatch);