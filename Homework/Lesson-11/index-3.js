const num = 24
const arrayOfDivisors = []

function getDivisors(x) {
    for (let i = 1; i <= x; i++) {
        if (sum = x % i === 0) {
            arrayOfDivisors.push(i)
        }
    }
    return arrayOfDivisors
}
console.log("This is the number its divisors needed", num)
console.log(`An array of its divisors`, getDivisors(num))