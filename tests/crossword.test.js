const crossword = require('../crossword') 
const words = ['to', 'or']
const grid2x2 = [
    ['', ''],
    ['', '']
]
const result2x2 = [
    ['t', 'o'],
    ['o', 'r']
]
test('return array of 2 words', () => {
    expect(
        crossword(words, grid2x2)[0]
    ).toEqual(['to', 'or'])
})

test('return array of 2 arrays', () => {
    expect(
        crossword(words, grid2x2)[1]
    ).toEqual(
        [
            ['', ''], 
            ['', '']
        ]
    )
})

test('return 2x2 solution', () => {
    expect(
        crossword(words, grid2x2)[2]
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
        crossword(words, grid2x2, option)[2]
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
        crossword(words, grid2x2, option)[2]
    ).toEqual(
        [
            ['o', 't'], 
            ['o', 'r']
        ]
    )
})
