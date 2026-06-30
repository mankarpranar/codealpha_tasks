const quotes = [

{
    quote:"The future depends on what you do today.",
    author:"Mahatma Gandhi"
},

{
    quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author:"Winston Churchill"
},

{
    quote:"Dream big and dare to fail.",
    author:"Norman Vaughan"
},

{
    quote:"Believe you can and you're halfway there.",
    author:"Theodore Roosevelt"
},

{
    quote:"Your limitation—it's only your imagination.",
    author:"Unknown"
},

{
    quote:"Push yourself because no one else is going to do it for you.",
    author:"Unknown"
},

{
    quote:"Great things never come from comfort zones.",
    author:"Unknown"
},

{
    quote:"Don't watch the clock; do what it does. Keep going.",
    author:"Sam Levenson"
},

{
    quote:"Everything you can imagine is real.",
    author:"Pablo Picasso"
},

{
    quote:"Stay hungry. Stay foolish.",
    author:"Steve Jobs"
}

];

const quote = document.getElementById("quote");

const author = document.getElementById("author");

const button = document.getElementById("newQuote");

function randomQuote(){

let random = Math.floor(Math.random()*quotes.length);

quote.innerText = `"${quotes[random].quote}"`;

author.innerText = "- " + quotes[random].author;

}

button.addEventListener("click",randomQuote);

window.onload=randomQuote;