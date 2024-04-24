$(document).ready(function() {
    $("#fileSizeForm").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        var fileInput = document.getElementById('file');
        var fileSize = fileInput.files[0].size; // Get file size in bytes

        // Check if a file is selected
        if (fileSize > 0) {
            // Check if file size is less than 1 MB (1048576 bytes)
            if (fileSize < 1048576) {
                // Display file size in KB
                $("#result").html("File size: " + (fileSize / 1024).toFixed(2) + " KB");
            } else {
                // Display file size in MB
                $("#result").html("File size: " + (fileSize / 1048576).toFixed(2) + " MB");
            }
        } else {
            // Display error message if no file is selected
            $("#result").html("Please select a file.");
        }
    });
});
