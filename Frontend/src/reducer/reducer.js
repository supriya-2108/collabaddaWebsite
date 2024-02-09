const reducer = (state, action) => {
    switch (action.type) {
      case "Set_UserName":
        
        return{
            ...state,
            userName:action.payload,
            isAuth:true
            
        }
        case "LogOut":
        return{
            ...state,
            userName:'',
            isAuth:false
        }
default:
        return state;
    }
  };
  
  export default reducer;
  