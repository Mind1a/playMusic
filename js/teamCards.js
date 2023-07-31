import { teamMembersArray } from "./data.js";

teamMembersArray.forEach((person) => {
  const projectTeam = document.querySelector(".project-team-wrapper");
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHTML = `<div class="card-header">
            <h3>${person.name}</h3>
            <p>${person.position}</p>
          </div>
          <p class="email">${person.email}</p>`;

  card.innerHTML = cardHTML;
  projectTeam.appendChild(card);
});
