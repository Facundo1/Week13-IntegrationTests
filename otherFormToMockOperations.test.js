/* import funMock from './operations.mock'

import * as complexOperations from './complexOperations'

describe('complexOperation- Mocked Tests', () => {
  describe('checkEmail', () => {
    it('email value is mocked with a number, send error', () => {
      expect(complexOperations.checkEmail('mocked')).toBe(
        'The email should be an string'
      )
    })
    it('email value is mocked with empty string, send error', () => {
      expect(complexOperations.checkEmail('mocked')).toBe(
        'The email should be an string'
      )
    })
    it('email value is mocked with invalid email , send error', () => {
      expect(complexOperations.checkEmail('mocked')).toBe(
        'The email is invalid'
      )
    })
    it('email value is mocked with @ , send error', () => {
      expect(complexOperations.checkEmail('mocked')).toBe(
        'The email is invalid'
      )
    })
    it('email value is mocked with facu@.com email , send error', () => {
      expect(complexOperations.checkEmail('mocked')).toBe(
        'The email is invalid'
      )
    })
    it(' mocked with value email', () => {
      expect(complexOperations.checkEmail('mocked')).toBe('The email is valid')
    })
  })

  describe('calculateArea', () => {
    it('calculate mocked the area of not supported figure,send msg', () => {
      expect(complexOperations.calculateArea('mocked', 0, 0)).toBe(
        `semi-circle is not supported`
      )
    })
    it('calculate mocked the area first number is a string , send msg', () => {
      expect(complexOperations.calculateArea('mocked', 0, 0)).toBe(
        'number1 and number2 should be numbers'
      )
    })
    it('calculate mocked the area second number is a string , send msg', () => {
      expect(complexOperations.calculateArea('mocked', 0, 0)).toBe(
        'number1 and number2 should be numbers'
      )
    })
    it('calculate area first and second numbers are undefined , send msg', () => {
      expect(complexOperations.calculateArea('mocked', 0, 0)).toBe(
        'number1 and number2 should be numbers'
      )
    })
    it('calculate area of square with first number only , not returns 22', () => {
      expect(complexOperations.calculateArea('square', 4)).not.toEqual(22)
    })
    it('calculate area of the rectangle with 2 and 3 is 6', () => {
      expect(complexOperations.calculateArea('rectangle', 2, 3)).toEqual(6)
    })
    it('calculate area of the rectangle with 6 and 3 is 9', () => {
      expect(complexOperations.calculateArea('triangle', 6, 3)).toEqual(9)
    })
    it('calculate area of circle with 3 of radius is not equal to 18', () => {
      expect(complexOperations.calculateArea('circle', 3)).not.toEqual(18)
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
 */
