import {combineReducers} from 'redux';
import counter from './counterReducer';
import input from './counterReducer';
import history from '../reducers/historyReducer';


const rootReducer = combineReducers ( {
    counter,
    input,
    history
})

export default rootReducer;
