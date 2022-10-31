let days = document.querySelector('.timer__days');
let hours = document.querySelector('.timer__hours');
let minutes = document.querySelector('.timer__minutes');
let second = document.querySelector('.timer__seconds');
let input = document.querySelector('.timer__input');
let btn = document.querySelector('.timer__btn');
let resetBtn = document.querySelector('.reset-btn');


const addZero = (num) => {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
};


btn.addEventListener('click', () => {
    let deadLine = input.value;
    if (Date.parse(deadLine) > Date.parse(new Date())) {
        const day = (days, hours, minutes, second) => {
            let current = new Date();
            let result = Date.parse(deadLine) - Date.parse(current);
        
            second.textContent = addZero(result / 1000 % 60);
            minutes.textContent = addZero(Math.floor(result / 1000 / 60) % 60);
            hours.textContent = addZero(Math.floor(result / 1000 / 60 / 60) % 24);
            days.textContent = addZero(Math.floor(result / 1000 / 60 / 60 / 24));
            
            let timerId = setInterval(() => {
                    day(days, hours, minutes, second);
            }, 1000);
            
            if (result < 0) {
                clearInterval(timerId);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                second.textContent = '00';
            }
            resetBtn.addEventListener('click', () => {
                    clearInterval(timerId);
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    second.textContent = '00';
                    input.value = '';
            })
        };
        day(days, hours, minutes, second);
    } else {
        alert('Ошибка');
        Date.value = ''
    }
})
