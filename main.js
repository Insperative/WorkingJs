const quoteConatiner = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
// const loader = document.getElementById('loader');



// function loading() {
//     loader.hidden = false;
//     quoteConatiner.hidden = true;
// }

// function complete() {
//     quoteConatiner.hidden = false;
//     loader.hidden = true;
// }

function newQuote() {
    const quote = localQuotes [Math.floor(Math.random() * localQuotes.length)];
    if (!quote.author) {
        authorText.textContent = 'Uknown';
    } else {
        authorText.textContent = quote.author;
    }

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-qoute');
    }
    quoteText.textContent = quote.text;
}

newQuoteBtn.addEventListener ('click', newQuote);

newQuote();
// loading();





// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
       
//     }
// }

// getQuotes(); 




/* const quoteConatiner = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// API Qoute // 
async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json';

    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown';
        } else {
            authorText.innerText = data.quoteAuthor;
        }

        if (data.quoteText.length > 120) {
            qoueteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-qoute');
        }
        quoteText.innerText = data.quoteText;
    } catch (error) {
        getQuote();
        
    }
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn. addEventListener('click', tweetQuote); 
// On load
getQuote(); */