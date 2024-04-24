function verifyEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email-error");
    var verificationSuccess = document.getElementById("verification-success");

    // Reset error and success messages
    emailError.innerHTML = "";
    verificationSuccess.innerHTML = "";

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address";
        return false;
    }

    // Simulate sending verification email (replace this with actual code to send email)
    setTimeout(function() {
        verificationSuccess.innerHTML = "Verification email sent successfully!";
    }, 2000);

    // Prevent form submission
    return false;
}
