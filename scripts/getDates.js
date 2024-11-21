const year = document.getElementById("currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);