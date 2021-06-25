 const quoteContainer = document.getElementById('quote-container');
 const quoteText = document.getElementById('quote');
 const authorText= document.getElementById('author');
 const twitterBtn = document.getElementById('twitter');
 const newQuoteBtn = document.getElementById('new-qoute');

 
 let apiQuotes =[];
// Show new Quote
function newQuote(){
    // Pick a random quote from api Quotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    // Check if Author field is Blank and replace it with 'null'
    if(!quote.author){
        authorText.textContent = 'Unknow';
    }else{
        authorText.textContent = quote.author;
    }  
    // check quote lengt to determine styling
    if(quote.text.length >120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
}
// Get Quotes From API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
        newQuote();
    } catch (error) {
        
    }
}

// Tweet Quote
function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text=
    ${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}
//Event listener
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote)
getQuotes();
