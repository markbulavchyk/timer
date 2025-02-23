'use strict';

const poached = 180;
const soft = 300;
const medium = 480;
const hard = 600;

const firstBtn = document.querySelector('.firstBtn');
const container = document.querySelector('.container');
const subheader = document.querySelector('.subheader');

const countDown = document.querySelector('#countdown');
const btnStop = document.querySelector('#stop');

firstBtn.addEventListener('click', () => {
    subheader.classList.toggle('show');
    container.classList.toggle('show');
});

class Timer {
    constructor(time) {
        this.time = time;
        this.intervalId = null;
        this.isRunning = false;
    }

    timerForEggs() {
        if (this.time <= 0) {
            countDown.innerHTML = `Your eggs are ready`;
            this.stopTimer();
        } else {
            countDown.innerHTML = this.getTimeLeft();
            this.time--;
        }
    }

    startTimer() {
        if (this.intervalId !== null) return;
        this.isRunning = true;
        this.intervalId = setInterval(this.timerForEggs.bind(this), 1000);
    }

    stopTimer() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.isRunning = false;
        }
    }

    getTimeLeft() {
        const minutes = Math.floor(this.time / 60);
        let seconds = this.time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `Time left: ${minutes}:${seconds}`;
    }
}

const poachedEggs = new Timer(poached);
const softEggs = new Timer(soft);
const mediumEggs = new Timer(medium);
const hardEggs = new Timer(hard);

const type1 = document.querySelector('[data-poached]'),
      type2 = document.querySelector('[data-soft]'),
      type3 = document.querySelector('[data-medium]'),
      type4 = document.querySelector('[data-hard]');

let arr = [type1, type2, type3, type4];

for (let type of arr) {
    type.addEventListener('click', () => {
        poachedEggs.stopTimer();
        softEggs.stopTimer();
        mediumEggs.stopTimer();
        hardEggs.stopTimer();

        if (type == type1) {
            poachedEggs.startTimer();
            type2.classList.add('hide');
            type3.classList.add('hide');
            type4.classList.add('hide');
        } else if (type == type2) {
            softEggs.startTimer();
            type1.classList.add('hide');
            type3.classList.add('hide');
            type4.classList.add('hide');
        } else if (type == type3) {
            mediumEggs.startTimer();
            type1.classList.add('hide');
            type2.classList.add('hide');
            type4.classList.add('hide');
        } else if (type == type4) {
            hardEggs.startTimer();
            type1.classList.add('hide');
            type2.classList.add('hide');
            type3.classList.add('hide');
        } else {
            console.log('error');
        }

        btnStop.textContent = 'Stop Timer';
    }, { once: true });
}

btnStop.addEventListener('click', () => {
    const activeTimer = [poachedEggs, softEggs, mediumEggs, hardEggs].find(timer => timer.isRunning);

    if (activeTimer) {
        activeTimer.stopTimer();
        countDown.innerHTML = activeTimer.getTimeLeft(); 
        btnStop.textContent = 'Start Timer';
    } else {
        const selectedType = arr.find(type => !type.classList.contains('hide'));
        if (selectedType) {
            if (selectedType == type1) {
                poachedEggs.startTimer();
            } else if (selectedType == type2) {
                softEggs.startTimer();
            } else if (selectedType == type3) {
                mediumEggs.startTimer();
            } else if (selectedType == type4) {
                hardEggs.startTimer();
            }
            btnStop.textContent = 'Stop Timer';
        }
    }
});