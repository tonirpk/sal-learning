const wordAdded = "Salwan"

function reverseStr(x) {
    const splitArry = x.split("")
    const revArry = splitArry.reverse()
    const joinArry = revArry.join("")
    return joinArry
}
console.log("This is the orginal word:", wordAdded)
console.log("This is the reversed word:", reverseStr(wordAdded))