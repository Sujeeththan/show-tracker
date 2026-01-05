const signupForm = document.getElementById("signupForm");
const nameField = document.getElementById("enter-Name");
const emailField = document.getElementById("enter-Email");
const passwordField = document.getElementById("enter-Password");
const nameError = document.getElementById("name-Error");
const emailError = document.getElementById("email-Error");
const passwordError = document.getElementById("password-Error");

// Function to set error state
const setError = (input, errorEl, message) => {
    input.classList.add('is-invalid');
    errorEl.textContent = message;
    errorEl.style.display = 'block'; // Ensure visibility if strictly needed, though Bootstrap handles class
};

// Function to clear error state
const clearError = (input, errorEl) => {
    input.classList.remove('is-invalid');
    errorEl.textContent = '';
    // Let Bootstrap handle hiding usually, but we keep text empty
};

// Real-time listeners
nameField.addEventListener('input', () => clearError(nameField, nameError));
emailField.addEventListener('input', () => clearError(emailField, emailError));
passwordField.addEventListener('input', () => clearError(passwordField, passwordError));

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let isValid = true;
  
  // Clear all first
  clearError(nameField, nameError);
  clearError(emailField, emailError);
  clearError(passwordField, passwordError);

  // Name Validation
  if (!nameField.value.trim()) {
      setError(nameField, nameError, "Name is required.");
      isValid = false;
  } else if (nameField.value.trim().length < 3) {
      setError(nameField, nameError, "Name must be at least 3 characters.");
      isValid = false;
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailField.value.trim()) {
      setError(emailField, emailError, "Email is required.");
      isValid = false;
  } else if (!emailRegex.test(emailField.value.trim())) {
      setError(emailField, emailError, "Please enter a valid email address.");
      isValid = false;
  }

  // Password Validation
  if (!passwordField.value) {
      setError(passwordField, passwordError, "Password is required.");
      isValid = false;
  } else if (passwordField.value.length < 8) {
      setError(passwordField, passwordError, "Password must be at least 8 characters.");
      isValid = false;
  }

  if (isValid) {
    // Simulate Registration
    const newUser = {
        name: nameField.value,
        email: emailField.value,
        password: passwordField.value
    };

    localStorage.setItem('currentUser', JSON.stringify({
        name: newUser.name,
        email: newUser.email
    }));

    alert("Account created successfully!");
    window.location.href = './index.html';
  }
});
