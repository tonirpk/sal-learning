const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function sumOfSquares(arryInput) {
    let sum = 0
    const square = []
    for (let i = 0; i < arryInput.length; i++) {
        square.push(arryInput[i] ** 2)
    }
    console.log(`This is the square of the array`, square)
    for (let i = 0; i < arryInput.length; i++) {
        sum = sum + square[i]
    }
    return sum
}

console.log(`This is the orginal array`, myArray)
console.log(`This is the sum of the squared array `, sumOfSquares(myArray))