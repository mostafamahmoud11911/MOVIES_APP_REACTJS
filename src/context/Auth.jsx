import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();

  function signInUser() {
    const token = localStorage.getItem("user");
    const decode = jwtDecode(token);
    setLoginUser(decode);
  }

  function signoutUser() {
    localStorage.removeItem("user");
    setLoginUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ loginUser, signInUser, signoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}


