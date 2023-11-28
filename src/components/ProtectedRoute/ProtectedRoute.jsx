import React from "react";
import { Navigate } from "react-router-dom";



export default function ProtectedRoute({children}) {

    if(!localStorage.getItem('user')){
        return (<Navigate to='/login'/>)
    }
    return children;
}
