// setTimeout и clearTimeout
// Таймаут позволяет запускать функцию по прошествии определенного
//  времени. Принимает два аргумента, callback-функцию и время 
//  задержки в миллисекундах, по завершению которого один раз
//   будет вызвана callback-функция. Возвращает цифровой 
//   идентификатор созданного таймера,
//  это необходимо для возможность его удаления.

// timerId	переменная в которую будет записан числовой
//  идентификатор, может быть использован позже с clearTimeout для остановки.

// callback	это функция, которую требуется вызвать после delay 
// миллисекунд.

// delay	задержка в миллисекундах, после которой будет 
// выполнен вызов функции. Реальная задержка может быть больше.

// function sayHello() {
//     console.log("Hello!");
// }

// const timerId = setTimeout(sayHello, 5000);

// clearTimeout(timerId);let date = new Date();
// let date = new Date();
// console.log(date);

// let date = new Date();
// console.log("Date: " + date);
// console.log("getDate(): " + date.getDate());
// console.log("getDay(): " + date.getDay());
// console.log("getMonth(): " + date.getMonth());
// console.log("getFullYear(): " + date.getFullYear());
// console.log("getHours(): " + date.getHours());
// console.log("getMinutes(): " + date.getMinutes());
// console.log("getSeconds(): " + date.getSeconds());
// console.log("getMilliseconds(): " + date.getMilliseconds());
// console.log("getTime(): " + date.getTime());


// ==========================================



const deadline = new Date(2019, 2, 31, 12, 0, 0);
let secText = document.querySelector('.seconds');//перевод милисекунд в секунды(до точки)
let minText = document.querySelector('.minutes');
let hoursText = document.querySelector('.hours');
let daysText = document.querySelector('.days');

function timer () {
let today = Date.now();
let delta = deadline - today;
// console.log(delta);   // вывели результат в милисекундах 5089376516 ot Unix

let sec = Math.floor(delta /1000 % 60);
let min = Math.floor(delta / 60000 % 60);
let hours = Math.floor(delta / 3600000 % 24);
let days = Math.floor(delta / 86400000);
// console.log(sec);
// console.log(min);
// console.log(hours);
// console.log(days);

secText.textContent = sec >= 10 ? sec : `0${sec}`;
minText.textContent = min >=10 ? min : `0${min}`;
hoursText.textContent = hours >= 10 ? hours : `0${hours}`;
daysText.textContent = days >= 10 ? days : `0${days}`;
}


setInterval(timer,1000);