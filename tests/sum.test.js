// import real function
const sum = require('../sum') 

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3) 
})

test('result is not object', () => {
    const result = sum(1, 2) 
    expect(typeof(result)).not.toBe('object')
})

test('result is an integer', () => {
    const result = sum(1, 2)
    expect(typeof(result)).toBe('number')
})

test('result is not a function', () => {
    const result = sum(1, 2)
    expect(typeof(result)).not.toBe('function')
})

test('adds 1 + 2 to not equal string 3', () => {
    const result = sum(1, 2)
    expect(typeof(result)).not.toEqual("3")
})



// End Goal
// MVP
// Increment

