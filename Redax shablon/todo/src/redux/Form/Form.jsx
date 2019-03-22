import React from 'react';
import {connect} from 'react-redux';
import {change} from "../action/enterAction";
import {addObj} from "../action/enterAction";
import {name,namelast,phone,email,bithday} from "../action/enterAction";
// import {namelast} from "../action/enterAction";
import "./Form.css"

const Form = ({change,name,save, value,namelast,phone,email,bithday}) => {
        //
    return (
        // <form action="" className="form" onClick={save}> 
        <form action="" className="form" onSubmit={save}> 
        <div className="formDiv"> 
        <input type="text" className="input"  name='NAME'
         value={value.name} onChange={name} placeholder="Введите Имя"/>
        <input type="text"  name='' className="input"  
        value={value.namelast} onChange={namelast} placeholder="Введите Фамилию" />
        <input type="text"  name='' className="input"  
        value={value.phone} onChange={phone} placeholder="Номер телефона"/>
        <input type="text"  name='' className="input"  
        value={value.email} onChange={email} placeholder=" Email"/>
        <input type="text"  name='' className="input"  
        value={value.bithday} onChange={bithday} placeholder="Дата рождения"/>
        </div>
        <div className="photo">Foto</div>
         <button type="submit">Save</button>      
       </form>
    );
};
    const MSTP = (state) => ({  
        // console.log(state);
        value: state.value,
        // rrr: state.input
});


    function MDTP (dispatch) {
    return{
        change: function(e){
            dispatch (change(e)) // слушатель
        },
        name: function(e){
            dispatch (name(e)) // слушатель на импуте с неймом
        },
        namelast: function(e){
            dispatch (namelast(e)) // слушатель на импуте с неймом
        },
        phone: function(e){
            dispatch (phone(e)) // слушатель на импуте с неймом
        },
        email: function(e){
            dispatch (email(e)) // слушатель на импуте с неймом
        },
        bithday: function(e){
            dispatch (bithday(e)) // слушатель на импуте с неймом
        },
        save: function(e,text){  //функция кот зап объект с введенными в массив
            e.preventDefault();
            dispatch (addObj(text))
        }
    }
}

export default connect (MSTP, MDTP)(Form);
