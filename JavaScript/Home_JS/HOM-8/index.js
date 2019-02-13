/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      +1.- image-gallery есть изначально в HTML-разметке как контейнер для компонента.
      2.- fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
      - Изображений может быть произвольное количество.
      - Используйте делегирование для элементов preview.
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: './foto/pexels-1-320.jpeg', fullview: './foto/pexels-1-1280.jpeg', alt: "alt text1" },
    { preview: './foto/pexels-2-320.jpeg', fullview: './foto/pexels-2-1280.jpeg', alt: "alt text2" },
    { preview: './foto/pexels-3-320.jpeg', fullview: './foto/pexels-3-1280.jpeg', alt: "alt text3" },
    { preview: './foto/pexels-4-320.jpeg', fullview: './foto/pexels-4-1280.jpeg', alt: "alt text4" },
    { preview: './foto/pexels-5-320.jpeg', fullview: './foto/pexels-5-1280.jpeg', alt: "alt text5" },
    { preview: './foto/pexels-6-320.jpeg', fullview: './foto/pexels-6-1280.jpeg', alt: "alt text6" },
  ];
  
  const galleryWrapper = document.querySelector('.js-image-gallery'); 
  const fullview = document.createElement('div');
  const img = document.createElement('img');
  const ul = document.createElement('ul');
  img.setAttribute('src', "./foto/pexels-1-1280.jpeg");
  img.setAttribute('alt', "alt text1");
  
  galleryWrapper.append(fullview); 
  galleryWrapper.append(ul); 
  fullview.append(img);
  fullview.classList.add("mainBox");
  ul.classList.add("preview");
  img.classList.add("mainImg");

function previewList (arr) { 
  let string = arr.reduce((acc, el) => acc +  
  `<li><img class="imgItem" src="${el.preview}" data-fullview="${el.fullview}" alt="${el.alt}"></li>`, " ");  
  // без data ничего бы не получилось. Он буфер куда можно закидовать дополнительные значения существующих атрибутов 
  ul.innerHTML += string;
  }
  previewList(galleryItems);

  function mainWindow (e) { 
    //первый вариант как можно решить задачу по подмене src
    const y = e.target.getAttribute("data-fullview");    // получаем адрес фото
    console.log(y);
    return img.setAttribute('src',`${y}` );           // перезаписуем src 
    // img.remove();                                                   //второй вариант как можно решить эту задачу
    // let string = `<img class="imgNew" src="${y}"  alt="zzz">`; 
    // fullview.innerHTML = string;
  }
  galleryWrapper.addEventListener('click', mainWindow);


