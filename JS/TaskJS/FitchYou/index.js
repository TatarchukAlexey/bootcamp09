// last fm api https://www.last.fm/ru/api
// last.fm key 412e51e107155c7ffabd155a02371cbd
// youtrube iframe
// <iframe src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
// </iframe>
// youtube search API https://developers.google.com/youtube/v3/docs/search/list
// yputube key AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8 (edited) 
// добавить в конце ссылки "q"

let wrap = document.querySelector(`.container`);
let video = document.querySelector(`.video`);

function boxAudio (){
const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&format=json`;
fetch(url)
.then(response=>response.json())  
.then(arr =>{  
    // console.log(arr);  //   получаем artists{artist:[....]}
let y = arr.tracks.track;    //берем массив и запускаем построение дивов
createList(y);  ///вызываем функцию кот построит нам список артистов
wrap.addEventListener("click",boxVideo)  /// вешаем слушателя на тег
//  console.log(link.innerHTML);
})
.catch(err=>console.log(err));
}
window.addEventListener("DOMContentLoaded",boxAudio)
//////////////////////////функция по созданию списка тегов с артистами
function createList (str){
    let string = str.reduce((acc, el) => acc +  
    `<div class="wrap">
    <a class="link" href="#">${el.artist.name}</a>
    <h2 class="nameArtist">${el.name}</h2>
    <div class="nameSing"><img  class="img" src="${el.image[1]["#text"]}" alt="#"></div>   
    </div>`,     // основная ошибка была тут "#text" - в кавычки надо брать когда символы
   " ");  
   wrap.innerHTML = string; 
}
//////////////////////////функция по видео c YouToub
function boxVideo (e){
    // console.log(e.target.textContent);
    // console.log(e.target.previousElementSibling.textContent);
    let query = ` ${e.target.textContent}`;
    console.log(query);
    
    const url = `https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&maxResults=1&type=video&q=${query}`;
    fetch(url)
    .then(response=>response.json())  
    .then(arr =>{  
        console.log(arr);
        let videoID = arr.items[0].id.videoId;
        let str = `
        <iframe class="iframe" src="https://www.youtube.com/embed/${videoID}?autoplay=1"
         frameBorder="0" allow="autoplay;encrypted-media" allowFullScreen> </iframe>`;
         video.innerHTML = str;
         
    })
    .catch(err=>console.log(err));
    }

