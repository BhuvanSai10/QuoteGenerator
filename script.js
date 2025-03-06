const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random";

async function getQuote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data && data.length > 0) {
      quote.innerHTML = data[0].q;
      author.innerHTML = data[0].a;
    } else {
      quote.innerHTML = "Failed to fetch quote.";
      author.innerHTML = "";
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
    quote.innerHTML = "An error occurred.";
    author.innerHTML = "";
  }
}

getQuote(api_url);

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.innerHTML)} ----by ${encodeURIComponent(author.innerHTML)}`,
    "Tweet Window",
    "Width = 600,height = 300"
  );
}