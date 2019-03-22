function value (state={
    name: '',
    namelast: "",
    phone: "",
    email: "",
    bithday: "",
    arr: [],
}, action) { 

    switch (action.type){
 case "CREATE":
 let srr = { name: this.state.name,
 namelast: this.state.name,
 phone: this.state.name,
 email: this.state.name,
 bithday: this.state.name,
 }
 return {
    ...state,
    arr: action.srr,
};


 case "NAME":
 return {
     ...state.arr,
     name: action.text,
 };


 case "NAMELAST":
 return {
     ...state,
     namelast: action.text,
 };
 case "PHONE":
 return {
     ...state,
     phone: action.text,
 };
 case "EMAIL":
 return {
     ...state,
     email: action.text,
 };
 case "BITHDAY":
 return {
     ...state,
     bithday: action.text,
 };

  

 default:
   return state;
}

}
export default value;
