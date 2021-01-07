/* async function getQuote() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('whoops, no quote', error);
    }
}

getQuote(); */



const quoteConatiner = document.getElementById('quote-container');
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
// On load
getQuote();