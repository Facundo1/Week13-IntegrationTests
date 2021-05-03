import 'jest'
import * as complexOperations from './complexOperations'
import * as basicOperations from './basicOperations'

// not mocked functions
describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('email value is a number, send error', () => {
      expect(complexOperations.checkEmail(1561651)).toBe(
        'The email should be an string'
      )
    })
    it('email value is empty, send error', () => {
      expect(complexOperations.checkEmail('')).toBe(
        'The email should be an string'
      )
    })
    it('email value is invalid email , send error', () => {
      expect(complexOperations.checkEmail('sadadadasd')).toBe(
        'The email is invalid'
      )
    })
    it('email value is @ , send error', () => {
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid')
    })
    it('email value is @.com email , send error', () => {
      expect(complexOperations.checkEmail('facu@.com')).toBe(
        'The email is invalid'
      )
    })
    it('email value is correct, pass the test', () => {
      expect(complexOperations.checkEmail('facundosa123@gmail.com')).toBe(
        'The email is valid'
      )
    })
  })

  describe('calculateArea', () => {
    it('calculate area of not supported figure,send msg', () => {
      expect(complexOperations.calculateArea('semi-circle', 2, 3)).toBe(
        `semi-circle is not supported`
      )
    })
    it('calculate area first number is a string , send msg', () => {
      expect(complexOperations.calculateArea('square', 'asd', 1)).toBe(
        'number1 and number2 should be numbers'
      )
    })
    it('calculate area second number is a string , send msg', () => {
      expect(complexOperations.calculateArea('square', 2, 'asd')).toBe(
        'number1 and number2 should be numbers'
      )
    })
    it('calculate area first and second numbers are undefined , send msg', () => {
      expect(complexOperations.calculateArea('square')).toBe(
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
    it('params are strings, send error', () => {
      expect(complexOperations.sumGratherThan('A', 'B', 'C')).toBe(
        'The params should be numbers'
      )
    })
    it('params are not numbers, send error', () => {
      expect(complexOperations.sumGratherThan([], undefined)).toBe(
        'The params should be numbers'
      )
    })
    it('test for grather than , pass the test', () => {
      expect(complexOperations.sumGratherThan(3, 5, 6)).toBe(
        '8 is grather than 6'
      )
    })
    it('test for less than , pass test', () => {
      expect(complexOperations.sumGratherThan(3, 5, 9)).toBe('8 is less than 9')
    })
  })

  describe('intersectionBetweenArrays', () => {
    it('only the first param is an array , send msg', () => {
      expect(complexOperations.intersectionBetweenArrays([2, 3, 4])).toBe(
        'The params should be arrays'
      )
    })
    it('the second param is string , send msg', () => {
      expect(
        complexOperations.intersectionBetweenArrays([2, 3, 4], 'ADAD')
      ).toBe('The params should be arrays')
    })
    it('intersection between different sizes of arrays', () => {
      expect(
        complexOperations.intersectionBetweenArrays([1, 2, 3], [1])
      ).toEqual([1])
    })
    it('arrays thats not matches, send error', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 2, 3], [5])).toBe(
        'There are not matching elements'
      )
    })
    it('more than one intersection test', () => {
      expect(
        complexOperations.intersectionBetweenArrays([1, 2, 3, 4], [5, 2, 4, 7])
      ).toStrictEqual([2, 4])
    })
    it('intersection between arrays with string', () => {
      expect(
        complexOperations.intersectionBetweenArrays(['test', 3, 4], ['test', 5])
      ).toEqual(['test'])
    })
  })

  describe('sortArrayOfObjectsByKey', () => {
    it('first param is string, send error', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('[facu]', 'name')).toBe(
        'The first param should be an array'
      )
    })
    it('first param is undefined, send error', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'name')).toBe(
        'The first param should be an array'
      )
    })
    it('the second array is a number,send error', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: 'Facu' }, { name: 'Esteban' }],
          5
        )
      ).toBe('The second param should be an string')
    })
    it('second parameter is empty string,send error', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: 'Facu' }, { name: 'Esteban' }],
          ''
        )
      ).toBe('The second param should be an string')
    })
    it('incorrect property of an object in the array, send msg', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: 'Facu' }, { name: 'Camila' }, { noName: 'NoName' }],
          'name'
        )
      ).toBe('Some elements in the array does not have the name property')
    })
    it('sort the array through key,pass the test', () => {
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
    it('param is a string , send msg', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('im an array')).toBe(
        'The param should be an array'
      )
    })
    it('param is an empty string,send msg', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('')).toBe(
        'The param should be an array'
      )
    })
    it('param is undefined, send msg', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(undefined)).toBe(
        'The param should be an array'
      )
    })
    it('there is a string in the array, send msg', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers(['text', 7, 6, 9, 12, 65])
      ).toBe('The array should have only numbers')
    })
    it('counting odd and even numbers in the array , pass test', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([7, 6, 9, 12, 65])
      ).toStrictEqual({ even: 2, odd: 3 })
    })
  })
})

//////////////////////// Mocked functions//////////////////////////////////////
describe('checkEmail function mocked', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it("email isn't a string", () => {
    jest.spyOn(basicOperations, 'isString').mockReturnValue(false)
    expect(complexOperations.checkEmail('mock')).toBe(
      'The email should be an string'
    )
  })
  it("email value hasn't got correct form", () => {
    jest.spyOn(basicOperations, 'validateEmail').mockReturnValue('email.com')
    expect(complexOperations.checkEmail('mock')).toBe('The email is invalid')
  })
  it('email value is valid email', () => {
    jest
      .spyOn(basicOperations, 'validateEmail')
      .mockReturnValue('mockedMail@hotmail.com')
    expect(complexOperations.checkEmail('mock')).toBe('The email is valid')
  })
})

describe('calculateArea function mocked', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it(' multiplication in square figure', () => {
    jest.spyOn(basicOperations, 'multip').mockReturnValue(6)
    expect(complexOperations.calculateArea('square', 0, 0)).toBe(6)
  })
  it(' multiplication in rectangle figure', () => {
    jest.spyOn(basicOperations, 'multip').mockReturnValue(9)
    expect(complexOperations.calculateArea('rectangle', 0, 0)).toBe(9)
  })
  it(' division in triangle figure', () => {
    jest.spyOn(basicOperations, 'division').mockReturnValue(16.8)
    expect(complexOperations.calculateArea('triangle', 0, 0)).toBeCloseTo(16.8)
  })
  it('exponent in circle figure', () => {
    jest.spyOn(basicOperations, 'exponent').mockReturnValue(6)
    expect(complexOperations.calculateArea('circle', 0, 0)).toBeCloseTo(
      18.84,
      0.5
    )
  })
  it('default figure error test', () => {
    jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue('default')
    expect(complexOperations.calculateArea('default', 0, 0)).toBe(
      'default is not supported'
    )
  })
})

describe('sumGreaterThan function mocked', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('function isNumber is false', () => {
    jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false)
    expect(complexOperations.sumGratherThan(0, 0, 0)).toBe(
      'The params should be numbers'
    )
  })
  it('return of sum is 13  and then is greater than 10', () => {
    jest.spyOn(basicOperations, 'sum').mockReturnValue('13')
    expect(complexOperations.sumGratherThan(0, 0, 10)).toBe(
      '13 is grather than 10'
    )
  })
  it('return of sum is 9 and then is less than 16', () => {
    jest.spyOn(basicOperations, 'sum').mockReturnValue('9')
    expect(complexOperations.sumGratherThan(0, 0, 16)).toBe('9 is less than 16')
  })
})

escribe('intersectionBetweenArrays function mocked', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it("testing with other value that's not an array", () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue('im an array')
    expect(complexOperations.intersectionBetweenArrays('mock')).toBe(
      'The params should be arrays'
    )
  })
  it('testing with undefined instead of array', () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined)
    expect(complexOperations.intersectionBetweenArrays('mock')).toBe(
      'The params should be arrays'
    )
  })
  it('match arrays', () => {
    jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([1, 3, 5])
    expect(
      complexOperations.intersectionBetweenArrays(['mock'], ['mock'])
    ).toStrictEqual([1, 3, 5])
  })
  it('no matching elements in arrays', () => {
    jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([12])
    expect(
      complexOperations.intersectionBetweenArrays(
        ['Rosario', 'San Lorenzo', 'San Nicolas'],
        ['Peru', 'Bolivia', 'Mexico']
      )
    ).toBe('There are not matching elements')
  })
})

describe('sortArrayOfObjectsByKey function mocked', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('first param is not an array', () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue('aaa')
    expect(
      complexOperations.sortArrayOfObjectsByKey([{ name: 'maria' }], 'name')
    ).toBe('The first param should be an array')
  })
  it('second param is not an array', () => {
    jest.spyOn(basicOperations, 'isString').mockReturnValue([23])
    expect(
      complexOperations.sortArrayOfObjectsByKey([{ name: 'maria' }], 'name')
    ).toBe('The second param should be an string')
  })
  it('sorting arrays by key', () => {
    jest
      .spyOn(basicOperations, 'sortArrayByKey')
      .mockReturnValue(
        [
          { vaccine: 'sputnik V' },
          { vaccine: 'astrazeneca' },
          { vaccine: 'sinovac' }
        ],
        'vaccine'
      )
    expect(
      complexOperations.sortArrayOfObjectsByKey([], 'noname')
    ).toStrictEqual(
      [
        { vaccine: 'sputnik V' },
        { vaccine: 'astrazeneca' },
        { vaccine: 'sinovac' }
      ],
      'vaccine'
    )
  })
  it('Array with incorrect key', () => {
    jest
      .spyOn(basicOperations, 'arrayElementsAreObjectWithKey')
      .mockReturnValue(null)
    expect(complexOperations.sortArrayOfObjectsByKey([], 'vaccine')).toBe(
      'Some elements in the array does not have the instrument property'
    )
  })
  it('nothing to sort', () => {
    jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(0)
    expect(complexOperations.sortArrayOfObjectsByKey(['A'], 'noname')).toBe(0)
  })
})

describe('numberOfOddAndEvenNumbers function mocked', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('param is not an array', () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue('FFF')
    expect(complexOperations.numberOfOddAndEvenNumbers([2])).toBe(
      'The param should be an array'
    )
  })
  it(' param of array is not a number', () => {
    jest.spyOn(basicOperations, 'isNumber').mockReturnValue('number')
    expect(complexOperations.numberOfOddAndEvenNumbers([2, 3])).toBe(
      'The array should have only numbers'
    )
  })
  it('four odds number in the array', () => {
    jest
      .spyOn(basicOperations, 'getOddNumbersFromArray')
      .mockReturnValue([7, 11, 31, 157])
    expect(complexOperations.numberOfOddAndEvenNumbers([2, 4])).toEqual({
      odd: 4,
      even: 0
    })
  })
  it('four even number in the array', () => {
    jest
      .spyOn(basicOperations, 'getOddNumbersFromArray')
      .mockReturnValue([10, 4, 6, 8])
    expect(complexOperations.numberOfOddAndEvenNumbers([2, 4])).toEqual({
      odd: 0,
      even: 4
    })
  })
})
