const loginForm = document.getElementById("loginForm");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let isValid = true;
  const emailField = document.getElementById("enter-Email");
  const passwordField = document.getElementById("enter-password");

  // Reset errors
  emailError.style.display = "none";
  passwordError.style.display = "none";

  // Simple validation
  if (!emailField.value.trim()) {
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    isValid = false;
  }

  if (!passwordField.value.trim()) {
    passwordError.textContent = "Password is required";
    passwordError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    // Simulate login - extract name from email for demo purposes if no user db
    // In a real app we would check credentials
    const user = {
        name: emailField.value.split('@')[0],
        email: emailField.value
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    // Redirect to home
    window.location.href = './index.html';
  }
});
