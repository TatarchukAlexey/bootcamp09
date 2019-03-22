function counter (state=0, action) {  
     // описуем как будет менятся стейт в зависимости
     // от типа екшена что запускается
 switch (action.type){
  case "PLUS":
  return state + action.data;
  case 'MINUS':
  return state - action.data;
  case 'RESET':
  return 0;
  default:
    return state;

 }

}

export default  counter;