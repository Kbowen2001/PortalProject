


let cardsList = document.querySelector(".cards");
let cards = [];

let card1 = { title: "Mario Project", url: "MarioProject/index.html" };
let card2 = { title: "Memory Game", url: "MemoryGame/index.html" };
let card3 = { title: "Interactive HTML-CSS", url: "Interactive%20HTML-CSS/index.html" };




cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.map((item) => {
  cardsList.innerHTML += `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <h2>${item.title}</h2>
        </div>
        <div class="card-back">
          <a href="${item.url}">Project link</a>
        </div>
      </div>
    </div>
  `;
});
 


