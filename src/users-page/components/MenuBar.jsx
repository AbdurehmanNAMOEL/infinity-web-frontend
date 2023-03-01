import { Card, CardMedia, IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { Header } from '../utils/genericComponents'
import { MenuOutlined,CloseOutlined } from '@mui/icons-material'
import { Box } from '@mui/system'
import LogoImage from '../../assets/image/logo.png'
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom'
const MenuBar = () => {
   const navigate= useNavigate('/')
   const [navTitle,setNavTitle]= useState('Home')
   const [isSideBarOpen,setIsSideBarOpen]= useState(false)
   const handleSideBarNavigation=(name,navigateTo)=>{
       setNavTitle(name)
       navigate(`${navigateTo}`)
        
       setIsSideBarOpen(prev=>!prev) // this to close the sidebar after clicking
  }
  return (
    <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
     <Box sx={{width:'100%'}}>
      <Header>
        <Card sx={style.logoContainer}>
          <CardMedia 
            image={LogoImage} 
            sx={style.logoImage}
          />
        </Card>
       <IconButton 
           onClick={()=>setIsSideBarOpen(prev=>!prev)} 
           sx={{marginRight:'20px'}}
        >
         <MenuOutlined/>
       </IconButton>
    </Header>
    </Box>
      <SideBar 
      isSideBarOpen={isSideBarOpen}
      setIsSideBarOpen={setIsSideBarOpen}
      handleSideBarNavigation={handleSideBarNavigation}
      navTitle={navTitle}
      />
    </Box>
  )
}

const style = {
    logoContainer:{
      width:'200px',
      height:'50px',
      marginLeft:'20px',
      boxShadow:'none',

    },
    logoImage:{
      width:'50%',
      height:'100%'
    },
    
}
export default MenuBar