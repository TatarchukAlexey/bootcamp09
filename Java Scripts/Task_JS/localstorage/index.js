// запускаем ноду проверяем в гите команда    ( npm -v )
//если нода есть то запускаем ее npm start (у нас начнет работать локальный сервак)
//адресс локального сервака http://localhost:3001/tasks
/*Вставляем линки   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"></link>
 */
// Скачали файл библиотеку по ноде


let ul = document.querySelector (".todo-list");   
let form = document.querySelector (".form");
let input = document.querySelector (".input");


fetch("http://localhost:3001/tasks") //привязываем локальную ссылку
.then (res=>res.json())
.then (data=>{
    localStorage.setItem(`task`, JSON.stringify(data));
    renderItems(data)}) /// активация функции по созданию лишек и кнопочек
.catch(er=>{
let storageData = JSON.parse (localStorage.getItem(`task`)) || [];  /// теперь код работает с инетом и без
renderItems(storageData);
});

// window.addEventListener("DOMContentLoaded", renderItems);



function renderItems(arr){  // 
    let result = arr.reduce ((acc,el) => acc +  `<li class="todo-list__item">
    ${el.text}     
    <button class="btn todo-list__item-remove">
      <i class="fa fa-times"data-id=${el.id}></i>
    </button>
  </li>`,"");
  ul.innerHTML += result;  //вставляем результат редюса в уелку
}

///функцию надо запустить во втором зене
/// если не сохарнить на локал стороже,
//  то при отсутствие интернета все пропадет

///Задача этой функции принять данные с импута и отправить на сервер
function creataTask(e){
    e.preventDefault(); /// убираем перезагрузку
    if(!input.value){
        return
    }
    let task = {        ///создаем объект для отправки
        text: input.value,
    }

    fetch ("http://localhost:3001/tasks",{
    method: "post",
    body: JSON.stringify(task),
    headers: {"Content-type": "application/json; charset=UTF-8"}
   })
   .then (res=>res.json())
   .then (data=>
{  ///здесь будет масив с одним объетом
    let arr = JSON.parse(localStorage.getItem("task"));      ////здесь перезаписуем локал сториж
    arr.push (data);
    localStorage.setItem("task", JSON.stringify(arr));////старый масив перезаписуем на новый
    renderItems([data]);
}) 
   .catch(er=>console.log(er));
    console.log(task);
    form.reset(); /// очищаем инпуты 
}



function deletTask(e){ ///основная задача свзасся с id дишками, через простое доболение атрибута data-id=${el.id} 
let id = e.target.dataset.id;
fetch (`http://localhost:3001/tasks/${id}`,{method: "delete"})   ///вставляем /$(id)
.then (res=>res.json())
.then (data=>{
e.target.closest("li").remove();
let storageData = JSON.parse(localStorage.getItem("task")) || []; 
let filterArr = storageData.filter(el=>el.id !== Number(id));
localStorage.setItem("task", JSON.stringify(filterArr));
console.log(data);
})
.catch(er=>console.log(er));
}

ul.addEventListener("click", deletTask);
form.addEventListener ("submit",creataTask);