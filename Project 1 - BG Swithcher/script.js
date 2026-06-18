let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')

box1.addEventListener('click', () => {
    document.body.style.backgroundColor = 'gray'
})

box2.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
})

box3.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
})

box4.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow'
})