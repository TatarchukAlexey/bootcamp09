/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.

  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
const wrapper = document.querySelector(".wrapper");
const users = document.querySelector(".users");
const ul = document.querySelector(".allUsers");
const usersButton = document.querySelector(".users-button");
const idButton = document.querySelector(".id-button");
const idInput = document.querySelector(".id-input");
const wrapId = document.querySelector(".wrap-id");
const newUser = document.querySelector(".new-user_button");


//////  текущий список всех пользователей в БД.

function createList (e){
  fetch ('https://test-users-api.herokuapp.com/users/')
  .then (res => res.json())
  .then (arr => { 
   
    
  const obj = arr.data;
    let string = obj.reduce((acc, el) => acc +  
    ` <li class="usersLi"><span>ID: ${el.id}</span><span>Name: ${el.name}; </span><span> Age:${el.age}</span> </li>`, "")
      ul.innerHTML += string;
  })

  // if(e.target !== usersButton){  //Логика: если нажимается не целевая кнопка, тогда чистится улка
  //    /// если нажимается целевая кнопка тогда проверка останавливается ретерном     
  //     ul.innerHTML='';
  //     return;            
  //   } 

 .catch(err=>console.log(err));
}
usersButton.addEventListener("click",createList)

//////////================== Функция добовления ID
idButton.addEventListener("click",getUserById)
function getUserById(e){
const y = idInput.value ;
// console.log(y);
const url = `https://test-users-api.herokuapp.com/users/${y}`;
// console.log(url);
 fetch(url)
.then (res => res.json())
  .then (arr => { 

if (y) {
   let obj = arr.data
  let idBox = `<div class="userID"><span>Name: ${obj.name}; </span><span> Age:${obj.age}</span> </div>`;
  wrapId.innerHTML = idBox;
}
  })
 .catch(err=>console.log(err));
}

//////////================== Функция добовления new user
// - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
const newAge = document.querySelector(".new-age");
const newName = document.querySelector(".new-name");

newUser.addEventListener("click",addUser);

function addUser(e){
const a = newAge.value ;
const b = newName.value ;

fetch ('https://test-users-api.herokuapp.com/users/', {
  method: 'POST',
  body: JSON.stringify({ name: `${b}`, age: `${a}`}),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
 .then (res => res.json())
 .then (arr => {
    console.log(arr)
e.preventDefault();  // убираем перезагрузку
form.reset(); /// очищаем инпуты  
  })
 .catch(err=>console.log(err));
}
//////////================== Функция удаления  user
// - функция removeUser(id) - должна удалять из БД юзера по указанному id.

const deleteUser = document.querySelector(".removed-user");
const deletedInput = document.querySelector(".removed-id");

deleteUser.addEventListener("click",removeUser);

function removeUser(e){
  
  let str = deletedInput.value;
  console.log(str);
  

fetch (`https://test-users-api.herokuapp.com/users/${str}`, {
  method: 'DELETE',
})
 .then (res => res.json())
 .then (arr => {
    console.log(arr)
  })
 .catch(err=>console.log(err));
}

//////////================== Функция делает изменения user
// - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
// user это объект с новыми полями name и age.


const updateButton = document.querySelector(".js-update");
const updatedId = document.querySelector(".updated-id");
const updatedAge = document.querySelector(".updated-age");
const updatedName = document.querySelector(".updated-name");

updateButton.addEventListener("click", updateUser);

function updateUser(e){
const newAge = updatedAge.value ;
const newName = updatedName.value ;
const newID = updatedId.value;

fetch (`https://test-users-api.herokuapp.com/users/${newID}`, {
  method: 'PUT',
  body: JSON.stringify({ name: `${newName}`, age: `${newAge}`}),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
 .then (res => res.json())
 .then (arr => {
    console.log(arr)
  })
 .catch(err=>console.log(err));
}