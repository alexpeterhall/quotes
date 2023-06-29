import { formatQuote } from '../quotes'
import { testQuotes } from './testData'

describe('Sunny Day Scenarios', () => {
  test('Quote with no tags formats properly', () => {
    expect(formatQuote(testQuotes[0])).toBe("This quote has no tags. - Testy McTester")
  })

  test('Quote with one tag formats properly', () => {
    expect(formatQuote(testQuotes[1])).toBe("This quote has one tag. - Testy McTester - #thisIsATag")
  })

  test('Quote with multiple tags formats properly', () => {
    expect(formatQuote(testQuotes[2])).toBe("This quote has multiple tags. - Testy McTester - #thisIsATag #thisIsAnotherTag #thisIsYetAnotherTag")
  })
})

describe('Rainy Day Scenarios', () => {
  test('Quote with duplicate tags shows the tag only once', () => {
    expect(formatQuote(testQuotes[3])).toBe("This quote has duplicate tags. - Testy McTester - #thisIsATag")
  })
})
