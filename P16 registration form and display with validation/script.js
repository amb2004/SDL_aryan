function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    
    // Reset error messages
    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
    
    var isValid = true;

    // Validate First Name
    if (firstName.trim() === "") {
        firstNameError.innerHTML = "First name is required";
        isValid = false;
    }

    // Validate Last Name
    if (lastName.trim() === "") {
        lastNameError.innerHTML = "Last name is required";
        isValid = false;
    }

    return isValid;
}

// Add event listener to the form submit button
document.getElementById("submitButton").addEventListener("click", function(event) {
    if (!validateForm()) {
        // Prevent form submission if validation fails
        event.preventDefault();
    }
});
