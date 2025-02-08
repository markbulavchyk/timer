'use strict';

// window.addEventListener('DOMContentLoaded', () => {
//     // const timer = setTimeout(function() {
//     //     console.log('прошло 2 секунды');
//     // },2000);

//     let timer = document.querySelector('#timer');
//     let count = 0;
//     const timerFunc = setTimeout(() => {
//         console.log(timer,count);
//         count++;
//         if (count < 5) {
//             timerFunc();
//         } else {
//             return count;
//         }
//     },1000);
// });

let time = 10;

const countDown = document.querySelector('#countdown');

setInterval(updateCountdown, 1000);

function updateCountdown () {
    if (time <= 0 ) {
        countDown.innerHTML = `время вышло`
    } else {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDown.innerHTML = `${minutes}:${seconds}`
        time--;
    }
}