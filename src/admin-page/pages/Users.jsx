import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/features/adminSlice'
import GridTable from '../components/GridTable'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Users = ({closeDrawer,isDrawerOpen}) => {
    const {users}= useSelector(state=>state.admin)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getAllUsers())
    },[])
      
    const column=[
        {field:"firstName",headerName:"FirstName",flex:1,cellClassName:'name-column-cell'},
        {field:"lastName",headerName:"LastName",flex:1,cellClassName:'name-column-cell'},
        {field:"gender",headerName:"Gender",type:"number",headerAlign:'left',align:'left'},
        {field:"phoneNumber",headerName:"Phone Number",flex:1},
        {field:"email",headerName:"Email",flex:1},
    ]
  return (
      <Box sx={{width:'100%',display:'flex',flexDirection:'row'}}>
        <SideBar
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
        />
         <Box sx={{display:'flex',width:'100%',position:'relative',flexDirection:'column'}}>
         <Box sx={{position:'fixed',width:`${isDrawerOpen?100:100}%`,zIndex:200}}> 
          <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         </Box>
          <Box sx={{width:'90%',marginLeft:'5%',marginTop:'80px'}}>  
          { users?.length>0?
          <GridTable 
            colors={'white'}
            data={users}
            columnFieldsList={column}
          />
          :<Typography variant='h4' sx={{marginTop:'50px',color:'#1e1e1e',textAlign:'center'}}>
             You don't have users yet
            </Typography>}
          </Box>
        </Box>
    </Box>
  )
}

export default Users