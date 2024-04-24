function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");

    // Reset error messages
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    // Validate username
    if (username.trim() === "") {
        usernameError.innerHTML = "Username is required";
        return false;
    }

    // Validate password
    if (password.trim() === "") {
        passwordError.innerHTML = "Password is required";
        return false;
    }

    // Display login success
    document.getElementById("display-name").textContent = username;
    document.getElementById("login-success").style.display = "block";

    // Prevent form submission
    return false;
}
