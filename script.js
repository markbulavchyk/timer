'use strict';

const poached = 10;
const soft = 300;
const medium = 480;
const hard = 600;

const firstBtn = document.querySelector('.firstBtn');
const container = document.querySelector('.container');
const subheader = document.querySelector('.subheader');

const countDown = document.querySelector('#countdown');
// const btnStart = document.querySelector('#start');

firstBtn.addEventListener('click', () => {
    subheader.classList.toggle('show');
    container.classList.toggle('show');
})


class Timer {
    constructor(time){
        this.time = time;
    }
    timerForEggs () {
        if (this.time <= 0 ) {
            countDown.innerHTML = `Your eggs are ready`
        } else {
            const minutes = Math.floor(this.time / 60); // делим время на 60 , узнаем сколько минут задано в тайм, и округляем
            let seconds = this.time % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds; // если в секундах меньше 10, что бы подставлялся нолик
            countDown.innerHTML = `Time left: ${minutes}:${seconds}`
            this.time--; // время уменьшается на 1 с каждой итерацией 
        }
    };
}

const poachedEggs = new Timer(poached);
const softEggs = new Timer(soft);
const mediumEggs = new Timer(medium);
const hardEggs = new Timer(hard);


const type1 = document.querySelector('[data-poached]'),
      type2 = document.querySelector('[data-soft]'),
      type3 = document.querySelector('[data-medium'),
      type4 = document.querySelector('[data-hard');

let arr = [type1,type2,type3,type4];

for (let type of arr) {
    type.addEventListener('click', () => {
        if (type == type1) {
            setInterval(poachedEggs.timerForEggs.bind(poachedEggs), 1000);
            type2.classList.add('hide');
            type3.classList.add('hide');
            type4.classList.add('hide');
        } else if (type == type2) {
            setInterval(softEggs.timerForEggs.bind(softEggs), 1000);
            type1.classList.add('hide');
            type3.classList.add('hide');
            type4.classList.add('hide');
        } else if (type == type3) {
            setInterval(mediumEggs.timerForEggs.bind(mediumEggs), 1000);
            type1.classList.add('hide');
            type2.classList.add('hide');
            type4.classList.add('hide');
        } else if (type == type4) {
            setInterval(hardEggs.timerForEggs.bind(hardEggs), 1000);
            type1.classList.add('hide');
            type2.classList.add('hide');
            type3.classList.add('hide');
        } else {
            console.log('error');
        }
    },{ once: true }) 
}

// btnStart.addEventListener('click', () => {
//     setInterval(poachedEggs.timerForEggs.bind(poachedEggs), 1000); // запуск функции будет повторятся каждую секунду 
//     // использую метод bind для сохранение контекста вызова this (ручная привязка)
// }, { once: true });

