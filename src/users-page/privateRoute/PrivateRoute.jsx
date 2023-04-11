import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'
const PrivateRoute = () => {
  const {isUserLoggedIn}= useSelector(state=>state.auth)
  console.log(isUserLoggedIn);
  return (
  isUserLoggedIn?<Outlet/>:<Navigate to ={'/login'}/>
  )
}

export default PrivateRoute