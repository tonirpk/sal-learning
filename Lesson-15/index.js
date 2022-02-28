//XMLHttpRequest
// const xhr = new XMLHttpRequest()

// xhr.open('GET',"https://api.github.com/ze")

// xhr.send()

// xhr.addEventListener('load', () => {
//     console.log(xhr);

    

//     if(xhr.status === 200) {
//         console.log(`Seccess: ${xhr.response}`);
//     } else {
//         const res = JSON.parse(xhr.response)
//         console.log(`Failure: ${res.message}`);
//     }
// })

// xhr.addEventListener('error', ()=>{
//     console.log('erroe');
// })

// const xhr = new XMLHttpRequest()
// xhr.open('POST',"https://api.github.com/user/repos")

// xhr.setRequestHeader('Authorization', 'Bearer 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')

// const repoInfo = {
//         name: "test-github-file2",
//         description: "My reposodoadpaorut"
// }

// xhr.send(JSON.stringify(repoInfo))
// xhr.addEventListener('load', function(){
//     const output = document.querySelector('.output')
//     output.textContent = xhr.response
// })

// const btn = document.querySelector('.btn')
// const input = document.querySelector('input')
// // console.log(input);



// btn.addEventListener('click', () =>{
//     const link = `https://api.github.com/users/${input.value}/repos`

//     const xhr = new XMLHttpRequest()
//     xhr.open('GET',link)

//     xhr.send()

//     xhr.addEventListener('load', () => {
//         const res = JSON.parse(xhr.response)
//         const output = document.querySelector('.repo')
    
    
//         for(let i=0; i < res.length; i++){
//             const newList = document.createElement('li')
//             output.append(newList)
//             newList.textContent = res[i].full_name
//         }
//     })
//     document.querySelector('ul').innerHTML = ''

//     if(input.value === ''){
//         // input.style.border = "1px red solid"
//         // btn.disable = true
//     }
    
// })

// const xhr = new XMLHttpRequest()
// xhr.open('GET',"https://api.github.com/users/tonirpk/repos")

// xhr.send()




// xhr.addEventListener('load', () => {
//     const res = JSON.parse(xhr.response)
//     const output = document.querySelector('.repo')


//     for(let i=0; i < res.length; i++){
//         const newList = document.createElement('li')
//         output.append(newList)
//         newList.textContent = res[i].full_name
//     }
// })




// fetch

// $.ajax

// $.ajax({
//     method: "GET",
//     url: "https://api.github.com/ze",
//     headers: {
//         Authorization: 'Bearer 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'
//     },
//     success(result){
//         console.log(result);
//     },
//     error(err){
//         console.log(err.responseJSON.message);
//     }
// })

$.ajax({
    method: "GET",
    url: "https://api.github.com/user/repos",
    headers: {
        Authorization: 'Bearer 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'
    },
    data: JSON.stringify({
        name: 'testie',
        description: 'bobobobobobobobo'
    }),
    success(result){
                console.log(result);
            },
    error(err){
                console.log(err.responseJSON.message);
            }
            
})