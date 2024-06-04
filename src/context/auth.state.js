import { useState } from "react";
import AuthContext from "./auth.context";   

const AuthState=(props)=>{
    const [state,setState]=useState({
        isSiderCollapsed:true
    })
    return(
        <AuthContext.Provider value={{state,setState}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;