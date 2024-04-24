// Function to validate first name
function validateFirstName() {
    var firstName = document.getElementById("firstName").value;
    var firstNameError = document.getElementById("firstName-error");

    // Reset error message
    firstNameError.innerHTML = "";

    // Validate first name
    if (firstName.trim() === "") {
        firstNameError.innerHTML = "First name is required";
        return false;
    }
    return true;
}

// Function to validate last name
function validateLastName() {
    var lastName = document.getElementById("lastName").value;
    var lastNameError = document.getElementById("lastName-error");

    // Reset error message
    lastNameError.innerHTML = "";

    // Validate last name
    if (lastName.trim() === "") {
        lastNameError.innerHTML = "Last name is required";
        return false;
    }
    return true;
}

// Function to validate email
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email-error");

    // Reset error message
    emailError.innerHTML = "";

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Invalid email address";
        return false;
    }
    return true;
}

// Function to validate password
function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("password-error");

    // Reset error message
    passwordError.innerHTML = "";

    // Validate password
    if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters long";
        return false;
    }
    return true;
}

// Function to validate the entire form
function validateForm() {
    // Validate each field individually
    var isFirstNameValid = validateFirstName();
    var isLastNameValid = validateLastName();
    var isEmailValid = validateEmail();
    var isPasswordValid = validatePassword();

    // If all fields are valid, form submission succeeds
    return isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;
}

// Add event listeners to each input field for field-level validation
document.getElementById("firstName").addEventListener("blur", validateFirstName);
document.getElementById("lastName").addEventListener("blur", validateLastName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("password").addEventListener("blur", validatePassword);
