import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'
const PrivateRoute = () => {
 const {isLoggedIn}= useSelector(state=>state.auth)
  return (
    isLoggedIn?<Outlet/>:<Navigate to ={'/login'}/>
  )
}

export default PrivateRoute