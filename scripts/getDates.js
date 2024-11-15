const year = document.getElementById("currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle the 'active' class on click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});