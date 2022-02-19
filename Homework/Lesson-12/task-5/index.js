const listItem = document.querySelectorAll('ul li')
const arr = []

for (let i = 0; i < listItem.length; i++) {
    arr.push(listItem[i].textContent)
}
console.log(arr);

const list = document.querySelector('ul')

const createListItemFunction = function(numberOfListItem) {
    const listItem = document.querySelectorAll('ul li')
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].remove()
    }
    for (let i = 1; i <= numberOfListItem; i++) {
        const createListItem = document.createElement('li')
        createListItem.textContent = `Newly added list item ${i}`
        list.append(createListItem)
    }
}

console.log(createListItemFunction(100));