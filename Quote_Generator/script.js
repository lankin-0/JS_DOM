// DATA
const quotesArray = [
  {
    quote:
      '"Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
    person: "Albert Einstein",
  },
  {
    quote:
      '"We are all in the gutter, but some of us are looking at the stars."',
    person: " Oscar Wilde ",
  },
  {
    quote:
      '"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."',
    person: "Lao Tzu",
  },
  {
    quote:
      '"Be alone, that is the secret of invention; be alone, that is when ideas are born."',
    person: "Nikola Tesla",
  },
  {
    quote:
      '"Some people never go crazy. What truly horrible lives they must lead."',
    person: "Charles Bukowski",
  },
];

// VARIABLES
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotesArray.length);

  quote.innerText = quotesArray[random].quote;
  person.innerText = quotesArray[random].person;
});
