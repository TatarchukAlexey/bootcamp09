function save (state={
    name: '',
    namelast: "",
    phone: "",
    email: "",
    bithday: "",
    arr: [],
}, action) { 

    switch (action.type){
 case "NAME":
 return {
     ...state,
     name: action.text,
 };

 

  

 default:
   return state;
}

}
export default value;
