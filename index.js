




var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: " Marilyn Monroe"
    },
    {
        quote: "“So many books, so little time.”",
        author: "Frank Zappa"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "Mae West"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "Mahatma Gandhi"
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "Robert Frost"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "Mark Twain"
    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "Elbert Hubbard"
    },
    {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author: "Oscar Wilde"
    }
]


var repeated = 0;
function quoteBottom() {
    // do {

    // } while (repeated !== randomNumber)

    var randomNumber = Math.floor(Math.random() * quotes.length);
    while (repeated !== randomNumber) {
        console.log(randomNumber)
        document.getElementById('quote').textContent = quotes[randomNumber].quote;
        document.getElementById('authorOfQuote').textContent = quotes[randomNumber].author;
        repeated = randomNumber;
    }
}