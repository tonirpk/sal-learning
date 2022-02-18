const table = document.createElement("table")
document.body.append(table)
const tableRow = document.createElement("tr")
table.append(tableRow)

for(let i =1; i<3;i++){
    const tableData = document.createElement("td")
    tableRow.append(tableData)
    tableData.textContent = i
}
table.setAttribute("border", "1")



// const message = document.createElement("p")
// message.textContent = "My new paragraph"
// document.body.append(message)
// document.body.prepend(message)
// document.body.remove(message)
// console.log(message);

// const x = document.querySelectorAll("li")
// for(let i = 0;i<x.length;i++){
//     x[i].textContent = `${x[i].textContent} My text`
// }

// document.querySelector('.error').textContent= 'It has an error message'
// const x = document.querySelector('#block p:last-child').textContent
// console.log(x);


// const person = {
//     name: "Sal",
//     age: 140,
//     country: "Video Game land"
// }
// console.log(person);


// const user = {}

// user.name = "Peter"
// user.surname ="Smith"
// user.name = "John"
// delete user.surname

// console.log(user);

//getAr
//