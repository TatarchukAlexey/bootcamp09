import React from 'react';
import './Form.css'
import {connect} from "react-redux";
import {addObj} from "../redux/action/historyAction"
import {clear} from "../redux/action/historyAction";
import {change} from "../redux/action/inputAction";

const Form = ({input,change,save,clear}) => { // второй способ декларирования аргументов
    const formSubmit = (e) => {
        save(e.clear);
        clear();
    }
    return (
       <form action="" className="form" onSubmit= {formSubmit}>   // здесь вызываем 2 функции по очерди
        <input type="text"  name='' value={input} onChange={change}/>
         <button type="submit">Save</button>
       
       </form>
    );
};

function MSTP (state) {
return{
    input: state.input,
}
}

function MDTP (dispatch) {
return{
    change: function(e){
        dispatch (change(e))
    },
    save: function(e,text){
        e.preventDefault();
        dispatch (addObj(text))
    },
    clear: function(){
        dispatch (clear())
    }
}
}
export default connect(MSTP,MDTP) (Form);