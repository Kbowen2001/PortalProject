
/* Date and year*/

let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.createElement("span");
year.textContent = currentYear;
document.querySelector("footer").appendChild(year);

/*   asdfasdf */