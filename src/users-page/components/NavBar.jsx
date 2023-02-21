import {IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Header } from '../utils/genericComponents'
import { navList } from '../utils/navlist'
import MenuBar from './MenuBar'
import LogoImage from '../../assets/image/logo.jpg'
import MediaCard from './MediaCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/features/authSlice'
const NavBar = () => {
    const navigate=useNavigate()
    const [navTitle,setNavTitle]= useState('Home')
    const {isLoggedIn} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const handleNavigation=(title,navigateTo)=>{
       setNavTitle(title)
       navigate(`${navigateTo}`)
    }
  return (
    <Box sx={{width:'100%'}}>
     <Box sx={{width:'100%',display:{xs:'none',md:'flex'}}}>   
     <Header>
       <Box sx={{marginLeft:'40px',marginTop:'5px'}}>
        <MediaCard
          mediaWidth={'120px'}
          mediaHeight={'60px'}
          imgUrl={LogoImage}
         />
         </Box>
        <Box sx={style.navRightItemContainer}>
          {navList.map((item,index)=>
            <IconButton
                onClick={()=>handleNavigation(item.title,item.to)}
               sx={[style.navLists, {borderBottomColor:`${navTitle===item.title?'#1A6CE8':'white'}`}]} 
               key={index}>
                {item.title}
            </IconButton>
          )}
          {!isLoggedIn?<IconButton 
            onClick={()=>navigate('/login')} 
            sx={style.logoInIcon}>Login</IconButton>:
            <IconButton 
            onClick={()=>dispatch(logOut())} 
            sx={style.logoInIcon}>LogOut</IconButton>
            
            }
        </Box>
    </Header>
    </Box>
    <Box sx={{display:{md:'none',xs:'flex'}}}>
      <MenuBar/>
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
    navRightItemContainer:{
        width:'55%',
        height:'50px',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        gap:'20px',
        marginLeft:'-30px'
    },
     logoImage:{
      width:'50%',
      height:'100%'
    },
     navLists:{
      fontSize:'14px',
      borderRadius:'0',
      width:'80px',
      height:'100%',
      borderBottom:1,
      borderBottomWidth:3,
      ml:'5px',
     },
    logoInIcon: {
      fontSize:'14px',
      borderRadius:'5px',
      height:'40px',
      width:'120px',
      backgroundColor:'#26A9E0',
      color:'white',
      fontWeight:'bold',
      marginRight:'60px',
      '&:hover':{
        backgroundColor:'#26A9E0'           
      },
             
     }
}
export default NavBar