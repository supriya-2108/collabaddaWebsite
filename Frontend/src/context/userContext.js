import { createContext, useContext, useEffect, useReducer} from "react";

import reducer from "../reducer/reducer";
const getLocalUserName=()=>{
    let newUser=localStorage.getItem('USERNAME')
    if(!newUser){
        return ''
    }
    else return newUser
}
const getLocalAuthStatus = () => {
    let authStatus = localStorage.getItem('IS_AUTH');
    return authStatus === 'true';
  }
  
const initialState={
    userName:getLocalUserName(),
    isAuth:getLocalAuthStatus(),
}

const AppContext=createContext();

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
   
    const set_userName=(name)=>{
        localStorage.setItem('USERNAME', name);
        localStorage.setItem('IS_AUTH', JSON.stringify(true));
        dispatch({
            type:"Set_UserName",
            payload:name
        })
    }
    const logout=()=>{
        localStorage.removeItem('USERNAME');
        localStorage.removeItem('IS_AUTH');
        dispatch({
            type:"LogOut"
        })
    }
    return <AppContext.Provider value={{...state,set_userName,logout}}>{children}</AppContext.Provider>
}

const GlobalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,GlobalContext}