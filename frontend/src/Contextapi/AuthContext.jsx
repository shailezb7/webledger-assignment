import { useState, createContext } from "react";
export const AuthContext = createContext();

function AuthContextProviderComponent({ children }) {

  let [filter,setFilter]=useState("");

  let [isAuth,setIsAuth]=useState(false);
  let[searchData,setsearchData]=useState([]);

  return (

    <AuthContext.Provider value={{ isAuth , setIsAuth,filter,setFilter,searchData,setsearchData}}>
      {children}
    </AuthContext.Provider>

  );
}

export default AuthContextProviderComponent;