const form = document.getElementById('loginForm');
const username = document.getElementById('enter-name')
const email = document.getElementById('enter-email');
const password = document.getElementById('enter-password')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isvalidEmail = email => {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLocaleLowerCase());
}

const validateInputs = () => {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if (emailValue === '') {
        setError(email,'Email is required');
    } else if (!isvalidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


     if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else{
        setSuccess(password);
    }
   
    if (nameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    
}

