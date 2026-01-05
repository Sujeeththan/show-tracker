const loginForm = document.getElementById("loginForm");
const emailField = document.getElementById("enter-Email");
const passwordField = document.getElementById("enter-password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Function to set error state
const setError = (input, errorEl, message) => {
    input.classList.add('is-invalid');
    errorEl.textContent = message;
    errorEl.style.display = 'block';
};

// Function to clear error state
const clearError = (input, errorEl) => {
    input.classList.remove('is-invalid');
    errorEl.textContent = '';
    errorEl.style.display = 'none';
};

// Real-time validation listeners
emailField.addEventListener('input', () => clearError(emailField, emailError));
passwordField.addEventListener('input', () => clearError(passwordField, passwordError));

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let isValid = true;
  
  // Reset errors first
  clearError(emailField, emailError);
  clearError(passwordField, passwordError);

  // Email Validation
  if (!emailField.value.trim()) {
    setError(emailField, emailError, "Email address is required.");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
    setError(emailField, emailError, "Please enter a valid email address.");
    isValid = false;
  }

  // Password Validation
  if (!passwordField.value.trim()) {
    setError(passwordField, passwordError, "Password is required.");
    isValid = false;
  }

  if (isValid) {
    // Simulate login
    const user = {
        name: emailField.value.split('@')[0],
        email: emailField.value
    };
    
    // In a real app, successful login would happen here
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = './index.html';
  }
});
