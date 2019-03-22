import axios from "axios";

export const newData = (data) => ({
    type: "DOWNLOADER",
    data,
})

const END_POINT = 'https://pixabay.com/api/?key=';
const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

function getImg() {
    return axios.get (
        `${END_POINT}${API_KEY}&category=food&order=popular&per_page=10`

    );
}
// через dispatch запускаем редюс и доунлоуд. Он запускает конкретный екшн.
//
export const asyncGallery = () => dispatch => {
    getImg()
      .then(data=>dispatch(newData(data.data.hits)));
}

//екшены вешаются на обработчики
//они запускают редюс