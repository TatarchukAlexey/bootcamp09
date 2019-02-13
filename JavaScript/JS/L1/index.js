                                   //КОНСПЕКТ

                                   //prompt /confirm                              
 // const x = confirm("Ты алкаш?");
// console.log(typeof x);
// const y = prompt("Ты алкаш?")

//Number.isNaN

// const validNumber = 5;
// console.log( Number.isNaN(validNumber) ); 
// const invalidNumber = Number('qweqwe'); // NaN
// console.log( Number.isNaN(invalidNumber) ); // true

//Number()
//Все переводит в число

//parseInt

// const x = "65.5fdf"
// console.log(Number.parseInt(x)); Правило  Обязательно с большой буквы!!!!!!!!!
// console.log(Number.parseFloat(x));

//Number.inSinteger
// Он возвращает true,
//  если указанное значение является конечным числом,
//   у которой нет дробной части.

// console.log(Number.isInteger(Infinity))
// // <- false
// console.log(Number.isInteger(-Infinity))
// // <- false
// console.log(Number.isInteger(NaN))
// // <- false
// console.log(Number.isInteger(null))
// // <- false
// console.log(Number.isInteger(0))
// // <- true
// console.log(Number.isInteger(-10))
// // <- true
// console.log(Number.isInteger(10.3))
// // <- false


//Math
                             
//console.log(Math.random()); Формула, показывает любое случайное число!!
//console.log( Number.parseInt(Math.random()*100) );
//Формула которая показывает всегда целое случайное число, 10 и выше делает коридор для целого числа!!!

                  //indexOf/includes

// const massage = "Welcome to Maimi"
// console.log(massage.includes("M"));
// console.log(massage.indexOf("M")); 
// Особенности:
//1) Of  с большой буквы.
// 2) Нужно ставить кавычки в (), иначе не сработает!
// 3) includes покажет только правда или нет,отвечает на вопрос:
//  если такая буква или символ в строке? ответ да или нет

                            // Часть 2 Модуль 1
//  Ветвление - возможность выполнить ту или иную последовательность кода в 
//  зависимости от условия. Условие может быть любым,
//    но результат его проверки всегда имеет два значения - true или false
//  Компьютер использует бинарный (от латинского bis - дважды) код. 
//  Т.е. всего два значения: 0 и 1 используются для создания любых программ.
//   Это значит, что условия также задаются в виде 0 (нет, false) и 1 (да, true).


// Запомни 7 ложных ( falsy) значений, приводящихся к false :
// 0, -0, NaN, null, undefined, пустая строка: "" или '', false

// const m = Boolean(null);
// const m = Boolean(-0);
// const m = Boolean(NaN);
// console.log(m);

// Логические операторы
// && - и (При и все условия должны бить тру иначе фолс(строгое уровнение), сколько условий столько и кранов)
// || - или (При или достаточно  чтобы хоть одно условие было тру)
// ! - не

// !!ОПЕРАТОР ИЛИ ВЫПОЛНЯЕТСЯ ДО ПЕРВОГО ТРУ
// !!ОПЕРАТОР И ДО ПЕРВОГО ФОЛС

// const x = Number(prompt("Это целое число?"));
// const mas = Number.isNaN(x);
// console.log(mas);

//switch

// let month;
// let num = Number(prompt("В каком месяце вы родились?"));

// switch(num){
// case 1 : month ="Jan"; break; (Если нажимаем1, то выпадет Jan)
// case 2 : month ="Feb"; break;
// case 3 : month ="Mar"; break;
// case 4 : month ="Apr"; break;
// case 5 : month ="Mai"; break;
// case 6 : month ="June"; break;
// case 7 : month ="Jule"; break;
// case 8 : month ="Aug"; break;
// case 9 : month ="Sep"; break;
// case 10 : month ="Oct"; break;(Если нажимаем10, то выпадет Oct)
// case 11 : month ="Nov"; break;
// case 12 : month ="Dec"; break;

// default: month = "Такого месяца нет";(Если нажимаем все,
//      что больше, то выпадет "Такого месяца нет")
// }
// alert(month);
// Правило
// Если оператор break будет отсутствовать, то после того, как выполнится
//  условие case все последующие блоки кода будут выполняться один за другим.

                                            //ЗАДАЧКИ
// Task1
// Есть три переменные содержащие день, месяц, и год.
// Необходимо получить строку день\месяц\год
// в формате xx\xx\xxxx

// Найдите ошибку в записи значания для переменной date,
// результат будет выведен в консоль и равен комментарию
// напротив console.log()
// */

// const day = 02;
// const month = 10;
// const year = 2017;

// const date = day + "\" + month + "\" + year;

// console.log(date); // 02\10\2017

// // Решение:
// const day = 02;
// const month = 10;
// const year = 2017;
// let leftSlash = "\\";

// const date = day + leftSlash + month +leftSlash+ year;
// console.log(date);

// Задача№3
/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя
   (используйте prompt)
  - после того как было введено имя показывает 
  alert с тем что ввели в prompt
*/
// Решение
// let login = prompt("Ваше имя");
// console.log(login);
// alert("Подтвердите Ваше имя"+" "+login);

// Задача№4
//   Есть три переменные name, date и roomType, содержащие
//   имя гостя, дату его прибытия на отдых и тип комнаты отеля.

//   Используя шаблонные строки необходимо записать
//   в перменную message сообщение формата:
//   "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".

//   Найти ошибки в коде и исправить их, при верном решении
//   в консоль будет выведена строка идентичная той что
//   напротив console.log
// */
// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = '{{Mango}} прибывает на отдых [date] в #<roomType>.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

// решение
// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = name+" "+"прибывает на отдых"+" "+date+" "+"в"+" "+roomType+".";
// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

// Задача№5
/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";
// let totalWidth=(Number.parseInt(padding)+Number.parseInt(border)+Number.parseInt(contentWidth))+"px";
// console.log(totalWidth); // '125px'

// Задача№6
/*
  Напишите скрипт который: 
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/

// Решение
// let Login = prompt("Какой сейчас год?");
// const yerName ="2018";
// let Right ="Все верно";

// if (Login == yerName){
// alert(Right);
// } else {
//     alert("Но ведь на вдоре 2018!");
// }

// Задача№7
/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит
   целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит
   что либо другое — показывать alert 'Необходимо было ввести целое число!'
  PS: используйте конструкцию if..else.
*/

// // Решение

// Нужно писать Number Обязательно в prompt!! и пример с вложенностью

// let y = "Спасибо"
// let z =Number(prompt("Введите произвольное целое число"));

// if (z===null) {
//     alert("Приходите еще!");
//       }else if (Number.isInteger(z)){
//          alert("Спасибо!");
//          }else {
//             alert("Необходимо было ввести целое число!");
//            }

// Задача8
/*  
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/
// Решение

// const num = Number.parseInt(Math.random() * 100);
// let type = num/2;
// (Number.isInteger(type)) ? alert("even"): alert("odd");
// console.log(`${num} is ${type}`);

// Задача9
/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  Составляющие времени не гарантированно состоят из 2-х цифр!
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/
// Решение
// let hours = 7;
// let minutes = 3;
// let seconds = 42;

// const time = (("0"+hours)+":"+("0"+minutes)+":"+(seconds)) ;
// console.log('Time is: ', time);

// Задача10
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  Проверить что пользователь ввел именно цифру от 1 до 5
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// Решение

// let hotel;
// const x = prompt("Введите число от 1 до 5");

// if (x===null) {
// alert("Очень жаль, приходите еще!");
// }
// let y = Number(x);
// switch(y){
//     case 1: hotel = "Каталог хостелов";break;
//     case 2: hotel = "Каталог бюджетных отелей";break;
//     case 3: hotel = "Каталог отелей ***";break;
//     case 4: hotel = "Каталог отелей ****";break;
//     case 5: hotel = "Каталог лучших отелей";break;
//     default: hotel = "Неверный ввод, возможные варианты 1-5";
// }
// alert(hotel);

// Задачки от Надин
// Задачки Модуль1 Часть 2
// _________________________________
// 1) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert
// 2) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)
// 3) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result.
//  Виведіть на екран значення змінної result
// 4) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.
// 5) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c.
//  Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result.
//  Виведіть на екран значення змінної result.
// 6) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'
// 7) Запитайте у користувача число. Виведіть за допомогою alert квадрат цього числа.

//1
//  let num= 3;
//  alert (num);
//  //2

//  let a= 10;
//  let b= 2;
//  alert(a+b);
//  alert(a-b);
//  alert(a*b);
//  alert(a/b);

//3

//  let c=15;
//  let b=2;
//  const result=(c+b);
//  alert(result);

//4

// let a=10;
// let b=2;
// let c=5;

// alert(a+b+c);

//5
//  let a=17;
//  let b=10;
//  let d=7;
//  const num=a-b;
//  let c = num;
//  let result=num+d;
//  alert(result);

//6
//  let num= prompt("Ваше Имя?")
//  alert(`Ваше Имя? ${num}`);
//7

// let num= prompt("введите число?")
// alert(`Ваше число есть ${num*num}`);

// 8 )Напишіть скрипт, який рахує кількість секунд в годині, в добі, в місяці і виведіть ці значення в консоль
// 9) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'. (edited)
//8
// const oneOklock = 60*60;
// const day= oneOklock*24;
// let month=day*30;
// console.log(oneOklock);
// console.log(day);
// console.log(month);

//9
// let second = 15;
// let minut = 10;
// let oneOklock = 01;
// console.log(oneOklock+":"+minut+":"+second+".");

//10
// Створіть змінну str і надайте їй значення 'abcde'. Звертаючись до окремих
//  символів цього рядка виведіть на екран символ 'a', символ 'c', символ 'e'

// str = "abcde";
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);

             //11length
// Дана рядок 'я вчу javascript!'. Знайдіть кількість символів в цьому рядку.
// const str= "я вчу javascript!";
// console.log(str.length);

// //          //indexOf
// let newStr = "I m a new string";
// console.log(newStr.indexOf("m")); //2

              //includes
// let newStr = "I m a new string";
// console.log(newStr.includes("q")); //false
// console.log(newStr.includes("m")); //true

// result = 5 + '5';
// console.log(result); // '55'
// console.log(typeof result); // string

// Генератор случайных чисел 
// result = 0.1
// console.log(Math.random(result));//любое случайно число от 0 до 1

// Показывает наибольшее из чисел
// let a= 1;
// let b= 3;
// console.log(Math.max(a, b))


                // Math.pow(base, exponent)
// let a= 120;
// let b= 5;
// console.log(Math.pow(a,b))

            // Number.isNaN(Проверка NAN ли это?)
// const validNumber = 1;
// console.log( Number.isNaN(validNumber));


//    Number.parseInt(убирает все лишнее возле числа)
// let x= "5px"
// let y= "dfd"
// console.log( Number.parseInt(x)+Number.parseInt(x));//10
// console.log( Number.parseInt(x)+Number.parseInt(y));//NaN


// Логическое "НЕ"  через !
// let a= true;
// a=!a //false

// let season;
// const monthName = "January";

// if (monthName === "June") {
//   season = "summer";
// } else if (monthName === "May") {
//   season = "spring";
// } else if (monthName === "September") {
//   season = "autumn";
// } else {
//   season = "winter";
// }
//                  Задачки ELSE/IF
//        №1          
// let a = 10;
// if (a==10){
//     alert("Верно!")}
//     else{
//     alert("Неверно!")} 

// a==10? alert("Верно"):alert ("неверно");  


                 //  ПРИМЕР на ELSE/IF

// const y = Number(prompt("Ведите 0"));
// // let mes= "неверно";

// // if (y==0){
// //     alert("верно!") 
// // }
// // else{
// //     alert("Неверно!") 
// // };

// // y==0 ? alert("верно!"): alert("Неверно!");

// y !== 0

            // ПРИМЕР по SWITCH



// Если переменная a больше нуля и 
// меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
//  Проверьте работу скрипта при a, равном 5, 0, -3, 2

// Задачка 
// let y=Number(prompt("Дай число"));
// y>0 && y<5 ? alert("Верно"): alert("Не верно");

// 30) Возведите 2 в 10 степень. Результат запишите в переменную st.
// 31) Найдите квадратный корень из 245.
// 32) Найдите квадратный корень из 379.
//  Результат округлите до целых, до десятых, до сотых. (toFixed(0))
// 33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны
// 34) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - 
// выведите 'Делится' и результат деления, 
// иначе выведите 'Делится с остатком' и остаток от деления. (edited) 


// 30)
// let st=Math.pow(2,10);
// console.log(st);

//31
// let st=Math.sqrt(245);
// console.log(st);

// //32
// let st=Math.sqrt(379).toFixed(3);
// console.log(st);

//33
// let st=Math.sqrt(587);
// console.log(st);
// st=Math.ceil(st);
// console.log(st);

//34

// let a= Number(prompt("Дать число"))
// let b= Number(prompt("Дать число"))

// if (a%b==0) {alert("Делится");}
// else{
//     alert("Делится с остатком");
// }

                   //Курсы от Вовы
// Let a = 10
// let b = "2"
// console.log(a-b);//8
//При отнимании строку всегда переводить в число, 
//если там будет не только число тогда Nan

// null =0
// true= 1
// false = 0
// undefined = NaN

// console.log((0.1+0.2).toFixed(1)); 
// toFixed ставить столько чисел сколько в дужках,
//  только для дробных вычислений

//Number.isNan проверяет число ли это
//Number.isInteger(1)проверяет целое число или дробь


// let a = 0    это цыфра 0 в пустой ячейке
// let b = null   это пустая ячейка


// let b = null,           
// let a = undefined;  неопределенность, 
// вообще ничего, даже нету ячейки. 
// Он нам прилетает в ответ на написание нашего кода Error

// let a = "H"; 
// let b = "h";

// console.log(a==b);
// console.log(a===b);

// if(всегда проверяет на true){
// }else{ 
// }

// if(! если ставим знак ! тогда проверяем правда ли что ошибка (falce){
// }else{
// }

//Как правильно создать подготовку перед написанием кода(своими словами пишем):
//1 Создать логин  юзера
//2  Создать пароль юзера
//3  Проверить логин и пароль юзера с тем что уже есть
//3,1 если проверка дала тру выводить фразу  1
//3,1 если проверка дала фолс выводить фразу  2 и т.д.

// const stone = "камень";
// const scissors = "ножницы";
// const paper = "бумага";
// let compChoise = null;
// const UserChoice = prompt ("Choise бумага камень ножницы");
// const randomNumber = Math.floor(Math.random()*3)+1;
// // console.log(randomNumber);
// if (randomNumber===1){
//    compChoise = stone;
// } else if (randomNumber===2){
//   compChoise = paper;
// } else {
//   compChoise = scissors;
// }
// console.log(compChoise);


// if(userChoise===paper || userChoise === stone|| userChoise===  scissors ){
  
// }
























