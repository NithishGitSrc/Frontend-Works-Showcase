
var regBtn = document.getElementById('regBtn');

function ValidateFields() {
    
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

   


    // Regular expressions for email and password validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~@!..]).{8,}$/;

    
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        alert('Name is required');
        isValid = false;
    } 

    // Validate Email
    if (!emailPattern.test(emailInput.value)) {
       alert('Invalid VIT Email');
        isValid = false;
    } 

    // Validate Password
    if (!passwordPattern.test(passwordInput.value)) {
        alert('Invalid Password');
        isValid = false;
    }

    // Return the validation status
    return isValid;
}

// Attach an event listener to the Register button to trigger validation
const registerButton = document.querySelector('#regBtn button');
registerButton.addEventListener('click', function () {
    if (ValidateFields()) {
        alert('Registration successful!');
    }
    
});

