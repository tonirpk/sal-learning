// object (объект)
// const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"]

// const weekDays = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вск" }

// console.log(weekDays[1])
// console.log(weekDays[2])
// console.log(weekDays[3])

// const obj = {
//  
// }

// const userFirstName = "John"
// const userLastName = "Smith"

// const user2FirstName = "Tom"
// const user2LastName = "Smith"

// const user = {
//     firstName: "John",
//     lastName: "Smith"
// }

// console.log(user.firstName)
// console.log(user.lastName)

// const obj = {
//     key1: 5,
//     key2: "Hello World",
//     key3: true,
//     key4: undefined,
//     key5: [1, 2, 3],
//     key6: function() {
//         console.log('it is a method')
//     },
//     key7: {
//         subKey: "Sub field"
//     }
// }

// const arr = []

// arr.length
// arr.push(2)

// const user = {
//     firstName: "John",
//     lastName: "Smith",
//     city: "New York"
// }

// console.log(user.city)

// delete user.lastName

// user.city = 18

// console.log(city)

// console.log(user)

// user.firstName = "Tom"

// console.log(user.firstName)
// console.log(user.age)

// console.log(user["first name"])
// console.log(user.lastName)

// const rabbit = {
//     name: "Rabbit",
//     child: {
//         name: "Rabbit 2"
//     },
//     eats() {
//         console.log("I am eating")
//     }
// }

// console.log(rabbit.child.name)

// const currentUser1 = {
//     firstName: "John",
//     lastName: "Smith",
//     printName() {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }

// const rabbit = {
//     food: true,
//     eats() {
//         this.food = false
//     }
// }

// currentUser1.printName()

/*
    Создайте объект person, у которого есть следующие свойства:
        - name - имя человека,
        - age - возвраст человека,
        - country - страна человека,
*/

/*
    1. Создайте пустой объект user.
    2. Добавьте поле name в объект user и сохраните туда значение "Pete"
    3. Добавьте поле surname в объект user и сохраните туда значение "Smith"
    4. Измените значение поля name на "John"
    5. Удалите поле surname
*/

// DOM - Document Object Model (Объектная модель страница)

// document.querySelector - ищет один элемент
// const title = document.querySelector("#main")

// console.log(title)

// document.querySelectorAll - ищет все элементы
// const listItems = document.querySelectorAll("li, h2")

// console.log(listItems)

// Содержимое элемента
// const h2 = document.querySelector('h2')

// textContent
// console.log(h2.textContent)

// innerHTML
// console.log(h2.innerHTML)

// h2.textContent = "<i>My Hello World</i>"
// h2.innerHTML = "<i>My Hello World</i>"

// Атрибуты
// const link = document.querySelector('a')

// node - HTML-объект

// node.getAttribute("имя атрибута")
// console.log(link.getAttribute("href"))
// console.log(link.getAttribute("target"))
// console.log(link.getAttribute("title"))

// node.setAttribute("имя атрибута", "значение атрибута")
// link.setAttribute("href", "https://google.com")
// link.setAttribute("title", "Hint")

// node.removeAttribute("имя атрибута")
// link.removeAttribute("target")

// Классы

// node.classList.add() - добавляет класс или классы 
// link.classList.add("external-link-2")
// link.classList.add("class1", "class2")

// node.classList.remove() - удаляет класс или классы 
// link.classList.remove("class1")
// link.classList.remove("class2", "external-link")

// node.classList.toggle() - переключает класс
// link.classList.toggle("active")

// node.classList.contains() - проверяет есть класс у элемента, если есть возвращает true, иначе false
// console.log(link.classList.contains("active"))