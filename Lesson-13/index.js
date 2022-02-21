// function sayHello(){
//     console.log('Hello world')
// }
// function sayGoodbye(){
//     console.log('Goodbye world')
// }

// const btn = document.querySelector('button')
// // btn.onclick = sayHello
// // btn.onclick = sayGoodbye

// btn.addEventListener('click',sayHello)
// btn.addEventListener('click',sayGoodbye)

// const para = document.querySelector('p')
// para.addEventListener('click',function(){
//     para.style.color = 'red'
//     para.classList.toggle('active')
// })


// const btn = document.querySelector('.actionBtn')
// const result = document.querySelector('.result')

// btn.addEventListener('click',function(){
//     const firstNum = document.querySelector('.firstName')
//     const secondNum = document.querySelector('.secondName')
//     result.textContent = Number(firstNum.value) + Number(secondNum.value)
// })

const inputFeild = document.querySelector('.task')

const unorderedList = document.querySelector('.tasks-list')

inputFeild.addEventListener('keydown',function(x){
    if(x.code === 'Enter' && inputFeild.value !== ""){
    const listItem = document.createElement('li')
    unorderedList.append(listItem)
    listItem.textContent = inputFeild.value
    inputFeild.value = ""
    listItem.addEventListener('click',function(x){
        x.target.remove()
        })
    }
})

const otr = document.querySelector('ul')
console.log(otr)



