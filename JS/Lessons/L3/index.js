//   //////////////// Функции ////////////////////////
// function 
// //сначала пише ключевое слово,  далле называем ее  и ставим ()
// function  addTwoNumbers ()
//далее пишем тело цыкла куда пишем код  в {}

///////1 способ создание функции

// function  addTwoNumbers (){   /// это описание функции
// console.log(10+22);
// }
// addTwoNumbers();  /// Это вызов функции, запуск ее.  = не ставим.
// addTwoNumbers();  мы можем вызывать и выше и ниже функции


///////2 способ создание функции

// let addTreeNumbers = function (){
//     console.log(10+12+22);  
// }
// addTreeNumbers (); // равно не ставим. Использовать можем только!!! после
// // создания переменной, только ниже переменной. По факту наш лет становится функцией

// let addTreeNumbers = function (){
//     console.log(10+12+22);  
// };
// addTreeNumbers ();
////////////////////////   " ; " Означает конец инструкции!! нужно ставить , 
//при зборке будут траблы

///////  Return 

//  function  addTwoNumbers (){   
// return 5+6;        /// Юез ретерн - это как работа соковыжималки без сока.
//    ретерн показывает результат работы, для дальнейшего его спользования
// };
// console.log(addTwoNumbers ());

// ///////////Пример

// function sumOgArray (){              //до ретерна это пишем код
//     let arr = {};
//     let total = 0;
//     for (let i =0; i <5; i++){
//         let numder = prompt ();
//         arr.push (Number(number));
//     }
//     for (let el of arr){
// total += el;
//     }
//     return total;       // если будет андевайнд значит забыли ретерн
// }

// console.log(sumOgArray ());  // выводим результа на экран. Обязательно () - это вызов команда.

/// 2 применение return - это выключает функцию также, когда пишем просто ретерн 
//. Если в средине кода в функции поставить ретерн код останавливается.
//  Команда ретерн работает только в средине функции.
// если ретерн и имя функции, тогда выведет результат функции!!!!!!!!!!!!!!!!!

// Вывод без  () и return  ----- function не работает


//////////////////// Параметры и аргументы //////////////////

///////// При такой записе можно записать только 2 аргумента!!!!!!!!!!!

/////Универсальная функция для обработки разных данных

// function addTwoNumbers(num1, num2){ //функция с двумя ячейками (это соковыжималка). Это параметры!!
//     return num1 * num2;        // это инструкция для функции, то, что надо сделать
// }

// console.log(addTwoNumbers(10,11));   ///(это яблоки) . 10 и 11 это аргументы!!!
// console.log(addTwoNumbers(1,21));     ///(это груши)
// console.log(addTwoNumbers(1,5));  


//////////////задачка1

//написать функция кот принм год и возвращает столетие. я передам 1650 покажет 17 века

////Решение:

// function convertYear (year){
//  let enter = Number(prompt("Введите год"))
//  return Math.floor(year/100)+1;
// }
// console.log(convertYear(2018));
// console.log(convertYear(1850));
// console.log(convertYear(1510));


/////////////////Задача написать при вводе числа высокосный год или не высокосный

// Решение 1:
// function convertYear (year){   // year это параметры
//     if (year % 4 === 0){
//         return "yes"
//     } else {
//         return "no"
//     }
//    }
//    console.log(convertYear(2004)); //yes
//    console.log(convertYear(1998)); //no
//    console.log(convertYear(1991)); //no

// Решение 2:
// function convertYear (year){   // year это параметры
//     let word ="";
//     if (year % 4 === 0){
//         word = "yes"
//     } else {
//         word = "no"
//     }
//    }
//    console.log(convertYear(2004)); //yes
//    console.log(convertYear(1998)); //no
//    console.log(convertYear(1991)); //no

// Решение 3 Тернарник:
// function convertYear (year){   // year это параметры
//       return year % 4 === 0 ? "yes" : "no";
//    }
//    console.log(convertYear(2004)); //yes
//    console.log(convertYear(1998)); //no
//    console.log(convertYear(1991)); //no

//////////////////  console.log(arguments)////Функция когда больше чем 2 аргумента

// function add (){
//     console.log(arguments); ////// arguments - это Зарегестрированная перемена в средине функции. Делается
// //сразу при написании функции. Делается когда не понятно сколько будет аргументов.
//    let arr = Array.from(arguments);  ///чтобы перевести в массив. 
//    console.log(arr);
//    let total = 0;
//    for (let number of arr){
//        total += number 
//    }
//    return total;
// } 
// console.log(add(5,10,15));
// console.log(add(25,1,));
// console.log(add(5,10,22,35));

/////////// Пропуск  аргументов, которые нам не нужны.///////////////

// connect (5,"q") // 5 в первую ячейку  q = во второую
// connect ("q") //попадет в первую ячейку
// connect (null,"q") // первая будет пустая а вторая q

////Пример

// function add (a=1,b=1){
//     return a+b
// }
// console.log(add(22,35));
// console.log(add(5,10));
// console.log(add()); 

///////Если поставтьи налл то не будет считать ячейку


///////////////Тринировка по задачам//////////////////////////////

//1

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// function checkNumberType(num){
//     if (num % 2 === 0){
//                 return "Even"
//             } else {
//                 return "Odd"
//             }
    
// }

// console.log( checkNumberType(2) ); // 'Even'
// console.log( checkNumberType(46) ); // 'Even'
// console.log( checkNumberType(3) ); // 'Odd'
// console.log( checkNumberType(17) ); // 'Odd'

/////////////////2

/*
  Напишите функцию formatString(str)
  
  - Функция принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// function formatString (str){

//   if (str.length <= 40){      ///здесь мы прописываем условие, нужнаю длинну строки
//     return str;
//   }
//   else{
//  str.slice(0,40);        //// обрезаем  элементы от 0 до 40 
//     str += "...";        //// далее добовляем ...
//     return str;          //// ретерном пушим результат
//   }
// }
// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка
  

///////////////3

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  PS: слова могут быть в произвольном регистре
*/

// function checkForSpam(str){
//     if (str.toLowerCase().includes("spam" )||str.includes("sale")){
//  /// сначала приводим все спаны к маленьким буквам  toLowerCase
//  /// даллее проверку делаем через   includes 
//  /// даллее ставиv  "или" и проверку на другой элемент, все элементы можно доболвять через или.    
//          return "true";
//     } else{
//         return "false";
//     }
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


/////////////////////////4
// *  
//   Написать функцию, getPx(str) 
//   Функция getPx должна получать строку вида '10px',
//   проверять была ли передана строка, если да, 
//   возвращать только числовую составляющую, к примеру 10.  
//   Если была передана не строка, функция возвращает null.
// */

// Решение:
// function getPx(str){
// return (typeof str === "string") ? Number.parseFloat(str) : null ;
// если тип строки строка тогда будет число если нет тогда нулл
// }
// // // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

///////////////5
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/
// function findLongestWord(x){
//     let str =x.split(" ");
//     let numberIdx=0;
//     let longWord;
//     // for(let i=0;i<str.length;i++){          //// 1 вариант
//     //     if(str[i].length > numberIdx){
//     //         numberIdx=str[i].length;
//     //         longWord=str[i];
//     //     } 
//     // }
//     for(let elem of str){                             //// 2 вариант
//         if (elem.length > numberIdx) {
//             numberIdx = elem.length;
//             longWord = elem;
//     }
// }
//     return longWord; 
// }
// //Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'
  
//////////////6

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// Решение:
//  function findLargestNumber(numbers){   
//     let numberInd = 0;  //При проверке если нет ничего мы равняем с нулем  
// for (let el of numbers){   //здесь мы проверяем первый элемент(1) по отношению к 0
//     if (el>numberInd){
//         numberInd=el;   
//     }
// }
// return numberInd;
// }
// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128

////////////////7
/*  
  Есть массив уникальных чисел uniqueNumbers.
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers(){
//   let ArrayNew = Array.from (arguments);
//   for (let el of ArrayNew){ /// возьми цыфру в этом масиве
//   if (!uniqueNumbers.includes(el));{  ///если числа такого нету()не повторяется) 
//     uniqueNumbers.push(el);             //// пуш его(добавь) в массив uniqueNumbers
//   }
//   }
// }
// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
   
///////////////////////8
/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

   ///первым аргументов попадет в вункцию масив
     /// здесь у на с 2 и 4 счас сидит, 

//                  ///вырезаем первый аргумент

//Решение
// const filterFromArray = function (arr) {
//   let arrOfArguments = Array.from(arguments);
//   arrOfArguments.shift();
//   let arrUniqNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!arrOfArguments.includes(arr[i])) {
//       arrUniqNumbers.push(arr[i]);
//     }
//   }
//   return arrUniqNumbers;
// };

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]

/////////////////Тренировка

// let str = "Hello my frends";
// console.log(str);
// let x = str.split(" ");
// console.log(x);
// // let y = x.join("");
// // console.log(y);

// // let index = x.indexOf("f");
// // console.log(index);

// // let index = str.indexOf("frends");
// // console.log(index);

// let index = x.includes("frends");
// console.log(index);

/////////////////////////стрелочкна функция  / ( ) => {} / //////////////////////////
// Записуется она вот так

// function add (a,b){
// return a+b
// };

// const add(a,b) => {
//   return a+b
// }

// ( ) => {}  Правило важное: в стрелочной функции обязательно надо писать ретерн

// краткая запись    !!!!!!!!!!!!      const add(a,b) => a+b;  (ретерн здесь по умолчанию)

//////////////////////         Замыкания    ////////////////////////////


// для чего она нужна? если нам надо для каждого отдельного аккаунта создать счетчик свой
//например чтобы запустить скидку для каждого клиента по его покупкам, а не покупкам всем толпы

// function counter (){
//  let a = 0;
//  function x (){
//    a++;
//    console.log(a);
//  }
//  x ();
//   };
//   counter();

  //  Замыкание это переменная внутри функции например
  
// function counter (){
//   let a = 0;             это замыкание
  
//   let a = 0;             это не замыкание
// function counter (){
          

  // Важно!! при каждом новом вызове функция она будет столько же раз работать
  // вызываем через лоп или создаем переменную

//////////////////////////  Задача  #1
// Напишите ф-ю которая принисает число и возвращает его зеркальную копию.
// console.log(reverseNumber(12)) // 21
// console.log(reverseNumber(567)) // 765
// console.log(reverseNumber(1004)) // 4001

// function reverseNumber (str){
//    let test = String(str)
//    let test2 =  test.split("").reverse().join("");
//    return test2;
//   //  return test
//   };
//   reverseNumber();
  
// console.log(reverseNumber(12)) // 21
// console.log(reverseNumber(567)) // 765
// console.log(reverseNumber(1004)) // 4001

// #2
// Напишите ф-ю которая принемает строку и делает из нее строку в стиле capitalize.

//  function capitalize (str){
//    let test = str.split(" ");     //["write", "javaScript", "function"]

// 2 вариант 
  //let x = (el[0].toUpperCase()).concat(el.subst(1));
  //возьми в масиве первый элемент, первую букву и сделай большой

//     let newMasive = [];
//    for (let i = 0; i<test.length; i++){
//    let subMasive = test[i].split("");    // возьми в тесте ["write"] и сплитни его
//    let bigWord = subMasive[0].toUpperCase();        //bigWord = W  
//    subMasive.splice(0,1,bigWord);  //Возьми первый элемент, удали его и вставь большую букву
//    let newArray = subMasive.join("");      //["Write", "JavaScript", "Function"]
//    newMasive.push(newArray);
//   }
//     let result =newMasive.join(" ");         //Write JavaScript Function
//      return result
//     };

//  console.log(capitalize("write javaScript function"));
//  // (Write JavaScript Function)
//   console.log(capitalize('the quick brown fox')) //The Quick Brown Fox
//   console.log(capitalize('go to the editor')) //Go To The Editor


// #3
// Напишите ф-ю которая принемает строку и возвращает количество гласных букв в строке

// function countOfVowels (str) {
//   let arr = str.toLowerCase().split(" ");            // мы создаем первый масив
//   console.log(arr); 
//   let arrWord = ["a","o","e","i","y","u"];    //мы создаем второй массив
//   let count = 0;                             
//   for ( let i of arr){            //первый счетчик пойди возми The в масиве
//     console.log(i); 
//     for( let j of arrWord) {     //второй счетчик пойди возми a  в масиве arrWord
//       console.log(j);  
//       if (i.includes(j)) {     ///проверь в The букву из масива arrWord
//         count = count + 1;
//       };
//     }
//   }
// return count;
// }
// console.log(countOfVowels('The quick brown fox')) // 5
// console.log(countOfVowels('Example string')) // 4 
// console.log(countOfVowels('Go to the editor')) // 6 


//#4
// Напишите ф-ю которая принимает строку и букву и возвращает количество этой буквы в строке
// console.log(countLetter('w3school.com', 'o')) // 3


/////////////////////////////////// #5
// Напишите ф-ю которая переводит rgb цвет в hex цвет

// const convertColor = function (color){
//   let str = color.slice(4,-1);   //'rgb(255,255,255)') перем 4 символ (это2) и вырезаем до -1 (- скобка)
//   let resalt = "#";

//   str = str.split()

// }

// // Здесь поможет Number() i toString() 
// console.log(convertColor('rgb(255,255,255)')) // #ffffff
// console.log(convertColor('rgb(0,0,0)'))   //#000000
// console.log(convertColor('rgb(66, 134, 244)'))  // #4286f4

///////////////////////////////////////////////// #6 
// Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, 
// состоящий только из неуникальных элементов данного массива. 
// Для этого необходимо удалить все уникальные элементы
//  (которые присутствуют в данном массиве только один раз).
//   Для решения этой задачи не меняйте оригинальный порядок элементов. 
//   Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].

// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

/*
Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
console.log('16px'); // 1rem
console.log('24px'); // 1.5rem
console.log('0px'); // 0rem
*/

// =============================== #3 ===================================


// Написати ф-ю convertToPrc(container, block) 
// яка приймає розміри контейнера та розміри
//  блока в форматі строк і повертає значення блока в %. 
//  Якщо результат дробовий округлювати до двох знаків після коми.

// const convertTo = (container,block) =>
// ((parseFloat(block) / parseFloat(container) * 100.tofixed())
// console.log('1000px', '100px'); //10%
// console.log('950px', '150px'); // 15.79%


// =============================== #4 ===================================
/*
Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметри:
 from - одиниці з яких конвертувати, 
 to - одиниці в які конвертувати, 
 block - розміри блока для конвертації, 
 container - розмір контейнера. Всі параметри це строки.
  Ф-я повертає результат або % або rem.
   console.log('px', 'rem', 16); // 1rem
   console.log('px', 'rem', 24); // 1.5rem
   console.log('px','%', 100px', '1000px'); //10%
   console.log('px', '%', '150px', '950px'); // 15.79%
*/

// =============================== #5 ===================================


// Написати ф-ю convertFromKmToMetric(km).
//  Ця функція приймає відстань в кілометрах 
//  і перетворює її в м, дм, см. Ф-я повертає обєкт конвертованих даних.
// console.log(convertFromKm(1)); // {cm: 100000, dm: 10000, m: 1000,}
// console.log(convertFromKm(1.5)); // {cm: 150000, dm: 15000, m: 1500,}
// console.log(convertFromKm(3)); // {cm: 300000, dm: 30000, m: 3000,}


// =============================== #6 ===================================
/*
Написати ф-ю convertFromKmToImperial(km).
 Ця функція приймає відстань в кілометрах і перетворює її в фути, дюйми, ярди.
  Ф-я повертає обєкт конвертованих даних.
console.log(convertFromKm(1)); // {feet: 3280,84, inch: 39370,08, yards: 1093,613,}
console.log(convertFromKm(1.5)); // {feet: 4921,26, inch: 59055,12, yards: 1640,42,}
*/














