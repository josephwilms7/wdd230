function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;