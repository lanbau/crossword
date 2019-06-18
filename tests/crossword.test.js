const crossword = require('../crossword') 
const words2 = ['to', 'or']
const words3 = ['toy', 'orm']

test('return array of 2 words', () => {
    expect(
        crossword(words2)[0]
    ).toEqual(['to', 'or'])
})

test('return 2x2 solution', () => {
    expect(
        crossword(words2)[1]
    ).toEqual(
        [
            ['t', 'o'], 
            ['o', 'r']
        ]
    )
})

test('return 2x2 solution reverse both row', () => {
    const option = 'reverse row'
    expect(
        crossword(words2, option)[1]
    ).toEqual(
        [
            ['o', 't'], 
            ['r', 'o']
        ]
    )
})


test('return 2x2 solution reverse first row', () => {
    const option = 'reverse first row'
    expect(
        crossword(words2, option)[1]
    ).toEqual(
        [
            ['o', 't'], 
            ['o', 'r']
        ]
    )
})


test('return array of 3 words', () => {
    expect(
        crossword(words3)[0]
    ).toEqual(['toy', 'orm'])
})

test('return 3x3 solution', () => {
    expect(
        crossword(words3)[1]
    ).toEqual(
        [
            ['t', 'o', 'y'], 
            ['o', 'r', 'm']
        ]
    )
})

test('return 3x3 solution reverse both row', () => {
    const option = 'reverse row'
    expect(
        crossword(words3, option)[1]
    ).toEqual(
        [
            ['y', 'o', 't'], 
            ['m', 'r', 'o']
        ]
    )
})


test('return 3x3 solution reverse first row', () => {
    const option = 'reverse first row'
    expect(
        crossword(words3, option)[1]
    ).toEqual(
        [
            ['y', 'o', 't'], 
            ['o', 'r', 'm']
        ]
    )
})