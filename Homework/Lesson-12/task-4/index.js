const root = document.querySelector('#root')
const header = document.createElement('h1')
const paragraph = document.createElement('p')
const link = document.createElement('a')

root.append(header)
document.querySelector('h1').textContent = "Header"
header.style.border = '1px solid'
root.append(paragraph)
document.querySelector('p').textContent = 'This is my text'
root.append(link)
document.querySelector('a').textContent = "Yandex link"
link.setAttribute('href', 'https://yandex.ru')
link.setAttribute('target', '_blank')