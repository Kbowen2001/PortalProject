//The first one is an array of titles and links
//The next is using a loop to render your html.
//Lets give you a starting point, look at this code below and some of it you will find familiar.



let cardsList = document.querySelector(".cards");
let cards = [];

let card1 = { title: "Mario Project", url: "MarioProject/index.html" };
let card2 = { title: "Memory Game", url: "MemoryGame/index.html" };

cards.push(card1);
cards.push(card2);

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


// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link


// Look up how to push an object to an array

//write the following code to start creating your map:

