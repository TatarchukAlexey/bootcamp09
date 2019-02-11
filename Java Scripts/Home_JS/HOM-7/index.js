/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

const body = document.querySelector("body"); 
const movie = createTeg("div", "movie","title","",""); 
const movieBody = createTeg("div", "movie__body", "title","","");  
console.log(movieBody);

const str = end(posts);
body.append(...str)

function end (arr){ 
  const rezult =[]; 
  arr.forEach(element => { rezult.push(card(element)); }); 
//   console.log(rezult);
  return rezult; 
}
function card({img, title,text}){   
    const image = createTeg("img", "movie__image", "src", img);  
    const titlE = createTeg("h2", "movie__title","title","Title", title); 
    const description = createTeg("p", "xclass", "title", "description", text);  
    insertNode(movieBody, [image, titlE, description]);  
    insertNode(movie, [movieBody]);
    return movie;
}

function createTeg(_element, _class, _attr, _attrVal, _innerText){
  let createNode = document.createElement(_element);
      createNode.classList.add(_class);
      createNode.setAttribute(_attr, _attrVal);
      createNode.innerText = _innerText;
      return createNode;
      
}

function insertNode(parent , nodes){
  parent.append(...nodes);
} 