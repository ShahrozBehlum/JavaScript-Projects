let start = document.querySelector('.start');
let end = document.querySelector('.end');

// const color = ['blue', 'red', 'yellow', 'pink', 'white', 'green', 'black'];
// let index = 0;

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId;

let startFun = () => {
    // document.body.style.backgroundColor = color[index];
    // index++;

    document.body.style.backgroundColor = randomColor()

    // if (index === color.length) {
    //     index = 0;
    // }
};

start.addEventListener('click', () => {
    if (!intervalId) { // prevent multiple intervals
        intervalId = setInterval(startFun, 1000);
    }
});

end.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; // reset so you can start again
});