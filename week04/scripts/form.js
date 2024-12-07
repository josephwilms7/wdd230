function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');
const passwordMessage = document.getElementById('password-message');

confirmPasswordField.addEventListener('input', function() {
    if (confirmPasswordField.value !== passwordField.value) {
        passwordMessage.textContent = "Passwords do not match!";
        passwordMessage.style.color = "red";
        confirmPasswordField.setCustomValidity("Passwords do not match!");
    } else {
        passwordMessage.textContent = "";
        confirmPasswordField.setCustomValidity('');
    }
});

function updateRatingValue() {
    const ratingValue = document.getElementById('rating').value;
    document.getElementById('rating-value').textContent = ratingValue;
}

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;