import { Box, IconButton, Paper } from '@mui/material'
import React from 'react'
import {
 MenuOutlined,
 HomeOutlined,
 NotificationsOffOutlined,
  NotificationsOutlined,
} from '@mui/icons-material/'
import { useNavigate } from 'react-router-dom'

function Header({closeDrawer}) {
   const navigate = useNavigate()
  return (
    <Paper sx={style.headerContainer}>
        <IconButton onClick={closeDrawer}>
            <MenuOutlined sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
        <Box>
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
        backgroundColor:'#D9D9D9',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        zIndex:400,
        borderRadius:'0px',
     
    }
}
export default Header