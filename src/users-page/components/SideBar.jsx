import { Box, IconButton, Paper } from '@mui/material'
import React from 'react'
import { MenuOutlined,CloseOutlined } from '@mui/icons-material'
import { navList } from '../utils/navlist'
import { handleResponsiveness } from '../auth/styles/loginStyle'
const SideBar = ({isSideBarOpen,setIsSideBarOpen,handleSideBarNavigation,navTitle}) => {
  return (
   <Paper sx={[style.sideBarContainer,{marginLeft:`${isSideBarOpen?'0%':'-100%'}`}]}>
            <Box sx={style.closingIconContainer}>
              <CloseOutlined  
                onClick={()=>setIsSideBarOpen(prev=>!prev)} 
                sx={style.closingIcon}
              />
            </Box>
            {navList.map((item,index)=>
            <IconButton
              onClick={()=>handleSideBarNavigation(item.title)}
              sx={[style.sideBarIconButtonList,
                 {borderRightColor:`${navTitle===item.title?'#1A6CE8':'rgba(0,0,0,0)'}`}]} 
              key={index}>{item.title} </IconButton>
          )}

      </Paper>
  )
}

const style = {
    sideBarContainer:{
      width:handleResponsiveness('80%','50%'),
      height:'100%',
      position:'absolute',
      backgroundColor:'#5c5b5bb9',
      display:'flex',
      gap:'40px',
      transition:'all 0.7s',
      flexDirection:'column',
      borderRadius:'0',
      zIndex:200
    },
    closingIconContainer:{
      height:'40px',
      width:'100%', 
      display:'flex',
      justifyContent:'flex-end',
    },
    closingIcon:{
      width:'30px',
      marginTop:'10px',
      borderRadius:'100%',
      cursor:'pointer',
      color:'white',
      marginRight:'20px',
      height:'30px',
      border:2,
      borderColor:'white'
    },
    sideBarIconButtonList:{
      color:'white',
      fontSize:'18px',
      borderRadius:'0',
      width:'100%',
      height:'50px',
      borderRight:6,
      borderBottomWidth:15,
      fontWeigh:'bold',
      marginBottom:'15px'
    }
}
export default SideBar