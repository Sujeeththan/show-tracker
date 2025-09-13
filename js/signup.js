const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   alert()

  let isValid = true;

  // name validation
  const nameError = document.getElementById("name-Error");
  const nameField = document.getElementById("enter-Name");
  const nameRegex = /^[a-zA-Z]{3,}$/;

  if (nameField.value.trim() === "") {
    isValid = false;
    nameError.style.display = "block";
    nameError.innerHTML = " Your name is required";
  } else if (!nameRegex.test(nameField.value.trim())) {
    isValid = false;
    nameError.style.display = "block";
    nameError.innerHTML =
      "Name must be atleast 3 characters and contain only alphabets";
  } else {
    isValid = false;
    nameError.style.display = "none";
  }

  // email validation
  const emailError = document.getElementById("email-Error");
  const emailField = document.getElementById("enter-Email");
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (emailField.value.trim() === "") {
    isValid = false;
    emailError.style.display = "block";
    emailError.innerHTML = "Your email is required";
  } else if (!emailRegex.test(emailField.value.trim())) {
    isValid = false;
    emailError.style.display = "block";
    emailError.innerHTML = "Your email address is invalid";
  } else {
    isValid = false;
    emailError.style.display = "none";
  }

  // password validation
  const passwordError = document.getElementById("password-Error");
  const passwordField = document.getElementById("enter-Password");
  const passwordRegex = /^[a-zA-Z0-9][^?@&]{8}$/;

  if (passwordField.value.trim() === "") {
    isValid = false;
    passwordError.style.display = "block";
    passwordError.innerHTML = "Password is required";
  } else if (!passwordRegex.test(passwordField.value.trim())) {
    isValid = false;
    passwordError.style.display = "block";
    passwordError.innerHTML = "Password must be at least 8 characters long";
  } else {
    isValid = false;
    passwordError.style.display = "none";
  }

  //    is valid
  if (isValid) {
    alert("Student register successfully");
    studentForm.reset();
  }
});
