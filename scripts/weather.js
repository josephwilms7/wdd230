const locationElement = document.querySelector('#location');
const weatherElement = document.querySelector('#current-weather');

const apiKey = 'f99f8b1a5d207be321d582715d95df12';
const latitude = 49.6935; 
const longitude = -112.8418;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather data:", error); 
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    locationElement.textContent = "Lethbridge, Alberta";
    weatherElement.textContent = `${temp}°C - ${description.charAt(0).toUpperCase() + description.slice(1)}`;

    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = description;
    
    const weatherContainer = document.querySelector('.weather');
    weatherContainer.appendChild(weatherIcon);
}

apiFetch();
