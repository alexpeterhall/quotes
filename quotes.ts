import QUOTES from './quotes.json'

function formatQuote(quote: quote): string {
  return `${quote.quote} - ${quote.author} - #${quote.tags.join(' #')}`
}

function getRandomQuote(): quote {
  return QUOTES[Math.floor(QUOTES.length * Math.random())]
}

console.log(formatQuote(getRandomQuote()))
