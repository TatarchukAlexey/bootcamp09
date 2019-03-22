import {combineReducers} from 'redux';
import input from './inputReducer';
import value from './valueReducer';



const rootReducer = combineReducers ( {
    // input: input,
    value,
})

export default rootReducer;