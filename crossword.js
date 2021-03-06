// o(n) time complexity - 1 to 1 input output da same
const crossword = (words, option) => {
    if (option == null || option == undefined) {
        let result = []
        // loop input
        // split ['to', 'or'] into [ ['t', 'o'], ['o', 'r']]
        
        words.forEach(word => {
            result.push(
                word.split('')
            )
        })

        return [words, result]
    } 
    else if (option == 'reverse row') {
        let result = []

        words.forEach(word => {
            result.push(
                word.split('').reverse()
            )
        })

        return [words, result]
    }

    else if (option == 'reverse first row') {
        let result = []

        words.forEach((word, index) => {
            if (index == 0) {
                result.push(
                    word.split('').reverse()
                )
            } else {
                result.push(
                    word.split('')
                )
            }
            
        })

        return [words, result]
    }
    
}
module.exports = crossword