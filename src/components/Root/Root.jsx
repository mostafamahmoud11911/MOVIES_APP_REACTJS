import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../context/Auth";


export default function Root() {
  const { signInUser } = useContext(AuthContext)

  useEffect(()=>{
    if(localStorage.getItem('user')){
      signInUser()
    }
  },[]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
