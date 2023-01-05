let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();
  ///////////////////
  // Do all of your work inside the document.addEventListener

  ///////////////////
  // Part 1 - Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
  document.getElementById("main-title").innerHTML =
    "I'm Dom. Welcome to the streets!";

  ///////////////////
  // Part 2 - Select the body and change the background-color to a new color of your choice.
  document.body.style.backgroundColor = "#833b24";

  ///////////////////
  // Part 3 - Select DOM's Favorite Things list and remove the last list item.
  const list = document.getElementById("favorite-things");
  list.removeChild(list.lastElementChild);

  ///////////////////
  // Part 4 - Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

  // Get list of all elements with the class "special-title"
  const elements = document.getElementsByClassName("special-title");

  // Loop through the list of elements and change the font size
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "2rem";
  }

  ///////////////////
  // Part 5 - Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  let chicagoItem = document.querySelector("#past-races li:nth-child(4)");
  chicagoItem.parentNode.removeChild(chicagoItem);

  ///////////////////
  // Part 6 - Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
  const newElement = document.createElement("li");
  newElement.innerHTML = "Boston";

  const raceList = document.getElementById("past-races");
  raceList.appendChild(newElement);

  ///////////////////
  /* Part 7
  Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
  */
  const blogPost = document.createElement("div");
  blogPost.className = "blog-post purple";

  const heading = document.createElement("h1");
  heading.innerHTML = "Boston";

  const paragraph = document.createElement("p");
  paragraph.innerHTML = "You're Like The Justin Timberlake Of Japan, Right?";

  blogPost.appendChild(heading);
  blogPost.appendChild(paragraph);

  blogPost.appendChild(heading);
  blogPost.appendChild(paragraph);

  document.querySelector(".main").appendChild(blogPost);

  ///////////////////
  // Part 8 - Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
  document.getElementById("quote-title").addEventListener("click", randomQuote);

  ///////////////////
  /* Part 9
  Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouse enter events.
  The mouseout handler should toggle the class .purple
  The mouse enterhandler should toggle the class .red
  */
  const blogPosts = document.querySelectorAll(".blog-post");

  blogPosts.forEach(function (element) {
    element.addEventListener("mouseout", function () {
      element.classList.toggle("purple");
    });

    element.addEventListener("mouseenter", function () {
      element.classList.toggle(".red");
    });
  });
});
