

========================== setTimeout и clearTimeout

Таймаут позволяет запускать функцию по прошествии определенного
 времени. Принимает два аргумента, callback-функцию и время 
 задержки в миллисекундах, по завершению которого один раз
  будет вызвана callback-функция. Возвращает цифровой 
  идентификатор созданного таймера,
 это необходимо для возможность его удаления.

timerId -	переменная в которую будет записан числовой
 идентификатор, может быть использован позже с clearTimeout для остановки.

callback -	это функция, которую требуется вызвать после delay 
миллисекунд.

delay -	задержка в миллисекундах, после которой будет 
выполнен вызов функции. Реальная задержка может быть больше.

function sayHello() {
    console.log("Hello!");
}

const timerId = setTimeout(sayHello, 5000);

clearTimeout (timerId); let date = new Date();
let date = new Date();
console.log(date);

let date = new Date();
console.log("Date: " + date);
console.log("getDate(): " + date.getDate());
console.log("getDay(): " + date.getDay());
console.log("getMonth(): " + date.getMonth());
console.log("getFullYear(): " + date.getFullYear());
console.log("getHours(): " + date.getHours());
console.log("getMinutes(): " + date.getMinutes());
console.log("getSeconds(): " + date.getSeconds());
console.log("getMilliseconds(): " + date.getMilliseconds());
console.log("getTime(): " + date.getTime());


==========================================

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



////////////////////=================  ПРОМИСЫ    ====================////////



Промис это клас, он принимает в себя функцию которая принимает 2 параметра 
resolve(успешно),reject(ошибка)

Зачем он нужен?
чтобы создавать асинхронные действия, зачем?
при большом количестве данных, больного масива например чтобы не весела страница.

Как только мы включаем промис мы говорим делай эти действия асинхронно используя
WEbAPi , внутрение возможности браузера.

Promise (обещание, промис) - объект, представляющий текущее 
состояние асинхронной операции
//=====
const promise = new Promise((resolve, reject) => {};

    // Эта функция будет вызвана автоматически
//=========
Pending - ожидание, исходное состояние при создании промиса
Settled - выполнен, которое в свою очередь имеет 2 варианта результата.
fullfilled - выполнено успешно
rejected - выполнено с ошибкой

const promise = new Promise (resolve,reject){
}
promise();
//======результат промиса массив с элементами!!!!!!!!!!!!!!!!!

///============
promise.then(onResolve, onReject) - позволяет выполнить
 код в котором можно получить доступ и обработать результат промиса.
 В метод then передаются две функции которые будут вызваны когда промис
  перейдет в состояние выполнен (settled).

 onResolve(arg) - будет вызвана при успешном выполнении промиса, и получит 
 результат промиса как аргумент (то, что передаем в вызов resolve()).
 onReject(arg) - будет вызвана при выполнении промиса с ошибкой, и получит 
 ошибку как аргумент (то, что передаем в вызов reject()).
 ///============

 очень хорошо использовать когда 3 API сразу запускается на странички

////////========================

Promise.race

Promise.race([promise1, promise2, ...]) - статический метод, получает массив 
промисов и возвращает обещание. Когда хотябы одно обещание в массиве исполнилось,
 исполнится возвращаемый промис.

//////========================
