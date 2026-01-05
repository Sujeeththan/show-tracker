const signupForm = document.getElementById("signupForm");
const nameError = document.getElementById("name-Error");
const emailError = document.getElementById("email-Error");
const passwordError = document.getElementById("password-Error");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let isValid = true;
  const nameField = document.getElementById("enter-Name");
  const emailField = document.getElementById("enter-Email");
  const passwordField = document.getElementById("enter-Password");

  // Reset errors
  nameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";

  // Name Validation
  if (!nameField.value.trim() || nameField.value.length < 3) {
      nameError.textContent = "Name must be at least 3 characters";
      nameError.style.display = "block";
      isValid = false;
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value.trim())) {
      emailError.textContent = "Invalid email format";
      emailError.style.display = "block";
      isValid = false;
  }

  // Password Validation
  if (passwordField.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
      isValid = false;
  }

  if (isValid) {
    // Simulate Data Store for users (optional, but good for completeness)
    const newUser = {
        name: nameField.value,
        email: emailField.value,
        password: passwordField.value // In real app, never store plain text
    };

    // Auto login
    localStorage.setItem('currentUser', JSON.stringify({
        name: newUser.name,
        email: newUser.email
    }));

    alert("Account created successfully!");
    window.location.href = './index.html';
  }
});
