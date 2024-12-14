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

function displayLinks(weeks) {
  const linksContainer = document.getElementById("learning-activities");
  linksContainer.innerHTML = "";

  weeks.weeks.forEach(week => {
    const weekDiv = document.createElement("div");
    weekDiv.classList.add("week");

    const weekHeading = document.createElement("h3");
    weekHeading.textContent = week.week;
    weekDiv.appendChild(weekHeading);

    const linkList = document.createElement("ul");

    week.links.forEach(link => {
      const listItem = document.createElement("li");

      const anchorTag = document.createElement("a");
      anchorTag.href = baseURL + link.url;
      anchorTag.textContent = link.title;

      listItem.appendChild(anchorTag);
      linkList.appendChild(listItem);
    });

    weekDiv.appendChild(linkList);
    linksContainer.appendChild(weekDiv);
  });
}

getLinks();
