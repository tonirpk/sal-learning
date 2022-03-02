const video = document.querySelector('.video-container video')
const playBtn = document.querySelector('.play-btn')

playBtn.addEventListener('click', (e)=>{
e.currentTarget.classList.add('hidden')

video.play()
})


video.addEventListener('click', ()=>{
    playBtn.classList.remove('hidden')

    video.pause()
})

video.addEventListener('ended', ()=>{
    video.currentTime = 0
    playBtn,classList.add('hidden')
})