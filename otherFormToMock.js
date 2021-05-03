/* import 'jest'
let isNumber = jest.fn().mockReturnValue(5)
let isArray = jest.fn().mockReturnValue([3, 7])
let isString = jest.fn().mockReturnValue('stringg')
let validateEmail = jest.fn().mockReturnValue('mocked@gmail.com')
let sum = jest.fn().mockReturnValue(10)
let multip = jest.fn().mockReturnValue(8)
let division = jest.fn().mockReturnValue(2)
let exponent = jest.fn().mockReturnValue(16)
let isSupportedFigure = jest.fn().mockReturnValue('triangle')
let arrayElementsAreObjectWithKey = jest
  .fn()
  .mockReturnValue([{ color: 'red' }, { color: 'blue' }, { color: 'white' }])
let arrayIntersection = jest.fn().mockReturnValue([5])
let sortArrayByKey = jest
  .fn()
  .mockReturnValue(
    [{ address: 'Callao' }, { address: 'Lagos' }, { address: 'Pellegrini' }],
    'address'
  )
let getEvenNumbersFromArray = jest.fn().mockReturnValue([4, 6])
let getOddNumbersFromArray = jest.fn().mockReturnValue([1, 5])

const funmock = jest.mock('./basicOperations', () => {
  return {
    sum,
    isNumber,
    isArray,
    isString,
    validateEmail,
    multip,
    division,
    exponent,
    isSupportedFigure,
    arrayElementsAreObjectWithKey,
    arrayIntersection,
    sortArrayByKey,
    getEvenNumbersFromArray,
    getOddNumbersFromArray
  }
})

export default funmock
 */
