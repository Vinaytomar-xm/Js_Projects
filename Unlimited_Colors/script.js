const start = document.getElementById("start");
const stop = document.getElementById("stop");

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

start.addEventListener('click', () => {

    if (!intervalId) {
        intervalId = setInterval(function () {
            document.body.style.backgroundColor = randomColor();
        }, 1000)
    }
})

stop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
})