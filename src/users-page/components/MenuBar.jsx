import { Card, CardMedia, IconButton} from '@mui/material'
import React, { useState } from 'react'
import { Header } from '../utils/genericComponents'
import { MenuOutlined,CloseOutlined } from '@mui/icons-material'
import { Box } from '@mui/system'
import LogoImage from '../../assets/image/logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, setMode } from '../../redux/features/authSlice'
import Mode from '../../shared/Components/Mode'
import MenuPopupState from '../../shared/Components/MenuPopState'
const MenuBar = ({newNavList,handleNavigation,dispatch}) => {
   const navigate= useNavigate('/')
   const [navTitle,setNavTitle]= useState('Home')
   const [isSideBarOpen,setIsSideBarOpen]= useState(false)
   const {modeColor,isLightMode,isLoggedIn} = useSelector(state=>state.auth)
   const handleSideBarNavigation=(name,navigateTo)=>{
       setNavTitle(name)
       navigate(`${navigateTo}`)
        
       setIsSideBarOpen(prev=>!prev) // this to close the sidebar after clicking
  }
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      width:'100%',
      height:`${isSideBarOpen?'400px':'70px'}`,
      overflowY:'hidden',
      transition:'all 0.7s'
      }}>
     <Box sx={{width:'100%'}}>
      <Header>
        <Card sx={[style.logoContainer,{backgroundColor:modeColor}]}>
          <CardMedia 
            image={LogoImage} 
            sx={style.logoImage}
          />
        </Card>
       {!isSideBarOpen?
       <IconButton 
           onClick={()=>setIsSideBarOpen(prev=>!prev)} 
           sx={{marginRight:'20px',color:`${isLightMode?'#1e1e1e':'white'}`}}
        >
         <MenuOutlined/>
       </IconButton>:
       <IconButton 
           onClick={()=>setIsSideBarOpen(prev=>!prev)} 
           sx={{marginRight:'20px',color:`${isLightMode?'#1e1e1e':'white'}`}}
        >
         <CloseOutlined/>
       </IconButton>
       }
    </Header>
    </Box>
    <Box 
       sx={{width:'90%',height:'500px',display:'flex',flexDirection:'column',alignItems:'center'}}>
       <Box sx={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
         <Mode
          isLightMode={isLightMode} 
           handleDispatch={()=>dispatch(setMode())}
           />
       </Box>
        {newNavList?.map((item,index)=>
            <IconButton
               onClick={()=>handleNavigation(item.title,item.to)}
               sx={[style.navLists,{color:`${isLightMode?"#1e1e1e":'white'}`}]} 
               key={index}>{item.title}
            </IconButton>
          )}

      
         {(!isLoggedIn)?<IconButton 
            onClick={()=>navigate('/login')} 
            sx={style.logoInIcon}>Login</IconButton>:
            <IconButton  
            sx={style.logoInIcon}>
              <MenuPopupState handleLogOut={()=>dispatch(logOut())}/>
            </IconButton>
          }
    </Box>
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
    navLists:{
      fontSize:'14px',
      borderRadius:'0',
      width:'50%',
      height:'50px',
      ml:'5px',
     },
    logoInIcon: {
      fontSize:'14px',
      borderRadius:'5px',
      height:'40px',
      width:'120px',
      backgroundColor:'#1A6CE8',
      color:'white',
      fontWeight:'bold',
      '&:hover':{
        backgroundColor:'#1A6CE8'           
      },
      zIndex:5000       
     }
}
export default MenuBar