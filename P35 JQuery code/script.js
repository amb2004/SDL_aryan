$(document).ready(function() {
    // Event listener for form submission
    $("#feedbackForm").submit(function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Gather information from input fields
        var name = $("#name").val();
        var email = $("#email").val();
        var feedback = $("#feedback").val();

        // Perform client-side validations
        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        if (email.trim() === "") {
            alert("Please enter your email address.");
            return;
        }

        // Check if email is valid using regular expression
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (feedback.trim() === "") {
            alert("Please provide your feedback.");
            return;
        }

        // If all validations pass, display gathered information
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Feedback:", feedback);

        // Example operation: Display a message with the gathered information
        alert("Thank you, " + name + "! Your feedback has been submitted.");
    });
});
