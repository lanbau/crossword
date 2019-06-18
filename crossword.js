const crossword = (words, grid) => {
    let result = []
    // loop input
    // split ['to', 'or'] into [ ['t', 'o'], ['o', 'r']]
    
    words.forEach(word => {
        result.push(
            word.split('')
        )
    })

    return [words, grid, result]
}
module.exports = crossword