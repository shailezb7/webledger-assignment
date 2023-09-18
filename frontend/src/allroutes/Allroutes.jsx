import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Searchpage from '../Components/Searchpage'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import PrivateRoutes from './PrivateRoutes'
import Home from '../Components/Home'
import Result from '../Components/Result'
import Details from '../Components/Details'

const Allroutes = () => {
  return (
    <>
      
      <Routes>
        <Route  path={"/"} element={<Home/>}></Route>
        <Route  path={"/search"} element={<PrivateRoutes><Searchpage/></PrivateRoutes>}></Route>
        <Route  path={"/results"} element={ <PrivateRoutes><Result/></PrivateRoutes> }></Route>
        <Route  path={"/details"} element={ <PrivateRoutes><Details/></PrivateRoutes> }></Route>
        <Route  path={"/login"} element={<Login/>}></Route>
        <Route  path={"/signup"} element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default Allroutes
