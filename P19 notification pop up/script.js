// Get the button and the notification popup
const showNotificationBtn = document.getElementById('showNotificationBtn');
const notificationPopup = document.getElementById('notificationPopup');

// Add event listener to show notification popup
showNotificationBtn.addEventListener('click', function() {
    notificationPopup.classList.add('show');
});

// Function to close the notification popup
function closeNotification() {
    notificationPopup.classList.remove('show');
}
