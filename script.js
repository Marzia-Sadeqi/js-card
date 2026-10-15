// 1. Create the main white card
const card = document.createElement("div");
card.classList.add("card");

// 2. Top image
const cardImage = document.createElement("img");
cardImage.classList.add("card-image");
cardImage.setAttribute("src", "images/illustration.png");   
cardImage.setAttribute("alt", "Blog illustration");

// 3. Category badge
const badge = document.createElement("span");
badge.classList.add("badge");
badge.textContent = "Learning";

// 4. Date
const date = document.createElement("p");
date.classList.add("date");
date.textContent = "Published 21 Dec 2023";

// 5. Title
const title = document.createElement("h2");
title.classList.add("title");
title.textContent = "HTML & CSS foundations";

// 6. Description
const description = document.createElement("p");
description.classList.add("description");
description.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";

// 7. Author section
const author = document.createElement("div");
author.classList.add("author");

const authorImage = document.createElement("img");
authorImage.classList.add("author-image");
authorImage.setAttribute("src", "images/avatar.png");        
authorImage.setAttribute("alt", "Greg Hooper");

const authorName = document.createElement("span");
authorName.classList.add("author-name");
authorName.textContent = "Greg Hooper";

author.appendChild(authorImage);
author.appendChild(authorName);

// 8. Put everything inside the card
card.appendChild(cardImage);
card.appendChild(badge);
card.appendChild(date);
card.appendChild(title);
card.appendChild(description);
card.appendChild(author);

// 9. Add the card to the page
document.body.appendChild(card);