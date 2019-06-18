const crossword = require('../crossword') 
const words = ['to', 'or']

test('return array of 2 words', () => {
    expect(
        crossword(words)[0]
    ).toEqual(['to', 'or'])
})

test('return 2x2 solution', () => {
    expect(
        crossword(words)[1]
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
        crossword(words, option)[1]
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
        crossword(words, option)[1]
    ).toEqual(
        [
            ['o', 't'], 
            ['o', 'r']
        ]
    )
})
