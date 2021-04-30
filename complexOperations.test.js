import 'jest'
import * as complexOperations from './complexOperations'

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail', () => {
      expect(complexOperations.checkEmail(1561651)).toBe(
        'The email should be an string'
      )
    })
    it('second test for checkEmail', () => {
      expect(complexOperations.checkEmail('')).toBe(
        'The email should be an string'
      )
    })
    it('third test for checkEmail', () => {
      expect(complexOperations.checkEmail('sadadadasd')).toBe(
        'The email is invalid'
      )
    })
    it('fourth test for checkEmail', () => {
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid')
    })
    it('fifth test for checkEmail', () => {
      expect(complexOperations.checkEmail('facu@.com')).toBe(
        'The email is invalid'
      )
    })
    it('sixth test for checkEmail', () => {
      expect(complexOperations.checkEmail('facundosa123@gmail.com')).toBe(
        'The email is valid'
      )
    })
  })

  describe('calculateArea', () => {
    it('first test for calculateArea', () => {
      expect(complexOperations.calculateArea('semi-circle', 2, 3)).toBe(
        `semi-circle is not supported`
      )
    })
    it('second test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 'asd', 1)).toBe(
        'number1 and number2 should be numbers'
      )
    })
    it('third test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 2, 'asd')).toBe(
        'number1 and number2 should be numbers'
      )
    })
    it('fourth test for calculateArea', () => {
      expect(complexOperations.calculateArea('square')).toBe(
        'number1 and number2 should be numbers'
      )
    })
    it('fifth test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 4)).not.toEqual(22)
    })
    it('sixth test for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle', 2, 3)).toEqual(6)
    })
    it('seventh test for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle', 6, 3)).toEqual(9)
    })
    it('eighth test for calculateArea', () => {
      expect(complexOperations.calculateArea('circle', 3)).not.toEqual(18)
    })
  })

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan('A', 'B', 'C')).toBe(
        'The params should be numbers'
      )
    })
    it('second test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan([], undefined)).toBe(
        'The params should be numbers'
      )
    })
    it('third test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(3, 5, 6)).toBe(
        '8 is grather than 6'
      )
    })
    it('fourth test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(3, 5, 9)).toBe('8 is less than 9')
    })
  })

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays([2, 3, 4])).toBe(
        'The params should be arrays'
      )
    })
    it('second test for intersectionBetweenArrays', () => {
      expect(
        complexOperations.intersectionBetweenArrays([2, 3, 4], 'ADAD')
      ).toBe('The params should be arrays')
    })
    it('third test for intersectionBetweenArrays', () => {
      expect(
        complexOperations.intersectionBetweenArrays([1, 2, 3], [1])
      ).toEqual([1])
    })
    it('fourth test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 2, 3], [5])).toBe(
        'There are not matching elements'
      )
    })
    it('fifth test for intersectionBetweenArrays', () => {
      expect(
        complexOperations.intersectionBetweenArrays([1, 2, 3, 4], [5, 2, 4, 7])
      ).toStrictEqual([2, 4])
    })
    it('sixth test for intersectionBetweenArrays', () => {
      expect(
        complexOperations.intersectionBetweenArrays(['test', 3, 4], ['test', 5])
      ).toEqual(['test'])
    })
  })

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('[facu]', 'name')).toBe(
        'The first param should be an array'
      )
    })
    it('second test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'name')).toBe(
        'The first param should be an array'
      )
    })
    it('third test for sortArrayOfObjectsByKey', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: 'Facu' }, { name: 'Esteban' }],
          5
        )
      ).toBe('The second param should be an string')
    })
    it('fourth test for sortArrayOfObjectsByKey', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: 'Facu' }, { name: 'Esteban' }],
          ''
        )
      ).toBe('The second param should be an string')
    })
    it('fifth test for sortArrayOfObjectsByKey', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: 'Facu' }, { name: 'Camila' }, { noName: 'NoName' }],
          'name'
        )
      ).toBe('Some elements in the array does not have the name property')
    })
    it('sixth test for sortArrayOfObjectsByKey', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: 'Facu' }, { name: 'Camila' }, { name: 'Ricardo' }],
          'name'
        )
      ).toStrictEqual([
        { name: 'Camila' },
        { name: 'Facu' },
        { name: 'Ricardo' }
      ])
    })
  })

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('im an array')).toBe(
        'The param should be an array'
      )
    })
    it('second test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('')).toBe(
        'The param should be an array'
      )
    })
    it('third test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(undefined)).toBe(
        'The param should be an array'
      )
    })
    it('fourth test for numberOfOddAndEvenNumbers', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers(['text', 7, 6, 9, 12, 65])
      ).toBe('The array should have only numbers')
    })
    it('fifth test for numberOfOddAndEvenNumbers', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([7, 6, 9, 12, 65])
      ).toStrictEqual({ even: 2, odd: 3 })
    })
  })
})
