const { getQuote, getRandomQuote } = require('../lib/index'),
    quote = getQuote();

console.log(getQuote({ author: false })); 
