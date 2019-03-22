import {combineReducers} from 'redux';
import gallery from "../reducers/galleryReducer";



const rootReducer = combineReducers ( {
    img: gallery
    
})

export default rootReducer;