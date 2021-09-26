const form = document.querySelector(".contact-form");

const fullName = document.getElementById("fullname");
const fullNameError = document.querySelector("#fullname + div.error");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + div.error");

const subject = document.getElementById("subject");
const subjectError = document.querySelector("#subject + div.error");

const message = document.getElementById("message");
const messageError = document.querySelector("#message + div.error");

const showSuccessMessage = document.querySelector(".success");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 6) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 16) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 26) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (checkLength(fullName.value, 6) && validateEmail(email.value) && checkLength(subject.value, 16) && checkLength(message.value, 26) === true) {
    showSuccessMessage.style.display = "block";
    form.style.display = "none";
  } else {
    //console.log("Something is not working...");
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
