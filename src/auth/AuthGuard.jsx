import { Children } from "react";
import { Navigate, redirect } from "react-router-dom";
const AuthGuard =({
  Children,
  required = true,
  redirect ="/login" 
})=>{ 
    const Data = JSON.parse(localStorage.getItem("Data"));
    const isAuthenticated = !!Data;
    
    if(required && !isAuthenticated){
        return <Navigate to={redirect} replace />
    }
    if(!required && isAuthenticated){
        return <Navigate to="/dashboard" replace/>
    }
    return Children;
};
    

   
  

export default AuthGuard
