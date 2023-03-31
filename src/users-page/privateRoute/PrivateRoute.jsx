import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'
const PrivateRoute = () => {
  const {isLoggedIn}= useSelector(state=>state.auth)
  const {isAdminLoggedIn}= useSelector(state=>state.admin)
  return (
  isLoggedIn||isAdminLoggedIn?<Outlet/>:<Navigate to ={'/login'}/>
  )
}

export default PrivateRoute