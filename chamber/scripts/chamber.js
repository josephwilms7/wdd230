function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;


// Store the last visit date in localStorage
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();

if (lastVisit) {
    const timeDifference = currentDate - lastVisit;
    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const visitMessage = days < 1 ? 'Back so soon! Awesome!' : `You last visited ${days} ${days === 1 ? 'day' : 'days'} ago.`;
    document.getElementById('visit-message').innerText = visitMessage;
} else {
    document.getElementById('visit-message').innerText = 'Welcome! Let us know if you have any questions.';
}

// Save the current visit date
localStorage.setItem('lastVisit', currentDate);