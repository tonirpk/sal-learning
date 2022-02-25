// console.log($)
// console.log(jQuery)

// console.log($('h1'))
// console.log($('.container .item')[0])

// console.log($('.container .item').html())
// console.log($('.container .item').text())

// $('.container .item').html("<b>New text</b>")
// $('.container .item').text('New text')

// $('.container .item').css({
//     backgroundColor: 'pink',
//     border: '1px solid blue'
// })

// $('.container .item').html('New text').css({
//     backgroundColor: 'pink',
//     border: '1px solid blue'
// })

// console.log($('h1').attr('title'))

// $('h1').attr('title','New text')

// $('h1').removeAttr('title')

// $('h1').addClass('heading').addClass('super-title')

// $('h1').wrap('<div class="container"></div>')

// $('.container .item').wrap('<section></section>')

// $('div p').unwrap()

// $('.container').append('<div class = "what"></div>')
// $('.container').prepend('<div class = "what"></div>')

// $('li').on('click', function(eo){
//     $(this).remove()
// })

// $('input').on('input',function(){
//     console.log($(this).val())
// })

let xtop = 0
let xleft = 0

// $('body').css({
//     position: "relative"
// })

// $('div').css({
//     width: "120px",
//     height: "120px",
//     backgroundColor:"pink",
//     border: "1px solid black",
//     position: "relative"
// })

// $('body').on('keydown', function(eo){
        

//         console.log(eo)

//         switch (eo.code){
//             case "ArrowUp":{
//                 xtop = xtop - 10
//                 $('div').css({top: `${xtop}px`,
//             })
//                 break
//             } 
//             case "ArrowRight": {
//                 xleft = xleft + 10
//                 $('div').css({left: `${xleft}px`})
//             break
//             } 
//             case "ArrowDown":{
//                 xtop = xtop + 10
//                 $('div').css({top: `${xtop}px`})
//             break
//             } 
//             case "ArrowLeft":{
//                 xleft = xleft - 10
//                 $('div').css({left: `${xleft}px`})
//             break
//             }
//         }
//     })

$('.btn-open').on('click', function(){
    $('.window').removeClass('hidden')
    $('body').addClass('overlay')
    
})

$('.btn-close').on('click', function(){
    $('.window').addClass('hidden')
    $('body').removeClass('overlay')
})