/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid(login), в которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.

  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
  !!!!!! Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'      
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

let login = prompt ("Введите логин от 4 до 16 символов");
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(str) {
  if (str.length>=4 && str.length<16){
    return true;
  } else {return false;}
}
console.log(isLoginValid(login));


const isLoginUnique = function (allLogins, str) {
  if(allLogins.includes(str)){
    return false;
  } else {return true;}
};
console.log(isLoginUnique(logins,login));


const addLogin = function(arrLogins, userLogin) {
  // isLoginValid(str);
  let result = isLoginValid(userLogin);    // таким образом мы передаем функцию в функции
  if (result===false){                 // приравниваем результат функции к фолсу
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
    return;           // останавливаем функцию
  } else{
    let uniqResalt = isLoginUnique(arrLogins,userLogin); // вызываем 2 функцию
    if (uniqResalt){              // сюда загоняем результат 2 функ.
      arrLogins.push(userLogin);   // пушим логин в массив если такого логина нету
      alert ('Логин успешно добавлен!');
    } else {alert ('Такой логин уже используется!' );} 
  }
};
console.log(addLogin(logins,login));

