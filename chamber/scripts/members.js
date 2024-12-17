async function loadDirectory() {
    const directory = document.getElementById('directory');
    directory.innerHTML = '';

    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        data.members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            
            const image = document.createElement('img');
            image.src = `${member.image}`;
            image.alt = member.name;
            
            const name = document.createElement('h3');
            name.textContent = member.name;

            const address = document.createElement('p');
            address.textContent = `Address: ${member.address}`;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${member.phone}`;

            const website = document.createElement('a');
            website.href = member.website;
            website.textContent = 'Visit Website';

            const membershipLevel = document.createElement('p');
            membershipLevel.textContent = `Membership Level: ${member.membership_level}`;
            membershipLevel.classList.add('membership');

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(membershipLevel); 

            directory.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching directory data:', error);
    }
}

function toggleView(viewMode) {
    const directory = document.getElementById('directory');
    if (viewMode === 'grid') {
        directory.classList.remove('list-view');
        directory.classList.add('grid-view');
    } else if (viewMode === 'list') {
        directory.classList.remove('grid-view');
        directory.classList.add('list-view');
    }
}

window.onload = function() {
    loadDirectory();
    toggleView('grid');
};

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}