function input (state=0,action) {
   switch (action.type){  // через свич мы говорим как мы будем менять стейт.
       case "TYPING":  /// "TYPING" это команда
             return action.value;
       case "CLEAR":
        return "" ;
     
             default:
             return state;
   } 
}
export default input;