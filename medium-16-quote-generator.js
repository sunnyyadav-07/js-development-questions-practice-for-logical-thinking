/*
  🚀 Question 16:  Create a random quote generator using API.

   
*/
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteGenerateBtn = document.querySelector(".quote-generate-btn");

const url = "https://dummyjson.com/quotes/random";
async function fetchQuotes() {
  let response = await fetch(url);
  let data = await response.json();
  if (response.status === 200) {
    quote.innerHTML = data.quote;
    author.innerHTML = `-${data.author}`;
  }
  console.log(data);
}

quoteGenerateBtn.addEventListener("click", fetchQuotes);
