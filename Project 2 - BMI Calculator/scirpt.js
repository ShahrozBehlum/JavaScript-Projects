let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let heigth = parseInt(document.querySelector('.field1 input').value)
    let weigth = parseInt(document.querySelector('.field2 input').value)
    let result = document.querySelector('.result')

    if (heigth === '' || heigth < 0 || isNaN(heigth)) {
        result.innerHTML = 'Please give a valid heigth'
    }

    if (weigth === '' || weigth < 0 || isNaN(weigth)) {
        result.innerHTML = 'Please give a valid heigth'
    }else {
        const bmi = (weigth / ((heigth*heigth)/10000)).toFixed(2)
        result.innerHTML = `${bmi}`
    }
})




