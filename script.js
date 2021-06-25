// let apiQuotes =[];

// Show new Quote
function newQuote(){
    // Pick a random quote from api Quotes array
    const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];
    console.log(quote);
}
// Get Quotes From API
// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         console.log(apiQuotes[12]);
//         newQuote();
//     } catch (error) {
        
//     }
// }
// getQuotes();
newQuote();