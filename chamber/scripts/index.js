const apiKey = 'f99f8b1a5d207be321d582715d95df12';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lethbridge&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Lethbridge&units=metric&appid=${apiKey}`;

function fetchWeather() {
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            document.getElementById('current-weather').innerHTML = `${temperature}°C - ${weatherDescription}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            let forecastHTML = '<h3>3-Day Forecast</h3>';
            for (let i = 0; i < 3; i++) {
                const forecast = data.list[i * 8]; // Getting data at 8-hour intervals
                const temp = forecast.main.temp;
                const description = forecast.weather[0].description;
                forecastHTML += `<p>Day ${i + 1}: ${temp}°C - ${description}</p>`;
            }
            document.getElementById('forecast').innerHTML = forecastHTML;
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

fetchWeather();

function showBanner() {
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();

if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    document.getElementById("meet-greet-banner").style.display = "block";
}
}

function closeBanner() {
document.getElementById("meet-greet-banner").style.display = "none";
}

showBanner();

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;
