const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const value = 5

function delElem(arrayValue, valueToBeRemove) {
    for (let i = 0; i < arrayValue.length; i++) {
        if (valueToBeRemove === arrayValue[i]) {
            arrayValue.splice(i, 1)
        }
    }
    return arrayValue
}
console.log("Orginal array", arr)
console.log("Array after value is removed", delElem(arr, value))