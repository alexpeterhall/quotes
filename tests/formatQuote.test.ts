import {formatQuote} from '../quotes'

describe('Sunny Day Scenarios', () => {
  test('Quote with no tags formats properly', () => {
    expect(formatQuote({
      "quote": "This quote has no tags.",
      "author": "Testy McTester",
      "tags": []
    })).toBe("This quote has no tags. - Testy McTester")
  })

  test('Quote with one tag formats properly', () => {
    expect(formatQuote(    {
      "quote": "This quote has one tag.",
      "author": "Testy McTester",
      "tags": ["thisIsATag"]
    })).toBe("This quote has one tag. - Testy McTester - #thisIsATag")
  })

  test('Quote with multiple tags formats properly', () => {
    expect(formatQuote({
      "quote": "This quote has multiple tags.",
      "author": "Testy McTester",
      "tags": ["thisIsATag", "thisIsAnotherTag"]
    })).toBe("This quote has multiple tags. - Testy McTester - #thisIsATag #thisIsAnotherTag")
  })
})

describe('Rainy Day Scenarios', () => {
  test('Quote with duplicate tags shows the tag only once', () => {
    expect(formatQuote({
      "quote": "This quote has duplicate tags.",
      "author": "Testy McTester",
      "tags": ["thisIsATag", "thisIsATag"]
    })).toBe("This quote has duplicate tags. - Testy McTester - #thisIsATag")
  })
})
