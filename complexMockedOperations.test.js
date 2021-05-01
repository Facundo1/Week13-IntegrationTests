import funMock from './operations.mock'

import * as complexOperations from './complexOperations'

describe('complexOperation- Mocked Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail - mocked email', () => {
      expect(complexOperations.checkEmail('mocked@gmail.com')).toBe(
        'The email is valid'
      )
    })
  })

  describe('calculateArea', () => {
    it('first test for calculateArea - mocked: triangle, multi is 8 and div is 2', () => {
      expect(complexOperations.calculateArea('triangle', 2, 4)).toEqual(2)
    })
  })

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(5, 5, 8)).toBe(
        '10 is grather than 8'
      )
    })
    it('first test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(5, 5, 13)).toBe(
        '10 is less than 13'
      )
    })
  })

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays - mocked arrays', () => {
      expect(
        complexOperations.intersectionBetweenArrays([1, 4, 5, 6], [7, 9, 8, 5])
      ).toStrictEqual([5])
    })
  })

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey - mocked array', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [
            { address: 'Callao' },
            { address: 'Lagos' },
            { address: 'Pellegrini' }
          ],
          'address'
        )
      ).toStrictEqual([
        { address: 'Callao' },
        { address: 'Lagos' },
        { address: 'Pellegrini' }
      ])
    })
  })

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers - mocked array', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([1, 4, 5, 6])
      ).toEqual({ even: 2, odd: 2 })
    })
  })
})
