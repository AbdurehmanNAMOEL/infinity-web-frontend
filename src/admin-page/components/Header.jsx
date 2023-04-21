import { Box, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {MenuOutlined,ModeNightOutlined,LightMode,} from '@mui/icons-material/'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../../redux/features/authSlice'
import { logOut } from '../../redux/features/adminSlice'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
function Header({closeDrawer,headerTitle,openModal}) {
   const dispatch = useDispatch()
   const {isLightMode}= useSelector(state=>state.auth)
   const {navTitle,isDrawerOpen}= useSelector(state=>state.admin)
   const [adminData,setAdminData]= useState([])
   
   const handleDispatch=()=>{
    dispatch(setMode())
   }

   
  useEffect(()=>{
    setAdminData(JSON.parse(localStorage.getItem("admin")))
  },[])
console.log(isDrawerOpen);

  return (
    <Paper sx={[style.headerContainer,{backgroundColor:`${isLightMode?"#D9D9D9":"#1E1E1E"}`,}]}>
       <Box sx={{width:{xs:'30%',md:'40%'},display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'20px'}}>
        <IconButton onClick={closeDrawer}>
            <MenuOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
        <Typography sx={{fontSize:'20px',display:{xs:'none',md:'flex'},fontWeight:'bolder',color:isLightMode?'#1e1e1e':'white'}}>
            {!headerTitle?navTitle?.split('/')[1]:headerTitle}
       </Typography>
        </Box>
        <Box sx={{width:{xs:'50%',md:`${isDrawerOpen?40:50}%`},display:'flex',justifyContent:'center',gap:'20px'}}>
        {isLightMode?<IconButton onClick={handleDispatch}>
            <ModeNightOutlined sx={{width:'20px',height:'20px',color:'black', fontweight:'bold'}}/>
        </IconButton>:
         <IconButton onClick={handleDispatch}>
            <LightMode sx={{color:'gold', fontweight:'bold'}}/>
        </IconButton>}
           <IconButton onClick={openModal}>
            <PersonAddIcon sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
        <Box sx={{width:'40%'}}>
         <IconButton  
          sx={[style.logoutBtnContainer,{width:{xs:'60px',md:'120px'}}]} 
          onClick={()=>dispatch(logOut())}>
            <LogoutIcon sx={{color:'white', fontweight:'bold'}}/>
            <Typography 
            sx={{fontSize:'14px',display:{xs:'none',md:'flex'},fontWeight:'bolder',color:'white'}}>LogOut</Typography>
        </IconButton>
           </Box>
        </Box>
    </Paper>
  )
}

const style ={
    headerContainer:{
        width:'100%',
        height:'60px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        zIndex:400,
        borderRadius:'0px',
        position:'fixed'
    },
    logoutBtnContainer:{
      height:'40px',
      backgroundColor:'#1977FC',
      borderRadius:'5px',
      gap:'6px',
      '&:hover':{
        backgroundColor:'#1977FC'
      }
  
    }
}
export default Header