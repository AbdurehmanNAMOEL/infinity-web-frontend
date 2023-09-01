import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminPrivateRoute = () => {
 const {isAdminLoggedIn}= useSelector(state=>state.admin)
  return (
    true?<Outlet/>:<Navigate to ={'/adminLogin'}/>
  )
}

export default AdminPrivateRoute