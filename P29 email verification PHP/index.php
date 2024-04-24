<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Email Verification</h2>
        <form id="verification-form" onsubmit="return verifyEmail()">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <button type="submit">Send Verification Email</button>
            <span class="error" id="email-error"></span>
            <span class="success" id="verification-success"></span>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
