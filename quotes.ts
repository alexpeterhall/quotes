import {quotes as QUOTES} from './quotes.json'

export function formatQuote(quote: quote): string {
    if (quote.tags == null || quote.tags.length === 0) {
    return `${quote.quote} - ${quote.author}`
    } else {
    const uniqueTags = [...new Set(quote.tags)]
    return `${quote.quote} - ${quote.author} - #${uniqueTags.join(' #')}`
  }
}

export function getRandomQuote(quotes: quote[]): quote {
  return quotes[Math.floor(quotes.length * Math.random())]
}

export function getAllTags(quotes: quote[]): tags {
  const allTags: Set<string> = new Set()
  quotes.forEach((quote) => {
    quote.tags.forEach((tag) => {
      allTags.add(tag)
    })
  })
  return allTags
}

const allTags = getAllTags(QUOTES)
console.log('Number of Tags: ' + allTags.size)
allTags.forEach ( (tag) => console.log(tag))

console.log(formatQuote(getRandomQuote(QUOTES)))

