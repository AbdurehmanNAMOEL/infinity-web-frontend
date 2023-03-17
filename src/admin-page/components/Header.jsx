import { Box, IconButton, Paper } from '@mui/material'
import React from 'react'
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

function Header({closeDrawer}) {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {isLightMode}= useSelector(state=>state.auth)
   const handleDispatch=()=>{
    dispatch(setMode())
   }
  return (
    <Paper sx={[style.headerContainer,{backgroundColor:`${isLightMode?"#D9D9D9":"#1E1E1E"}`,}]}>
       <Box sx={{width:'50%',display:'flex',justifyContent:'flex-start'}}>
        <IconButton onClick={closeDrawer}>
            <MenuOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
        </Box>
        <Box sx={{width:'50%',display:'flex',justifyContent:'center'}}>
        {isLightMode?<IconButton onClick={handleDispatch}>
            <ModeNightOutlined sx={{width:'20px',height:'20px',color:'black', fontweight:'bold'}}/>
        </IconButton>:
         <IconButton onClick={handleDispatch}>
            <LightMode sx={{color:'gold', fontweight:'bold'}}/>
        </IconButton>}
          <IconButton onClick={()=>navigate('/')}>
            <HomeOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
         <MenuPopupState/>
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