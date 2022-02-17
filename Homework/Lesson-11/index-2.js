const num = 12345

function getDigitsSum(x) {
    let sum = 0
    const lengthNum = String(x)
    for (let i = 0; i < lengthNum; i++) {
        sum += x % 10
        x = Math.floor(x / 10)
    }
    return sum
}
console.log("This is the number", num)
console.log("This is the sum of its digits", getDigitsSum(num))