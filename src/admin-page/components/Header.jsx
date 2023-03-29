import { Box, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
 MenuOutlined,
 HomeOutlined,
 ModeNightOutlined,
 LightMode,

} from '@mui/icons-material/'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../../redux/features/authSlice'
import MenuPopupState from '../../shared/Components/MenuPopState'
import { logOut } from '../../redux/features/adminSlice'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header({closeDrawer,headerTitle}) {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {isLightMode}= useSelector(state=>state.auth)
   const {navTitle}= useSelector(state=>state.admin)
   const [adminData,setAdminData]= useState([])
   
   const handleDispatch=()=>{
    dispatch(setMode())
   }

   
  useEffect(()=>{
    setAdminData(JSON.parse(localStorage.getItem("admin")))
  },[])


  return (
    <Paper sx={[style.headerContainer,{backgroundColor:`${isLightMode?"#D9D9D9":"#1E1E1E"}`,}]}>
       <Box sx={{width:'60%',display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'20px'}}>
        <IconButton onClick={closeDrawer}>
            <MenuOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
        <Typography sx={{fontSize:'20px',fontWeight:'bolder',color:isLightMode?'#1e1e1e':'white'}}>
            {!headerTitle?navTitle?.split('/')[1]:headerTitle}
       </Typography>
        </Box>
        <Box sx={{width:'40%',display:'flex',justifyContent:'center',gap:'20px'}}>
        {isLightMode?<IconButton onClick={handleDispatch}>
            <ModeNightOutlined sx={{width:'20px',height:'20px',color:'black', fontweight:'bold'}}/>
        </IconButton>:
         <IconButton onClick={handleDispatch}>
            <LightMode sx={{color:'gold', fontweight:'bold'}}/>
        </IconButton>}
          <IconButton onClick={()=>navigate('/')}>
            <HomeOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
        <Box sx={{width:'40%'}}>
          <MenuPopupState
                handleLogOut={()=>dispatch(logOut())}>
                 <Typography 
                   sx={{fontSize:'14px',color:isLightMode?'#1e1e1e':'white'}}>
                    {adminData?.firstName}
                  </Typography>
                 <ExpandMoreIcon sx={{borderRadius:'0px'}}/>
           </MenuPopupState>
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
    }
}
export default Header