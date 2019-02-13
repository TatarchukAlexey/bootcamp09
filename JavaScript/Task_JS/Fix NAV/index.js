/* ///////////////////// задачка сайтик */

// 1) При скролі сайту на велечину хедера фбо більше меню стає фіксованим
// 2) При скролі сайту меньше ніж висота хедера меню стає на почвткову позицію


let header = document.querySelector (`.header`);
let nav = document.querySelector (`#navigation`);

let result = function(){
    if (pageYOffset>header.offsetHeight){
        nav.classList.add(`fixed-nav`);}
        else {nav.classList.remove(`fixed-nav`);
    return result;
    }
}

window.addEventListener('scroll',result);

// header.addEventListener (`scroll`,result);
// navigation.addEventListener (`scroll`,result);