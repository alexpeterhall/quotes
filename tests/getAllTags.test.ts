import { getAllTags } from '../quotes'
import { testQuotes } from './testData'

describe('Sunny Day Scenarios', () => {
  test('Properly retrieves all unique tags', () => {
    expect(getAllTags(testQuotes)).toEqual(new Set(["thisIsATag", "thisIsAnotherTag", "thisIsYetAnotherTag"]))
  })
})
