const baseURL = "https://josephwilms7.github.io/wdd230/";

const linksURL = "https://josephwilms7.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

function displayLinks(data) {
  const linksContainer = document.getElementById("learning-activities");
  linksContainer.innerHTML = "";

  data.weeks.forEach(week => {
    const listItem = document.createElement("li");
    
    const weekText = document.createElement("span");
    weekText.innerHTML = `${week.week}: `;
    
    week.links.forEach((link, index) => {
      const anchorTag = document.createElement("a");
      anchorTag.href = baseURL + link.url;
      anchorTag.textContent = link.title;

      if (index < week.links.length - 1) {
        anchorTag.innerHTML += " | ";
      }

      weekText.appendChild(anchorTag);
    });

    listItem.appendChild(weekText);
    linksContainer.appendChild(listItem);
  });
}

getLinks();
