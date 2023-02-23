import { Box, IconButton, Paper } from '@mui/material'
import React from 'react'
import {
 MenuOutlined,
 HomeOutlined,
 ModeNight,
LightMode,
 NotificationsOutlined,
} from '@mui/icons-material/'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../../redux/features/authSlice'

function Header({closeDrawer}) {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {isLightMode}= useSelector(state=>state.auth)
   const handleDispatch=()=>{
    dispatch(setMode())
   }
  return (
    <Paper sx={[style.headerContainer,{backgroundColor:`${isLightMode?"#D9D9D9":"#121212"}`,}]}>
        <IconButton onClick={closeDrawer}>
            <MenuOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
        <Box>
        {isLightMode?<IconButton onClick={handleDispatch}>
            <ModeNight sx={{color:'black', fontweight:'bold'}}/>
        </IconButton>:
         <IconButton onClick={handleDispatch}>
            <LightMode sx={{color:'gold', fontweight:'bold'}}/>
        </IconButton>}
          <IconButton onClick={()=>navigate('/')}>
            <HomeOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
         <IconButton onClick={closeDrawer}>
            <NotificationsOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
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
        justifyContent:'space-between',
        alignItems:'center',
        zIndex:400,
        borderRadius:'0px',
     
    }
}
export default Header