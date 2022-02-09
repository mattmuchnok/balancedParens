// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const balancedParen = (str) => {
    let openParen = 0
    let closedParen = 0

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === '(') {
            openParen += 1
        } else if (str[i] === ')') {
            closedParen += 1
        }
    }
    
    if (openParen === closedParen) {
        return true
    } else if (openParen + closedParen === 0) {
        return true
    } else {
        return false
    }
}

console.log(balancedParen(sample1))
console.log(balancedParen(sample2))
console.log(balancedParen(sample3))
console.log(balancedParen(sample4))