function validateForm() {
    let password = document.getElementById("password").value;
    let emailAdd= document.getElementById("email").value;
    let user=document.getElementById("username").value;
    let phoneNumber=document.getElementById('phone').value;
    let userAddress=document.getElementById('address').value;
    let pinValue=document.getElementById("pincode").value;
    if(user.length > 15 || user.length <3) {
    alert('Username should be between 3 and 15 characters');
    return;
    }
    if(phoneNumber.length !== 10)
    {
    alert("Enter Valid phone number");
    return;
    }
    if(emailAdd.indexOf('@') === -1)
    {
    alert("Invalid email address");
    return;
    }
    if (password.length < 8) {
    alert("Password should be at least 8 characters long.");
    return;
    }
    var alphanumericRegex = /^[0-9a-zA-Z]+$/;
    if (!userAddress.match(alphanumericRegex)) {
    alert("User address must have alphanumeric characters only");
    document.getElementById('address').focus();
    return;
    }
    var pincodeRegex = /^[0-9]{6}$/;
    if (!pinValue.match(pincodeRegex)) {
    alert("Enter a valid 6-digit pincode");
    document.getElementById('pincode').focus();
    return;
    }
   
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
    }
   
    alert("Form submitted successfully!");
    // document.getElementById("registrationForm").reset();
   
    page("/success");
    }
   
    page("/success", function () {
    console.log("Registered succesfully!");
    });
   
    page();