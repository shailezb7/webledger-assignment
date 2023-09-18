import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contextapi/AuthContext';


const PrivateRoutes = ({children}) => {
    let {isAuth}=useContext(AuthContext);
    if(!isAuth){
        return <Navigate to="/login"/>
    }else{
        return children
    }
}

export default PrivateRoutes