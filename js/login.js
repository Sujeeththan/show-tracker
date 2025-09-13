const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   alert()

  let isValid = true;

  // name validation
  const emailError = document.getElementById("emailError");
  const emailField = document.getElementById("enter-Email");
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  if (emailField.value.trim() === "") {
    isValid = false;
    emailError.style.display = "block";
    emailError.innerHTML = "Your email is required";
  } else if (!emailRegex.test(emailField.value.trim())) {
    isValid = false;
    emailError.style.display = "block";
    emailError.innerHTML = "Invalid email format. Please use name@example.com";
  } else {
    isValid = false;
    emailError.style.display = "none";
  }

  //   password validation
  const passwordError = document.getElementById("passwordError");
  const passwordField = document.getElementById("enter-password");
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
    alert("student register successfully");
    studentForm.reset();
  }
});
