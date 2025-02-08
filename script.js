'use strict';

let time = 180; // задаем время в секундах

const countDown = document.querySelector('#countdown');
const btnStart = document.querySelector('#start');

btnStart.addEventListener('click', () => {
    setInterval(updateCountdown, 1000); // запуск функции будет повторятся каждую секунду 
});

function updateCountdown () {
    if (time <= 0 ) {
        countDown.innerHTML = `время вышло`
    } else {
        const minutes = Math.floor(time / 60); // делим время на 60 , узнаем сколько минут задано в тайм, и округляем
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds; // если в секундах меньше 10, что бы подставлялся нолик
        countDown.innerHTML = `${minutes}:${seconds}`
        time--; // время уменьшается на 1 с каждой итерацией 
    }
}